import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { getTimeSpan } from "@/lib/getTimeSpan";
import useAppInitialization from "@/lib/useAppInitialization";
import { getShoppingLists, saveShoppingLists } from "@/lib/AsyncStorage";
import ProgressCircle from "./ProgressCircle"; // Import ProgressCircle component
import { useShoppingList } from "@/context/ShoppingListContext";

interface Props {
  item: Vegetable | Fruit;
  onPress?: () => void;
}

const VegetableCard = ({ item, onPress }: Props) => {
  const { activeListId, setShoppingLists } = useAppInitialization();
  const { shoppingLists } = useShoppingList();

  const [loading, setLoading] = useState(false); // State to control progress circle and checkmark display
  const [isItemInList, setIsItemInList] = useState(false); // State to track if the item is already in the list

  useEffect(() => {
    const activeList = shoppingLists.find((list) => list.id === activeListId);
    if (activeList) {
      const itemExists = activeList.items?.some(
        (oldItem) =>
          oldItem.name.toLowerCase() === item.name.trim().toLowerCase() &&
          oldItem.status === "open"
      );
      itemExists !== undefined && setIsItemInList(itemExists); // Reactively update state
    }
  }, [shoppingLists, item.name, activeListId]);

  const addToList = async () => {
    try {
      // Fetch the current shopping lists from AsyncStorage
      let shoppingLists = await getShoppingLists();

      // Find the active shopping list by activeListId
      const activeList = shoppingLists.find((list) => list.id === activeListId);

      if (activeList) {
        // If active list exists, ensure it has an items array
        activeList.items = activeList.items || [];

        const itemExists =
          activeList.items &&
          activeList.items.some(
            (oldItem) =>
              oldItem.name.toLowerCase() === item.name.trim().toLowerCase() &&
              oldItem.status === "open"
          );

        if (itemExists) {
          setIsItemInList(true); // Update the state to indicate item exists
          Alert.alert(
            "Ups!",
            `${item.name}${item.emoji} ist bereits in deiner Liste.`
          );
          return;
        }

        // Add the item to the active list
        const Item: VegetableItem | FruitItem = {
          ...item,
          id: `${Date.now()}`,
          status: "open",
          visStatus: "open",
        };

        activeList.items.push(Item);

        // Save the updated shopping lists back to AsyncStorage
        await saveShoppingLists(shoppingLists);

        // Update the state of shopping lists, if necessary
        setShoppingLists(shoppingLists); // Assuming setShoppingLists updates the state

        // Show the progress circle for 1 second, then show the checkmark icon
        setLoading(true);
        setTimeout(() => {
          setLoading(false); // After 1 second, replace progress with checkmark
          setIsItemInList(true); // Update the state to show the checkmark
        }, 500);
      } else {
        console.error("Active list not found!");
      }
    } catch (error) {
      console.error("Error adding item to list:", error);
    }
  };

  return (
    <TouchableOpacity
      className="p-4 w-[47%] h-[180px] flex justify-between flex-col shadow shadow-zinc-200 rounded-2xl bg-primary-300 mb-4"
      onPress={onPress}
    >
      <View className="flex-1 justify-center items-center">
        <Text className="text-7xl text-center leading-normal">
          {item.emoji}
        </Text>
      </View>
      <View className="flex flex-col">
        <Text className="text-white font-rubik-bold text-xl ">{item.name}</Text>
        <Text
          className="text-white font-rubik"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {getTimeSpan(item.season, "DE")}
        </Text>
      </View>
      <TouchableOpacity
        onPress={addToList}
        className="bg-white absolute  justify-center items-center right-2 top-2 w-10 h-10 rounded-xl shadow shadow-zinc-500"
      >
        {loading ? (
          <ProgressCircle color="green" duration={500} size={20} /> // Show progress circle while adding item
        ) : isItemInList ? (
          <Text className="text-lg">✔️</Text> // Show shopping cart icon if item isn't added
        ) : (
          <Text className="text-lg">🛒</Text> // Show shopping cart icon if item isn't added
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default VegetableCard;
