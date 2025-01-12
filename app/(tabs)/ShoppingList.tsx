import {
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getShoppingLists, saveShoppingLists } from "@/lib/AsyncStorage";
import ProgressCircle from "@/components/ProgressCircle";
import { ScrollView } from "react-native-gesture-handler";
import { fruitsDE } from "@/data/fruits";
import { vegetablesDE } from "@/data/vegetables";
import { groceriesDE } from "@/data/groceries";
import useAppInitialization from "@/lib/useAppInitialization";
import { useShoppingList } from "@/context/ShoppingListContext";

const ShoppingList = ({ list }: { list: ShoppingListItem }) => {
  const [newItemName, setNewItemName] = useState("");
  const [doneItem, setDoneItem] = useState<
    GroceryItem | VegetableItem | FruitItem | null
  >();
  const [suggestions, setSuggestions] = useState<
    (Grocery | Vegetable | Fruit)[]
  >([]);
  const [shoppingList, setShoppingList] = useState<ShoppingListItem>(list);
  const { shoppingLists } = useShoppingList();

  const { setShoppingLists, activeListId } = useAppInitialization();

  useEffect(() => {
    const activeList = shoppingLists.find(
      (list) => list.id === shoppingList.id
    );
    if (activeList) {
      setShoppingList(activeList); // Update the shopping list when the lists change
    }
  }, [shoppingLists, activeListId]);

  const handleAddNewItem = async (newName: string) => {
    if (!newName.trim()) return;

    let shoppingLists = await getShoppingLists();

    const allItems = [...fruitsDE, ...groceriesDE, ...vegetablesDE];

    // Check if the item already exists
    const itemExists = shoppingList.items!.some(
      (item) =>
        item.name.toLowerCase() === newName.trim().toLowerCase() &&
        item.status === "open"
    );

    if (itemExists) {
      Alert.alert("Doppelt", `${newName} ist schon in deiner Liste.`);
      return;
    }

    // Find the item in allItems
    const existingItem = allItems.find(
      (item) => item.name.toLowerCase() === newName.trim().toLowerCase()
    );

    const newGrocery: GroceryItem = existingItem
      ? {
          ...existingItem,
          id: `${Date.now()}`,
          status: "open",
          visStatus: "open",
          emoji: existingItem.emoji || "🛒",
        }
      : {
          id: `${Date.now()}`,
          name: newName,
          emoji: "🛒",
          status: "open",
          visStatus: "open",
        };

    // Update the list
    const updatedItems = [...shoppingList.items!, newGrocery];

    // Check and remove "done" items if needed
    const doneItems = shoppingList.items!.filter(
      (item) => item.status === "done"
    );
    let updatedList = { ...shoppingList, items: updatedItems };

    if (doneItems.length >= 20) {
      updatedList = {
        ...updatedList,
        items: updatedList.items.filter(
          (item) => item.status !== "done" || item.id !== doneItems[0].id
        ),
      };
    }

    // Update the state only once for both the list and shopping lists
    const updatedLists = shoppingLists.map((list) =>
      list.id === shoppingList.id ? updatedList : list
    );

    setShoppingLists(updatedLists); // Updating the shoppingLists once will trigger only one re-render
    await saveShoppingLists(updatedLists);

    setShoppingList(updatedList); // This ensures that the state of this specific list is updated correctly
    setNewItemName(""); // Reset the input field
  };

  const clearDoneItems = async () => {
    Alert.alert(
      "Leeren bestätigen",
      "Bist du sicher, dann du alles aus deinen bereits gekauften löschen willst?",
      [
        {
          text: "Abbrechen",
          style: "cancel",
        },
        {
          text: "Löschen",
          style: "destructive",
          onPress: async () => {
            let updatedList: ShoppingListItem = {
              ...shoppingList,
              items:
                shoppingList.items?.filter((item) => item.status !== "done") ||
                [],
            };

            setShoppingList(updatedList);

            try {
              const existingLists = await getShoppingLists();
              let updatedLists = existingLists.map((list) =>
                list.id === shoppingList.id ? updatedList : list
              );
              await saveShoppingLists(updatedLists);
              setShoppingLists(updatedLists); // Assuming setShoppingLists updates the state
            } catch (error) {
              console.error("Error clearing done items:", error);
            }
          },
        },
      ]
    );
  };

  const toggleItemStatus = async (itemId: string) => {
    let existingLists = await getShoppingLists();
    const itemIndex = shoppingList.items!.findIndex(
      (item) => item.id === itemId
    );
    if (itemIndex === -1) return;

    const item = shoppingList.items![itemIndex];

    if (item.status === "open") {
      setDoneItem(item);

      setTimeout(async () => {
        let updatedList: ShoppingListItem = {
          ...shoppingList,
          items: shoppingList.items!.map((item) =>
            item.id === itemId ? { ...item, status: "done" } : item
          ),
        };

        setShoppingList(updatedList);

        try {
          let updatedLists = existingLists.map((l) =>
            l.id === shoppingList.id ? updatedList : l
          );
          await saveShoppingLists(updatedLists);
          setShoppingLists(updatedLists); // Assuming setShoppingLists updates the state
        } catch (error) {
          console.error("Error finalizing shopping list update:", error);
        }
      }, 400);
    } else {
      setDoneItem(null);
      let updatedList: ShoppingListItem = {
        ...shoppingList,
        items: shoppingList.items!.map((item) =>
          item.id === itemId ? { ...item, status: "open" } : item
        ),
      };

      setShoppingList(updatedList);

      try {
        let updatedLists = existingLists.map((l) =>
          l.id === shoppingList.id ? updatedList : l
        );
        await saveShoppingLists(updatedLists);
        setShoppingLists(updatedLists); // Assuming setShoppingLists updates the state
      } catch (error) {
        console.error("Error reverting item status:", error);
      }
    }
  };
  const handleChangeText = (text: string) => {
    setNewItemName(text);

    // Combine all items from the three data sets
    const allItems = [...fruitsDE, ...groceriesDE, ...vegetablesDE];

    // Filter items based on the input
    const filteredSuggestions = allItems.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  return (
    <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
      <TextInput
        className=" bg-white shadow shadow-zinc-200 rounded-2xl p-4"
        placeholder={`Was brauchst du${
          shoppingList.items &&
          shoppingList.items.filter((item) => item.status === "open").length > 0
            ? " noch?"
            : "?"
        }`}
        value={newItemName}
        onChangeText={handleChangeText}
        onSubmitEditing={() => handleAddNewItem(newItemName)}
        blurOnSubmit={false}
      />
      {/* Suggestions dropdown */}
      {suggestions.length > 0 && newItemName.trim() !== "" && (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View className="absolute w-full bg-white shadow-lg shadow-zinc-400 overflow-scroll mt-2 rounded-2xl top-12 z-[100]">
            {suggestions.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={async () => {
                  // Directly handle adding the new item and set suggestions after that
                  await handleAddNewItem(item.name); // Handle the new item addition

                  setNewItemName(""); // Reset the input field after adding the item
                  setSuggestions([]); // Clear suggestions after the item is added
                }}
                className="p-4 px-5 border-b border-zinc-200"
              >
                <Text className="text-lg">
                  {item.emoji} {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableWithoutFeedback>
      )}
      <View className="pt-4 display flex flex-col gap-2">
        {shoppingList.items &&
        shoppingList.items.filter((item) => item.status === "open").length >
          0 ? (
          shoppingList.items
            .filter((item) => item.status === "open")
            .reverse()
            .map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => toggleItemStatus(item.id)}
                className="bg-white p-2 px-5 rounded-xl flex flex-row justify-between items-center w-full"
              >
                <Text
                  className={`text-lg ${
                    doneItem === item ? "line-through text-gray-400" : ""
                  }`}
                >
                  {item.emoji} {item.name}
                </Text>
                <View className="flex flex-row gap-2 items-center">
                  {doneItem === item && (
                    <ProgressCircle color="#60957A" duration={400} />
                  )}
                </View>
              </TouchableOpacity>
            ))
        ) : (
          <View>
            <Text className="px-1 text-lg">
              Deine Liste ist leer, scheint als hättest du alles was du
              brauchst. 🤩
            </Text>
          </View>
        )}
      </View>
      {shoppingList.items &&
        shoppingList.items.some((item) => item.status === "done") && (
          <View className="pt-4 display flex flex-col gap-2">
            <View className="flex flex-row justify-between p-2">
              <Text className="color-zinc-400">Schon gekauft:</Text>
              <TouchableOpacity onPress={clearDoneItems}>
                <Text className="color-[#f08181] underline">leeren</Text>
              </TouchableOpacity>
            </View>
            {shoppingList.items
              .filter((item) => item.status === "done")
              .reverse()
              .map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => toggleItemStatus(item.id)}
                  className="bg-white p-2 px-5 rounded-xl"
                >
                  <Text className="text-lg line-through text-gray-400">
                    {item.emoji} {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
        )}
    </ScrollView>
  );
};

export default ShoppingList;
