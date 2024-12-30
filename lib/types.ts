type Status = "done" | "open";

type Language = "DE" | "EN";

type FilterVariantsEN = "Vegetables" | "Fruits" | "Health tips";
type FilterVariantsDE = "Gemüse" | "Obst" | "Gesundheits Tips";

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

interface Vegetable {
  id: string;
  name: string;
  emoji: string; // Optional icon specific to the vegetable
  backgroundColor: string;
  image?: string; // URL of an image representing the vegetable
  season: Month[]; // Array of seasons when it's available (e.g., ["spring", "summer"])
  vitamins?: string[]; // Array of vitamins it contains (e.g., ["Vitamin A", "Vitamin C"])
  nutrients?: { [key: string]: number }; // Nutrients with their amounts (e.g., { fiber: 2.5, protein: 1.3 })
  healthScore?: number;
  benefits?: string[]; // List of health benefits (e.g., ["Boosts immunity", "Aids digestion"])
  risks?: string[]; // List of potential risks (e.g., ["May cause allergies"])
  regionAvailability?: string[]; // Regions where the vegetable is commonly grown
  storageTips?: string; // Tips for storing the vegetable (e.g., "Store in a cool, dry place")
  recipes?: string[]; // List of popular recipes (e.g., ["Stir-fry", "Soup"])
}

interface Fruit {
  id: string;
  name: string;
  emoji: string; // Optional icon specific to the fruit
  backgroundColor: string;
  image?: string; // URL of an image representing the fruit
  season: Month[]; // Array of seasons when it's available (e.g., ["summer", "fall"])
  vitamins?: string[]; // Array of vitamins it contains (e.g., ["Vitamin C", "Vitamin K"])
  nutrients?: { [key: string]: number }; // Nutrients with their amounts (e.g., { sugar: 14, fiber: 3.1 })
  healthScore?: number;
  benefits?: string[]; // List of health benefits (e.g., ["Good for heart health"])
  risks?: string[]; // List of potential risks (e.g., ["May cause bloating"])
  regionAvailability?: string[]; // Regions where the fruit is commonly grown
  storageTips?: string; // Tips for storing the fruit (e.g., "Refrigerate after ripening")
  recipes?: string[]; // List of popular recipes (e.g., ["Smoothies", "Pies"])
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
