import React from "react";
import { ShoppingListProvider } from "@/context/ShoppingListContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Home from "./Home";

// _layout.tsx acts as the root layout for your app
const RootLayout = () => {
  return (
    <ShoppingListProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Home />
      </GestureHandlerRootView>
    </ShoppingListProvider>
  );
};

export default RootLayout;
