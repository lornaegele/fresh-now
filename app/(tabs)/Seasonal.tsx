import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import VegetableCard from "@/components/VegetableCard";
import { filterVariantsDE } from "@/lib/data";
import { vegetablesDE } from "@/lib/vegetables";
import { fruitsDE } from "@/lib/fruits";
import { useRouter } from "expo-router";

const Seasonal = () => {
  const [selectedFilter, setSelectedFilter] =
    useState<FilterVariantsDE>("Gemüse");

  const router = useRouter();

  const handleCategory = (filter: FilterVariantsDE) => {
    setSelectedFilter(filter);
  };

  const navigateToDetails = (id: string) => {
    // Navigate to the vegetable details screen with the dynamic id
    console.log(id);

    router.push(`/vegetable/${id}`);
  };
  return (
    <View className="h-full pt-14">
      <FlatList
        data={
          selectedFilter == "Gemüse"
            ? vegetablesDE
            : selectedFilter == "Obst"
            ? fruitsDE
            : []
        }
        renderItem={({ item }) => (
          <VegetableCard
            item={item}
            onPress={() => navigateToDetails(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-4"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="flex justify-center items-center p-2 flex-col">
            <Text className="text-9xl pt-6">😔</Text>
            <Text className="text-xl font-rubik  px-6 text-center">
              Leider haben wir gerade keine Tips für dich!
            </Text>
          </View>
        }
        ListHeaderComponent={
          <View className="px-4 flex flex-col gap-2">
            <View className="flex justify-center items-center p-2 ">
              <Text className="text-xl font-rubik-medium">
                Was ist gerade in{" "}
                <Text className="text-primary-300 font-rubik-bold">Saison</Text>
                ?
              </Text>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              className="pt-3 pb-4"
            >
              {filterVariantsDE.map((filter, i) => (
                <TouchableOpacity
                  onPress={() => handleCategory(filter as FilterVariantsDE)}
                  className={`flex shadow shadow-slate-200 flex-col items-start mr-2 px-4 py-2 rounded-full ${
                    selectedFilter == filter ? "bg-primary-200 " : "bg-white"
                  }`}
                  key={i}
                >
                  <Text
                    className={`font-rubik-medium text-lg ${
                      selectedFilter == filter ? "text-white" : ""
                    }`}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        }
      ></FlatList>
    </View>
  );
};

export default Seasonal;
