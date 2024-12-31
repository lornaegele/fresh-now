import { fruitsDE } from "@/lib/fruits";
import { getTimeSpan } from "@/lib/getTimeSpan";
import { vegetablesDE } from "@/lib/vegetables";
import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type VegetableDetailsRouteProp = RouteProp<
  RootStackParamList,
  "VegetableDetails"
>;

const VegetableDetails = ({ route }: { route: VegetableDetailsRouteProp }) => {
  const { id } = route.params;
  const [item, setItem] = useState<Fruit | Vegetable | undefined>(undefined);

  const allItems = [...fruitsDE, ...vegetablesDE];

  const initItem = (id: string) => {
    const foundItem = allItems.find((item) => item.id === id);
    setItem(foundItem);
  };

  useEffect(() => {
    initItem(id);
  }, []);

  return (
    <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
      {item !== undefined ? (
        <View className="pb-4">
          <View
            className="w-full h-[250px] flex items-center justify-center rounded-2xl"
            style={{ backgroundColor: item.backgroundColor }}
          >
            <Text className="text-[200px]">{item.emoji}</Text>
          </View>
          {/* Details Section */}
          <View className="pt-4 flex flex-col gap-4">
            {/* Name */}
            <View className="pl-2">
              <Text className="text-3xl font-bold text-gray-800 ">
                {item.name}
              </Text>
              <Text className="text-xl font-bold text-gray-800 ">
                {getTimeSpan(item.season, "DE")}
              </Text>
              <Text>{item.info}</Text>
            </View>

            {/* Vitamine */}
            <View className="bg-white rounded-xl p-2 px-4">
              <Text className="text-lg font-semibold text-gray-700 ">
                Vitamine
              </Text>
              <Text className="text-gray-600">{item.vitamins.join(", ")}</Text>
            </View>

            {/* Gesundheitswert */}
            <View className="bg-white rounded-xl p-2 px-4">
              <Text className="text-lg font-semibold text-gray-700">
                Gesundheitswert
              </Text>
              <Text className="text-gray-600">{item.healthScore} / 100</Text>
            </View>

            {/* Vorteile */}
            <View className="bg-white rounded-xl p-2 px-4">
              <Text className="text-lg font-semibold text-gray-700">
                Vorteile
              </Text>
              {item.benefits.map((benefit, index) => (
                <Text key={index} className="text-gray-600">
                  - {benefit}
                </Text>
              ))}
            </View>

            {/* Risiken */}
            <View className="bg-white rounded-xl p-2 px-4">
              <Text className="text-lg font-semibold text-gray-700">
                Risiken
              </Text>
              {item.risks.map((risk, index) => (
                <Text key={index} className="text-gray-600">
                  - {risk}
                </Text>
              ))}
            </View>

            {/* Regionale Verfügbarkeit */}
            <View className="bg-white rounded-xl p-2 px-4">
              <Text className="text-lg font-semibold text-gray-700">
                Regionale Verfügbarkeit
              </Text>
              <Text className="text-gray-600">
                {item.regionAvailability.join(", ")}
              </Text>
            </View>

            {/* Lagerungstipps */}
            <View className="bg-white rounded-xl p-2 px-4">
              <Text className="text-lg font-semibold text-gray-700">
                Lagerungstipps
              </Text>
              <Text className="text-gray-600">{item.storageTips}</Text>
            </View>

            {/* Nährstoffe */}
            <View className="bg-white rounded-xl p-2 px-4">
              <Text className="text-lg font-semibold text-gray-700">
                Nährstoffe pro 100g
              </Text>
              <View className="mt-2 space-y-1">
                {Object.entries(item.nutrients).map(([key, value]) => (
                  <Text key={key} className="text-gray-600">
                    {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}g`}
                  </Text>
                ))}
              </View>
            </View>

            {/* Rezepte */}
            <View className="bg-white rounded-xl p-2 px-4">
              <Text className="text-lg font-semibold text-gray-700">
                Rezepte
              </Text>
              {item.recipes.map((recipe, index) => (
                <Text key={index} className="text-gray-600">
                  - {recipe}
                </Text>
              ))}
            </View>
          </View>
        </View>
      ) : (
        <View className="flex justify-center items-center p-2 flex-col">
          <Text className="text-9xl pt-6">😔</Text>
          <Text className="text-xl font-rubik  px-6 text-center">
            Ups, ein Fehler ist aufgetreten. Leider konnte der Artikel nicht
            gefunden werden!
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default VegetableDetails;
