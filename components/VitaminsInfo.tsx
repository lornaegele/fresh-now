import { View, Text } from "react-native";
import React from "react";

const VitaminsInfo = ({ item }: { item: VitaminInfo }) => {
  return (
    <View className="w-full bg-white rounded-2xl p-3 px-4 my-1.5 shadow-lg shadow-zinc-200">
      <View>
        <Text className="text-gray-800 font-rubik-bold text-xl">
          {item.name}
        </Text>
        <Text className="">{item.content}</Text>
      </View>
    </View>
  );
};

export default VitaminsInfo;
