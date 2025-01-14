import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import React, { useState } from "react";
import { getTimeSpan } from "@/lib/getTimeSpan";
import useAppInitialization from "@/lib/useAppInitialization";
import { saveShoppingLists } from "@/lib/AsyncStorage";
import ProgressCircle from "./ProgressCircle"; // Import ProgressCircle component
import { useShoppingList } from "@/context/ShoppingListContext";

interface Props {
  item: Vegetable | Fruit;
  onPress?: () => void;
}

const VegetableCard = ({ item, onPress }: Props) => {
  const { activeListId, setShoppingLists } = useAppInitialization();
  const { shoppingLists } = useShoppingList();

  const [loading, setLoading] = useState(false);

  // Find active shopping list and check if the item is in the list
  const activeList = shoppingLists.find((list) => list.id === activeListId);
  const isItemInList =
    activeList?.items?.some(
      (oldItem) =>
        oldItem.name.toLowerCase() === item.name.trim().toLowerCase() &&
        oldItem.status === "open"
    ) ?? false;

  const addToList = async () => {
    try {
      if (!activeList) {
        Alert.alert(
          "Ups!",
          `Erstelle erst eine Einkaufsliste 🛒 um deinen Artikel hinzuzufügen.`
        );
        return;
      }

      if (isItemInList) {
        Alert.alert(
          "Ups!",
          `${item.name}${item.emoji} ist bereits in deiner Liste.`
        );
        return;
      }

      // Add item to the active list
      const newItem: VegetableItem | FruitItem = {
        ...item,
        id: `${Date.now()}`,
        status: "open",
        visStatus: "open",
      };
      activeList.items!.push(newItem);

      // Save updated lists and trigger re-render
      await saveShoppingLists(shoppingLists);
      setShoppingLists([...shoppingLists]);

      // Show loading progress before displaying the checkmark
      setLoading(true);
      setTimeout(() => setLoading(false), 500);
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
        {item.image ? (
          <Image
            source={item.image}
            resizeMode="contain" // Ensures the image fits within the container
            style={{ flex: 1, width: "100%", height: "100%" }} // Fill the parent while maintaining aspect ratio
          />
        ) : (
          <Text className="text-7xl text-center leading-normal">
            {item.emoji}
          </Text>
        )}
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
        className="bg-white absolute justify-center items-center right-2 top-2 w-10 h-10 rounded-xl shadow shadow-zinc-500"
      >
        {loading ? (
          <ProgressCircle color="green" duration={500} size={20} />
        ) : isItemInList ? (
          <Text className="text-lg">✔️</Text>
        ) : (
          <Text className="text-lg">🛒</Text>
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default VegetableCard;
