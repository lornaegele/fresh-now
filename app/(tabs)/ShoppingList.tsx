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
    // Fetch the current shopping lists from AsyncStorage
    let shoppingLists = await getShoppingLists();
    if (!newName.trim()) return;

    // Combine all items from the three imported JSON files
    const allItems = [...fruitsDE, ...groceriesDE, ...vegetablesDE];

    // Check if the new item already exists in any of the files and has a status of "open"
    const itemExists =
      shoppingList.items &&
      shoppingList.items.some(
        (item) =>
          item.name.toLowerCase() === newName.trim().toLowerCase() &&
          item.status === "open"
      );

    if (itemExists) {
      Alert.alert("Doppelt", `${newName} ist schon in deiner Liste.`);
      return;
    }

    // Find the matching item in allItems to get the emoji
    const existingItem = allItems.find(
      (item) => item.name.toLowerCase() === newName.trim().toLowerCase()
    );

    // Create the new item
    const newGrocery: GroceryItem = existingItem
      ? {
          ...existingItem,
          id: `${Date.now()}`,
          status: "open",
          visStatus: "open",
          emoji: existingItem.emoji || "🛒", // Fallback to default emoji
        }
      : {
          id: `${Date.now()}`,
          name: newName,
          emoji: "🛒",
          status: "open",
          visStatus: "open",
        };

    // Check and remove the last "done" item if there are already 20 "done" items
    const doneItems = shoppingList.items?.filter(
      (item) => item.status === "done"
    );
    let updatedItems = shoppingList.items || [];
    if (doneItems && doneItems.length >= 20) {
      updatedItems = updatedItems.filter(
        (item, index) =>
          index !== updatedItems.findIndex((i) => i.status === "done")
      );
    }

    // Update the shopping list
    let updatedList: ShoppingListItem = {
      ...shoppingList,
      items: [...updatedItems, newGrocery],
    };

    setShoppingList(updatedList);
    // Save the updated shopping lists back to AsyncStorage
    await saveShoppingLists(shoppingLists);

    // Update the state of shopping lists, if necessary
    setShoppingLists(shoppingLists); // Assuming setShoppingLists updates the state
    setNewItemName("");

    try {
      let updatedLists = shoppingLists.map((list) =>
        list.id === shoppingList.id ? updatedList : list
      );
      await saveShoppingLists(updatedLists);
      setShoppingLists(updatedLists); // Assuming setShoppingLists updates the state
    } catch (error) {
      console.error("Error updating shopping list:", error);
    }
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
      }, 500);
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
          <View className="absolute w-full bg-white shadow-lg shadow-zinc-300 overflow-scroll mt-2 rounded-2xl top-12 z-[100]">
            {suggestions.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  setNewItemName(item.name); // Set the input to the selected item
                  handleAddNewItem(item.name);
                  setSuggestions([]); // Clear suggestions
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
                    <ProgressCircle color="#60957A" duration={500} />
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
