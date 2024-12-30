import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  getActiveItem,
  saveActiveItem,
  saveShoppingLists,
} from "@/lib/AsyncStorage";

interface DrawerContentProps {
  shoppingLists: ShoppingListItem[];
  setShoppingLists: React.Dispatch<React.SetStateAction<ShoppingListItem[]>>;
  navigation: any;
}

const CustomDrawerContent: React.FC<DrawerContentProps> = ({
  shoppingLists,
  setShoppingLists,
  navigation,
}) => {
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newListName, setNewListName] = useState("");
  const inputRef = useRef<TextInput>(null); // Step 1: Create a ref
  const rotationValue = useRef(new Animated.Value(0)).current;

  const fetchActiveItem = async () => {
    const storedActiveItem = await getActiveItem();
    if (storedActiveItem) {
      setActiveItemId(storedActiveItem);
    }
  };

  useEffect(() => {
    fetchActiveItem();
  }, []);

  const toggleAddMode = () => {
    setIsAdding(!isAdding);
    rotateIcon();
    if (!isAdding) {
      // Focus input when entering add mode
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  const rotateIcon = () =>
    Animated.timing(rotationValue, {
      toValue: isAdding ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

  const rotationInterpolation = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });

  const handleDelete = (id: string) => {
    Alert.alert(
      "Löschen bestädigen",
      "Bist du sicher, dass du diese Liste mit ihrem Inhalt löschen willst?",
      [
        {
          text: "Abbrechen",
          style: "cancel",
        },
        {
          text: "Löschen",
          style: "destructive",
          onPress: () => {
            const updatedLists = shoppingLists.filter((list) => list.id !== id);
            setShoppingLists(updatedLists);
            saveShoppingLists(updatedLists);
          },
        },
      ]
    );
  };

  const handleAddNewList = async () => {
    if (newListName.trim() === "") return;

    const isDuplicate = shoppingLists.some(
      (list) => list.name.toLowerCase() === newListName.toLowerCase()
    );

    if (isDuplicate) {
      Alert.alert(
        "Doppelter Listenname",
        "Der Name dieser Liste existiert bereits.",
        [
          {
            text: "OK",
            onPress: () => inputRef.current?.focus(), // Refocus input on "OK"
          },
        ]
      );
      return;
    }

    const id = Date.now().toString();

    const newList: ShoppingListItem = {
      id: id,
      name: newListName,
      icon: "list",
      color: "#CEF1DF",
      items: [],
    };

    const updatedLists = [...shoppingLists, newList];
    setShoppingLists?.(updatedLists);
    setNewListName("");
    setIsAdding(false);
    rotateIcon();
    await saveShoppingLists(updatedLists);
  };

  return (
    <SafeAreaView className="flex-1 bg-white mt-12">
      <View className="px-4 py-3 flex-row items-center justify-between">
        <Text className="text-lg font-bold">Einkaufslisten 🛒</Text>
        <TouchableOpacity
          onPress={toggleAddMode}
          className="bg-primary-200 p-1 rounded-xl"
        >
          <Animated.View
            style={{ transform: [{ rotate: rotationInterpolation }] }}
          >
            <Ionicons name="add" size={28} color="#CEF1DF" />
          </Animated.View>
        </TouchableOpacity>
      </View>

      {isAdding && (
        <View className="px-2 py-2">
          <TextInput
            ref={inputRef} // Step 2: Attach the ref
            className="border border-primary-300 rounded-2xl p-4 text-base"
            placeholder="Neuen Listennamen eingeben"
            value={newListName}
            onChangeText={setNewListName}
            onSubmitEditing={handleAddNewList}
          />
        </View>
      )}

      <View className="flex-col gap-2">
        {shoppingLists.map((item, index) => (
          <TouchableOpacity
            key={index}
            className={`flex-row items-center justify-between px-4 py-4 rounded-2xl mx-2 ${
              activeItemId === item.id ? "bg-primary-200" : "bg-zinc-100"
            }`}
            onPress={() => {
              navigation.navigate(item.name, { shoppingList: item });
              saveActiveItem(item.id);
              fetchActiveItem();
            }}
          >
            <Text
              className={`font-bold text-lg ${
                activeItemId === item.id ? "text-[#e6f2e4]" : "text-[#064223]"
              }`}
            >
              {item.name}
            </Text>
            <View className="flex-row items-center space-x-2">
              <Text
                onPress={(e) => {
                  e.stopPropagation();
                  handleDelete(item.id);
                }}
                className="text-xl"
              >
                ⛔
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;
