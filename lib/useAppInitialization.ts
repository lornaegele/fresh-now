import { useState, useEffect } from "react";
import {
  isFirstTime,
  setFirstTimeFlag,
  getShoppingLists,
  saveActiveItem,
} from "@/lib/AsyncStorage";

const useAppInitialization = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [shoppingLists, setShoppingLists] = useState<ShoppingListItem[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to add a new list
  const addNewList = (newList: ShoppingListItem) => {
    setShoppingLists((prevLists) => [...prevLists, newList]);
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

      lists.length > 0 && saveActiveItem(lists[0].id);
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
  };
};

export default useAppInitialization;
