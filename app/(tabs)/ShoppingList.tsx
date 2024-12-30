import { Text, TextInput, View, Alert, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { Link } from "expo-router";
import { getShoppingLists, saveShoppingLists } from "@/lib/AsyncStorage";
import ProgressCircle from "@/components/ProgressCircle";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { fruitsDE } from "@/lib/fruits";
import { vegetablesDE } from "@/lib/vegetables";
import { groceriesDE } from "@/lib/groceries";

const ShoppingList = ({ list }: { list: ShoppingListItem }) => {
  const [newItemName, setNewItemName] = useState("");
  const [doneItem, setDoneItem] = useState<
    GroceryItem | VegetableItem | FruitItem | null
  >(null);
  const [shoppingList, setShoppingList] = useState<ShoppingListItem>(list);
  const inputRef = useRef<TextInput | null>(null); // Create a reference for the TextInput

  const handleAddNewItem = async () => {
    if (!newItemName.trim()) return;

    // Combine all items from the three imported JSON files
    const allItems = [...fruitsDE, ...groceriesDE, ...vegetablesDE];

    // Check if the new item already exists in any of the files
    const itemExists =
      shoppingList.items &&
      shoppingList.items.some(
        (item) => item.name.toLowerCase() === newItemName.trim().toLowerCase()
      );

    if (itemExists) {
      Alert.alert("Doppelt", `${newItemName} ist schon in deiner Liste.`);
      inputRef.current?.focus();
      return;
    }

    // Find the matching item in allItems to get the emoji
    const existingItem = allItems.find(
      (item) => item.name.toLowerCase() === newItemName.trim().toLowerCase()
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
          name: newItemName,
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
    const updatedList: ShoppingListItem = {
      ...shoppingList,
      items: [...updatedItems, newGrocery],
    };

    setShoppingList(updatedList);
    setNewItemName("");

    try {
      const existingLists = await getShoppingLists();
      const updatedLists = existingLists.map((list) =>
        list.id === shoppingList.id ? updatedList : list
      );
      await saveShoppingLists(updatedLists);
    } catch (error) {
      console.error("Error updating shopping list:", error);
    }
    inputRef.current?.focus();
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
            const updatedList: ShoppingListItem = {
              ...shoppingList,
              items:
                shoppingList.items?.filter((item) => item.status !== "done") ||
                [],
            };

            setShoppingList(updatedList);

            try {
              const existingLists = await getShoppingLists();
              const updatedLists = existingLists.map((list) =>
                list.id === shoppingList.id ? updatedList : list
              );
              await saveShoppingLists(updatedLists);
            } catch (error) {
              console.error("Error clearing done items:", error);
            }
          },
        },
      ]
    );
  };

  const toggleItemStatus = async (itemId: string) => {
    const itemIndex = shoppingList.items!.findIndex(
      (item) => item.id === itemId
    );
    if (itemIndex === -1) return;

    const item = shoppingList.items![itemIndex];

    if (item.status === "open") {
      setDoneItem(item);

      setTimeout(async () => {
        const updatedList: ShoppingListItem = {
          ...shoppingList,
          items: shoppingList.items!.map((item) =>
            item.id === itemId ? { ...item, status: "done" } : item
          ),
        };

        setShoppingList(updatedList);

        try {
          const existingLists = await getShoppingLists();
          const updatedLists = existingLists.map((l) =>
            l.id === shoppingList.id ? updatedList : l
          );
          await saveShoppingLists(updatedLists);
        } catch (error) {
          console.error("Error finalizing shopping list update:", error);
        }
      }, 500);
    } else {
      setDoneItem(null);
      const updatedList: ShoppingListItem = {
        ...shoppingList,
        items: shoppingList.items!.map((item) =>
          item.id === itemId ? { ...item, status: "open" } : item
        ),
      };

      setShoppingList(updatedList);

      try {
        const existingLists = await getShoppingLists();
        const updatedLists = existingLists.map((l) =>
          l.id === shoppingList.id ? updatedList : l
        );
        await saveShoppingLists(updatedLists);
      } catch (error) {
        console.error("Error reverting item status:", error);
      }
    }
  };

  return (
    <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
      <TextInput
        ref={inputRef}
        className=" bg-white shadow shadow-zinc-200 rounded-2xl p-4"
        placeholder="Was brauchst du?"
        value={newItemName}
        onChangeText={setNewItemName}
        onSubmitEditing={handleAddNewItem}
      />
      <Text className="pt-3 font-rubik-medium text-zinc-600 text-xl px-1">
        Du kannst zu
        <Text className="color-primary-300 font-rubik-bold"> Saisonal 🥬 </Text>
        wechseln um zu sehen, was gerade in Saison ist!
      </Text>
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
                  {(item as Fruit | Vegetable).nutrients && (
                    <Link href={`/vegetable/${item.id}`}>
                      <Ionicons
                        name="information-circle-outline"
                        className="text-xl"
                        size={22}
                      />
                    </Link>
                  )}
                </View>
              </TouchableOpacity>
            ))
        ) : (
          <Text className="px-1 texl-lg">
            Deine Liste ist leer, scheint als hättest du alles 🤩
          </Text>
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
