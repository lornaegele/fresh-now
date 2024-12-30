import { RouteProp } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

type VegetableDetailsRouteProp = RouteProp<
  RootStackParamList,
  "VegetableDetails"
>;

const VegetableDetails = ({ route }: { route: VegetableDetailsRouteProp }) => {
  const { id } = route.params;

  return (
    <View>
      <Text>Details for Vegetable ID: {id}</Text>
    </View>
  );
};

export default VegetableDetails;
