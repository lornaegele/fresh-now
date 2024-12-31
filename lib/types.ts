type Status = "done" | "open";

type Language = "DE" | "EN";

type FilterVariantsEN =
  | "Vegetables"
  | "Fruits"
  | "Shopping tips"
  | "Health tips";
type FilterVariantsDE =
  | "Gemüse"
  | "Obst"
  | "Tips beim Einkaufen"
  | "Gesundheits Tips";
type DropdownFilterVariantsDE = "Aktuell in Saison" | "Alle";
type DropdownFilterVariantsEN = "Currently in season" | "All";

// Types to define the structure
interface ShoppingListItem {
  id: string;
  name: string;
  icon: string;
  color: string;
  items?: (GroceryItem | VegetableItem | FruitItem)[]; // Allow a mix of Groceries, Vegetables, or Fruits
}

interface Grocery {
  id: string;
  name: string;
  emoji: string;
}

interface Produce {
  id: string;
  name: string;
  emoji: string;
  backgroundColor: string;
  image?: string;
  info?: string;
  season: Month[];
  vitamins: string[];
  nutrients: { [key: string]: number };
  healthScore: number;
  benefits: string[];
  risks: string[];
  regionAvailability: string[];
  storageTips: string;
  recipes: string[];
}

interface Vegetable extends Produce {
  // Specific properties for vegetables (if any)
}

interface Fruit extends Produce {
  // Specific properties for fruits (if any)
}

interface VegetableItem extends Vegetable {
  status: Status;
  visStatus: Status;
}
interface FruitItem extends Fruit {
  status: Status;
  visStatus: Status;
}
interface GroceryItem extends Grocery {
  status: Status;
  visStatus: Status;
}

type Month =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

// ShoppingList is an array of ShoppingListItem
type ShoppingList = ShoppingListItem[];

// Define the type for the route params
type RootDrawerParamList = {
  [key: string]: { shoppingList: ShoppingListItem }; // Use `shoppingList` for each screen
};

type RootStackParamList = {
  Seasonal: undefined; // No params for Seasonal
  ShoppingList: { list: ShoppingListItem }; // Specify the required list prop
  VegetableDetails: { id: string }; // Params for VegetableDetails
};
