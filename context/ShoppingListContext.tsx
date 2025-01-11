import React, { createContext, useEffect, useState, useContext } from "react";
import { getShoppingLists } from "@/lib/AsyncStorage";
import useAppInitialization from "@/lib/useAppInitialization";

const ShoppingListContext = createContext<ShoppingListContextValue | null>(
  null
);

export const ShoppingListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { shoppingListEmitter } = useAppInitialization();
  const [shoppingLists, setShoppingLists] = useState<ShoppingList>([]);

  useEffect(() => {
    const fetchShoppingLists = async () => {
      const initialShoppingLists = await getShoppingLists(); // Ensure this returns ShoppingList[]
      setShoppingLists(initialShoppingLists);
    };

    const handleUpdate = (updatedLists: ShoppingList) => {
      setShoppingLists(updatedLists);
    };

    fetchShoppingLists();
    shoppingListEmitter.on("update", handleUpdate);

    return () => {
      shoppingListEmitter.off("update", handleUpdate);
    };
  }, []);

  return (
    <ShoppingListContext.Provider value={{ shoppingLists, setShoppingLists }}>
      {children}
    </ShoppingListContext.Provider>
  );
};

export const useShoppingList = (): ShoppingListContextValue => {
  const context = useContext(ShoppingListContext);
  if (!context) {
    throw new Error(
      "useShoppingList must be used within a ShoppingListProvider"
    );
  }
  return context;
};
