import { View, Text } from "react-native";
import React from "react";

const NoLists = () => {
  return (
    <View className="p-2">
      <View className="h-[90%] flex justify-center items-center ">
        <View className="px-8 flex justify-center items-center">
          <Text className="text-9xl text-center leading-normal">😔</Text>
          <Text className="px-1 text-xl font-rubik-semibold text-center">
            Keine Einkaufsliste vorhanden.
          </Text>
          <View className="gap-2 pt-4 px-3">
            <View className="flex flex-row justify-start items-start gap-2">
              <Text className="pt-2">🛒</Text>
              <Text className=" text-zinc-600 text-lg">
                Um eine neue Liste hinzuzufügen, klicken oben links auf das
                Menu!
              </Text>
            </View>
            <View className="flex flex-row justify-center items-start gap-2">
              <Text className="pt-2">📅</Text>
              <Text className="text-zinc-600 text-lg ">
                Du kannst unten zu
                <Text className="color-primary-300 font-rubik-bold">
                  {" "}
                  Saisonal 🥬{" "}
                </Text>
                wechseln, um zu sehen, was gerade in Saison ist!
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NoLists;
