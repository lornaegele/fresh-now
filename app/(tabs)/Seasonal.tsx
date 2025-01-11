import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import VegetableCard from "@/components/VegetableCard";
import { filterVariantsDE } from "@/data/data";
import { vegetablesDE } from "@/data/vegetables";
import { fruitsDE } from "@/data/fruits";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useShoppingList } from "@/context/ShoppingListContext";

type SeasonalNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Seasonal"
>;

const Seasonal = () => {
  const { shoppingLists } = useShoppingList();
  const [selectedFilter, setSelectedFilter] =
    useState<FilterVariantsDE>("Gemüse");
  const [displayedData, setDisplayedData] = useState<
    Fruit[] | Vegetable[] | []
  >(vegetablesDE);
  const [viewAll, setViewAll] = useState(false); // State for "See All" / "See Seasonal"

  const navigation = useNavigation<SeasonalNavigationProp>();

  const handleCategory = (filter: FilterVariantsDE) => {
    setSelectedFilter(filter);
  };

  const navigateToDetails = (id: string) => {
    navigation.navigate("VegetableDetails", { id });
  };

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

  // Updated handleData function to support "See All"
  const handleData = () => {
    if (viewAll) {
      const allData = selectedFilter === "Gemüse" ? vegetablesDE : fruitsDE;
      setDisplayedData(allData);
    } else {
      const currentMonth = getCurrentMonth();
      const filteredData =
        selectedFilter === "Gemüse"
          ? vegetablesDE.filter((vegetable) =>
              vegetable.season.includes(currentMonth)
            )
          : selectedFilter === "Obst"
          ? fruitsDE.filter((fruit) => fruit.season.includes(currentMonth))
          : [];
      setDisplayedData(filteredData);
    }
  };

  // Call handleData inside useEffect to handle filter or view mode changes
  useEffect(() => {
    handleData();
  }, [selectedFilter, viewAll]);

  return (
    <View className="h-full pt-14">
      <FlatList
        data={displayedData}
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
            {/* Toggle Buttons */}
            <View className="flex-row justify-end items-center mb-4">
              <TouchableOpacity
                onPress={() => setViewAll(!viewAll)}
                className="px-2"
              >
                <Text className="font-rubik-medium underline color-primary-200">
                  {viewAll ? "Nur Saisonal" : "Alle ansehen"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      ></FlatList>
    </View>
  );
};

export default Seasonal;
