import { View, Text, TouchableOpacity, Linking, Alert } from "react-native";
import React from "react";

const Tips = ({ item }: { item: HealthTip }) => {
  const confirmAndOpenLink = () => {
    if (item.source) {
      Alert.alert(
        "App verlassen?",
        "Möchten Sie wirklich die App verlassen und den Link im Browser öffnen?",
        [
          { text: "Abbrechen", style: "cancel" },
          { text: "Ja", onPress: () => openLink() },
        ]
      );
    }
  };

  const openLink = () => {
    Linking.openURL(item.source!).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <View className="w-full bg-white rounded-2xl p-3 my-1.5 flex flex-row justify-center items-start shadow-lg shadow-zinc-200">
      <Text className="w-[25%] text-6xl leading-normal">{item.emoji}</Text>
      <View className="w-[70%]">
        <Text className="text-gray-800 font-rubik-bold text-xl">
          {item.name}
        </Text>
        <Text className="">{item.content}</Text>
        {item.source && (
          <TouchableOpacity onPress={confirmAndOpenLink} className="pt-2">
            <Text className="text-blue-500 underline opacity-80">
              Quelle: {item.sourceName && item.sourceName}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Tips;
