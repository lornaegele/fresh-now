import AsyncStorage from "@react-native-async-storage/async-storage";

// Key used for the first-time user flag
const FIRST_TIME_KEY = "firstTime";
const ACTIVE_ITEM_KEY = "activeItem";

// Get shopping lists from AsyncStorage
export const getShoppingLists = async (): Promise<ShoppingListItem[]> => {
  try {
    const shoppingLists = await AsyncStorage.getItem("shoppingLists");
    return shoppingLists ? JSON.parse(shoppingLists) : [];
  } catch (error) {
    console.error("Error fetching shopping lists:", error);
    return [];
  }
};

// Save shopping lists to AsyncStorage
export const saveShoppingLists = async (lists: ShoppingListItem[]) => {
  try {
    await AsyncStorage.setItem("shoppingLists", JSON.stringify(lists));
  } catch (error) {
    console.error("Error saving shopping lists:", error);
  }
};

// Remove a shopping list from AsyncStorage
export const removeShoppingList = async (listId: string) => {
  try {
    // Fetch the current shopping lists from AsyncStorage
    const shoppingLists = await getShoppingLists();

    // Filter out the shopping list by its Id
    const updatedLists = shoppingLists.filter((list) => list.id !== listId);

    // Save the updated lists back to AsyncStorage
    await saveShoppingLists(updatedLists);
  } catch (error) {
    console.error("Error removing shopping list:", error);
  }
};

// Check if it's the first time the user has opened the app
export const isFirstTime = async (): Promise<boolean> => {
  try {
    const value = await AsyncStorage.getItem(FIRST_TIME_KEY);
    return value === null; // If the value is null, it's the first time
  } catch (error) {
    console.error("Error checking first time user:", error);
    return true; // Assume it's the first time if error occurs
  }
};

// Set the first time flag to false once the user has opened the app
export const setFirstTimeFlag = async () => {
  try {
    await AsyncStorage.setItem(FIRST_TIME_KEY, "false");
  } catch (error) {
    console.error("Error setting first time flag:", error);
  }
};

// Remove the first-time flag from AsyncStorage
export const removeFirstTimeFlag = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(FIRST_TIME_KEY); // Corrected to use FIRST_TIME_KEY
  } catch (error) {
    console.error("Error removing first-time flag:", error);
  }
};

export const saveActiveItem = async (itemId: string | null) => {
  try {
    if (itemId) {
      await AsyncStorage.setItem(ACTIVE_ITEM_KEY, itemId);
    } else {
      await AsyncStorage.removeItem(ACTIVE_ITEM_KEY); // Remove if no active item
    }
  } catch (error) {
    console.error("Error saving active item:", error);
  }
};

export const getActiveItem = async (): Promise<string | null> => {
  try {
    const activeItem = await AsyncStorage.getItem(ACTIVE_ITEM_KEY);
    return activeItem;
  } catch (error) {
    return null;
  }
};
