import React from "react";
import { ShoppingListProvider } from "@/context/ShoppingListContext";
import Home from "./Home";

// _layout.tsx acts as the root layout for your app
const RootLayout = () => {
  return (
    <ShoppingListProvider>
      <Home />
    </ShoppingListProvider>
  );
};

export default RootLayout;
