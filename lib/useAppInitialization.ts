import { useState, useEffect } from "react";
import {
  isFirstTime,
  setFirstTimeFlag,
  getShoppingLists,
  saveActiveItem,
  getActiveItem,
} from "@/lib/AsyncStorage";
import { EventEmitter } from "events";

const shoppingListEmitter = new EventEmitter();

const useAppInitialization = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [shoppingLists, setShoppingListsState] = useState<ShoppingListItem[]>(
    []
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeListId, setActiveListId] = useState<string | null>(null);

  // Function to update shopping lists and trigger emitter
  const setShoppingLists = (lists: ShoppingListItem[]) => {
    setShoppingListsState(lists); // Update state
    shoppingListEmitter.emit("update", lists); // Emit update event
  };

  // Function to add a new list
  const addNewList = (newList: ShoppingListItem) => {
    const updatedLists = [...shoppingLists, newList];
    setShoppingLists(updatedLists); // Use setShoppingLists to update and emit
  };

  // Function to fetch the active item
  const fetchActiveItem = async () => {
    const storedActiveItem = await getActiveItem();
    if (storedActiveItem) {
      setActiveListId(storedActiveItem);
    }
  };

  // Function to save the active item
  const setActiveItem = (id: string) => {
    setActiveListId(id);
    saveActiveItem(id); // Save to async storage
  };

  useEffect(() => {
    const initializeApp = async () => {
      const firstTime = await isFirstTime();
      setIsFirstLaunch(firstTime);

      if (firstTime) {
        setIsModalVisible(true); // Show the modal if it's the first launch
        await setFirstTimeFlag(); // Set the first time flag
      }

      const lists = await getShoppingLists();
      setShoppingLists(lists);

      if (lists.length > 0) {
        await fetchActiveItem(); // Fetch the active item on app load
      }
    };

    initializeApp();
  }, []);

  return {
    isFirstLaunch,
    isModalVisible,
    shoppingLists,
    setShoppingLists,
    setIsModalVisible,
    addNewList,
    activeListId,
    setActiveItem,
    fetchActiveItem,
    shoppingListEmitter, // Expose the emitter for event-based updates
  };
};

export default useAppInitialization;
