import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import VegetableCard from "@/components/VegetableCard";
import { filterVariants } from "@/lib/data";
import { vegetables } from "@/lib/vegetables";
import { fruits } from "@/lib/fruits";
import { useRouter } from "expo-router";

const Seasonal = () => {
  const [selectedFilter, setSelectedFilter] =
    useState<FilterVariants>("Vegetables");

  const router = useRouter();

  const handleCategory = (filter: FilterVariants) => {
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
        data={selectedFilter == "Vegetables" ? vegetables : fruits}
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
            <Text className="text-xl font-rubik  ">
              Sorry, we don't have any tips yet!
            </Text>
          </View>
        }
        ListHeaderComponent={
          <View className="px-4 flex flex-col gap-2">
            <View className="flex justify-center items-center p-2 ">
              <Text className="text-xl font-rubik-medium">
                Whats in <Text className="text-primary-300">Season</Text> right
                now?
              </Text>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              className="pt-3 pb-4"
            >
              {filterVariants.map((filter, i) => (
                <TouchableOpacity
                  onPress={() => handleCategory(filter as FilterVariants)}
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
