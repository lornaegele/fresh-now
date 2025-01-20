import React, { useEffect, useMemo, useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { filterVariantsDE, months } from "@/data/data";
import { vegetablesDE } from "@/data/vegetables";
import { fruitsDE } from "@/data/fruits";
import { healthTips } from "@/data/healthTips";
import { shoppingTips } from "@/data/shoppingTips";
import Tips from "@/components/Tips";
import VegetableCard from "@/components/VegetableCard";
import { vitamins } from "@/data/vitamins";
import VitaminsInfo from "@/components/VitaminsInfo";
import { minerals } from "@/data/minerals";
import { Ionicons } from "@expo/vector-icons";

type SeasonalNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Seasonal"
>;

const MemoizedVegetableCard = React.memo(VegetableCard);

const Seasonal = () => {
  const [selectedFilter, setSelectedFilter] =
    useState<FilterVariantsDE>("Gemüse");
  const [viewAll, setViewAll] = useState(false);
  const [searchText, setSearchText] = useState(""); // New state for the search text

  const navigation = useNavigation<SeasonalNavigationProp>();

  const currentMonth = useMemo(() => months[new Date().getMonth()], [months]);

  // Function to filter data based on the selected filter and search text
  const getFilteredData = useCallback(() => {
    let data = [];
    switch (selectedFilter) {
      case "Gemüse":
        data = viewAll
          ? vegetablesDE
          : vegetablesDE.filter((item) => item.season.includes(currentMonth));
        break;
      case "Obst":
        data = viewAll
          ? fruitsDE
          : fruitsDE.filter((item) => item.season.includes(currentMonth));
        break;
      case "Gesundheits-Tipps":
        data = healthTips;
        break;
      case "Einkaufs-Tipps":
        data = shoppingTips;
        break;
      case "Vitamin Übersicht":
        data = vitamins;
        break;
      default:
        data = minerals;
    }

    // Filter data based on the search text (case-insensitive)
    if (searchText) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    return data;
  }, [selectedFilter, viewAll, currentMonth, searchText]);

  const sortedData = useMemo(() => {
    const data = getFilteredData();
    return [...data].sort((a, b) =>
      (selectedFilter === "Gemüse" || selectedFilter === "Obst"
        ? a.name
        : a.id
      ).localeCompare(
        selectedFilter === "Gemüse" || selectedFilter === "Obst" ? b.name : b.id
      )
    );
  }, [getFilteredData, selectedFilter]);

  const handleCategory = useCallback((filter: FilterVariantsDE) => {
    setSelectedFilter(filter);
  }, []);

  const navigateToDetails = useCallback(
    (id: string) => {
      navigation.navigate("VegetableDetails", { id });
    },
    [navigation]
  );

  const onInput = (input: string) => {
    if (!viewAll) setViewAll(true);
    setSearchText(input);
  };

  const renderHeader = useMemo(() => {
    return (
      <View className="px-4 flex flex-col gap-2">
        <View className="flex justify-center items-center p-2">
          <Text className="text-xl font-rubik-medium">
            Was ist gerade in{" "}
            <Text className="text-primary-300 font-rubik-bold">Saison</Text>?
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

        {/* Search input field for "Gemüse" and "Obst" */}
        {(selectedFilter === "Gemüse" || selectedFilter === "Obst") && (
          <View className="mb-4">
            <TextInput
              className=" bg-white shadow shadow-zinc-200 rounded-2xl p-4 pl-10 relative"
              placeholder=" Search..."
              placeholderTextColor="#9e9d9d" // Set placeholder color here (can be any valid color string)
              value={searchText}
              onChangeText={onInput}
            />
            <Text className="absolute top-4 left-3 opacity-50">🔎</Text>
            {searchText !== "" && (
              <TouchableOpacity
                onPress={() => setSearchText("")}
                className="absolute top-1.5 right-2 p-2  rounded-xl"
              >
                <Ionicons name="close" size={20} color={"#666666"}></Ionicons>
              </TouchableOpacity>
            )}
          </View>
        )}

        {(selectedFilter === "Gemüse" || selectedFilter === "Obst") && (
          <View className="flex-row justify-end items-center mb-4">
            <TouchableOpacity onPress={() => setViewAll((prev) => !prev)}>
              <Text className="font-rubik-medium underline text-primary-200">
                {viewAll ? "Nur Saisonal" : "Alle ansehen"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }, [selectedFilter, viewAll, searchText, handleCategory]);

  return (
    <View className="h-full">
      <FlatList
        data={sortedData}
        renderItem={({ item }) =>
          selectedFilter === "Vitamin Übersicht" ||
          selectedFilter === "Mineralstoffe Übersicht" ? (
            <VitaminsInfo item={item as VitaminInfo} />
          ) : selectedFilter === "Gemüse" || selectedFilter === "Obst" ? (
            <MemoizedVegetableCard
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
        ListHeaderComponent={renderHeader}
        ListFooterComponent={
          <View className="px-4 py-4">
            <Text className="text-sm text-gray-500 text-center">
              {selectedFilter === "Einkaufs-Tipps" && (
                <Text>
                  *Es besteht keine Kooperation, das ist lediglich eine
                  Empfehlung von uns persönlich. {"\n"}
                </Text>
              )}
              Hinweis: Diese Informationen dienen nur zu allgemeinen
              Bildungszwecken und ersetzen keine professionelle Beratung.
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default Seasonal;
