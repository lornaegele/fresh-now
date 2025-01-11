import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Seasonal from "@/app/(tabs)/Seasonal"; // Adjust the path if needed
import VegetableDetails from "../vegetable/[id]";

const Stack = createNativeStackNavigator<RootStackParamList>();

const SeasonalStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Seasonal"
        component={Seasonal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VegetableDetails"
        component={VegetableDetails}
        options={{
          title: "Details",
          headerBackground: () => null,
          headerTintColor: "#0F5933",
        }}
      />
    </Stack.Navigator>
  );
};

export default SeasonalStack;
