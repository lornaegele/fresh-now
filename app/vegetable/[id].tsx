import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";

const VegetableDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Vegetable {id}</Text>
    </View>
  );
};

export default VegetableDetails;
