import { fruitsDE } from "@/data/fruits";
import { getTimeSpan } from "@/lib/getTimeSpan";
import { vegetablesDE } from "@/data/vegetables";
import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import images from "@/data/images";

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
            className="w-full h-[250px] flex items-center justify-center rounded-2xl p-3"
            style={{ backgroundColor: item.backgroundColor }}
          >
            {item.image ? (
              <Image
                source={item.image}
                resizeMode="contain" // Ensures the image fits within the container
                style={{ flex: 1, width: "100%", height: "100%" }} // Fill the parent while maintaining aspect ratio
              />
            ) : (
              <Text className="text-[200px]">{item.emoji}</Text>
            )}
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
              <View className="flex flex-row justify-between items-start pb-1">
                <Text className="text-lg font-semibold text-gray-700">
                  Vitamine pro 100g
                </Text>
                <View className="flex flex-row gap-2 pt-1">
                  <Text className="font-medium  text-gray-700">Menge</Text>
                  <Text className="w-12 text-right font-medium  text-gray-600">
                    NRV*
                  </Text>
                </View>
              </View>
              {item.vitamins.map((vitamin, i) => (
                <View key={i} className="flex flex-row justify-between">
                  <Text>{vitamin.name}</Text>
                  <View className="flex flex-row gap-2">
                    <Text>{vitamin.amount}</Text>
                    <Text className="w-12 text-right">
                      {vitamin.percentage}
                    </Text>
                  </View>
                </View>
              ))}
            </View>

            {/* Nährstoffe */}
            <View className="bg-white rounded-xl p-2 px-4">
              <View className="flex flex-row justify-between items-start pb-1">
                <Text className="text-lg font-semibold text-gray-700">
                  Nährstoffe pro 100g
                </Text>
                <Text className="text-right font-medium  text-gray-600 pt-1">
                  Menge
                </Text>
              </View>
              <View className="space-y-1">
                {Object.entries(item.nutrients).map(([key, value]) => (
                  <View key={key} className="flex flex-row justify-between">
                    <Text>
                      {`${key.charAt(0).toUpperCase() + key.slice(1)}`}
                    </Text>
                    <Text> {value}g</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Vorteile */}
            <View className="bg-white rounded-xl p-2 px-4">
              <Text className="text-lg font-semibold text-gray-700">
                Vorteile
              </Text>
              {item.benefits.map((benefit, i) => (
                <Text key={i} className="text-gray-600">
                  - {benefit}
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
            <View>
              <Text className="text-gray-500 px-2 text-sm">
                *NRV: Nährstoffbezugswerte (nutritient reference values) sind
                rechtlich festgelegte Referenzmengen für die Tageszufuhr von
                Vitaminen und Mineralstoffen.
              </Text>
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
