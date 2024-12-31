import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { getTimeSpan } from "@/lib/getTimeSpan";

interface Props {
  item: Vegetable | Fruit;
  onPress?: () => void;
}

const VegetableCard = ({ item, onPress }: Props) => {
  const addToList = async () => {};
  return (
    <TouchableOpacity
      className="p-4 w-[47%] h-[180px] flex justify-between flex-col shadow shadow-zinc-200 rounded-2xl bg-primary-300 mb-4"
      onPress={onPress}
    >
      <View className="flex-1 justify-center items-center ">
        <Text className="text-7xl  text-center">{item.emoji}</Text>
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
        className="bg-white absolute right-2 top-2 px-2 py-1.5 rounded-xl shadow shadow-zinc-500"
      >
        <Text className="text-lg">🛒</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default VegetableCard;
