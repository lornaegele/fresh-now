import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import VegetableCard from "@/components/VegetableCard";
import Tips from "@/components/Tips";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { filterVariantsDE } from "@/data/data";
import { vegetablesDE } from "@/data/vegetables";
import { fruitsDE } from "@/data/fruits";
import { healthTips } from "@/data/healthTips";
import { shoppingTips } from "@/data/shoppingTips";

type SeasonalNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Seasonal"
>;

const Seasonal = () => {
  const [selectedFilter, setSelectedFilter] =
    useState<FilterVariantsDE>("Gemüse");
  const [viewAll, setViewAll] = useState(false);

  const navigation = useNavigation<SeasonalNavigationProp>();

  const getCurrentMonth = (): Month => {
    const months: Month[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[new Date().getMonth()];
  };

  // Memoized data preparation to avoid redundant calculations
  const displayedData = useMemo(() => {
    const currentMonth = getCurrentMonth();

    if (viewAll) {
      return selectedFilter === "Gemüse"
        ? vegetablesDE
        : selectedFilter === "Obst"
        ? fruitsDE
        : selectedFilter === "Gesundheits-Tipps"
        ? healthTips
        : shoppingTips;
    }

    return selectedFilter === "Gemüse"
      ? vegetablesDE.filter((vegetable) =>
          vegetable.season.includes(currentMonth)
        )
      : selectedFilter === "Obst"
      ? fruitsDE.filter((fruit) => fruit.season.includes(currentMonth))
      : selectedFilter === "Gesundheits-Tipps"
      ? healthTips
      : shoppingTips;
  }, [selectedFilter, viewAll]);

  const sortedData = useMemo(() => {
    return [...displayedData].sort((a, b) =>
      selectedFilter === "Gemüse" || selectedFilter === "Obst"
        ? a.name.localeCompare(b.name)
        : a.id.localeCompare(b.id)
    );
  }, [displayedData, selectedFilter]);

  const handleCategory = (filter: FilterVariantsDE) => {
    setSelectedFilter(filter);
  };

  const navigateToDetails = (id: string) => {
    navigation.navigate("VegetableDetails", { id });
  };

  return (
    <View className="h-full pt-14">
      <FlatList
        data={sortedData}
        renderItem={({ item }) =>
          selectedFilter === "Gemüse" || selectedFilter === "Obst" ? (
            <VegetableCard
              item={item as Fruit | Vegetable}
              onPress={() => navigateToDetails(item.id)}
            />
          ) : (
            <Tips item={item as HealthTip} />
          )
        }
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-4"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="flex justify-center items-center p-2 flex-col">
            <Text className="text-9xl pt-6">😔</Text>
            <Text className="text-xl font-rubik px-6 text-center">
              Leider haben wir gerade keine Tipps für dich!
            </Text>
          </View>
        }
        ListHeaderComponent={
          <View className="px-4 flex flex-col gap-2">
            <View className="flex justify-center items-center p-2">
              <Text className="text-xl font-rubik-medium">
                Was ist gerade in{" "}
                <Text className="text-primary-300 font-rubik-bold">Saison</Text>
                ?
              </Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="pt-3 pb-4"
            >
              {filterVariantsDE.map((filter, i) => (
                <TouchableOpacity
                  onPress={() => handleCategory(filter as FilterVariantsDE)}
                  className={`flex shadow shadow-slate-200 flex-col items-start mr-2 px-4 py-2 rounded-full ${
                    selectedFilter === filter ? "bg-primary-200" : "bg-white"
                  }`}
                  key={i}
                >
                  <Text
                    className={`font-rubik-medium text-lg ${
                      selectedFilter === filter ? "text-white" : ""
                    }`}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            {(selectedFilter === "Gemüse" || selectedFilter === "Obst") && (
              <View className="flex-row justify-end items-center mb-4">
                <TouchableOpacity
                  onPress={() => setViewAll(!viewAll)}
                  className="px-2"
                >
                  <Text className="font-rubik-medium underline text-primary-200">
                    {viewAll ? "Nur Saisonal" : "Alle ansehen"}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        }
      />
    </View>
  );
};

export default Seasonal;
