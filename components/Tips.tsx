import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Tips = ({ item }: { item: HealthTip }) => {
  return (
    <View className="w-full bg-white rounded-2xl p-3 my-1.5 flex flex-row justify-center items-start shadow-lg shadow-zinc-200">
      <Text className="w-[25%] text-6xl leading-normal">{item.emoji}</Text>
      <View className="w-[70%]">
        <Text className="text-gray-800 font-rubik-bold text-xl">
          {item.name}
        </Text>
        <Text className="">{item.content}</Text>
      </View>
      {/* <TouchableOpacity className="absolute -right-1.5 -top-1.5 bg-primary-200 rounded-full shadow p-1 shadow-zinc-300">
        <Text>
          <Ionicons name="close" size={24} color={"white"}></Ionicons>
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Tips;
