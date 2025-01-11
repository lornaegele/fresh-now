import React, { useState } from "react";
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import WelcomeModal from "@/components/WelcomeModal";
import useFontLoading from "@/lib/useFontLoading";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import ShoppingList from "./(tabs)/ShoppingList";
import { Text } from "react-native";
import "./global.css";
import SeasonalStack from "./stack/SeasonalStack";
import {
  ShoppingListProvider,
  useShoppingList,
} from "@/context/ShoppingListContext";

const Drawer = createDrawerNavigator(); // Drawer navigator
const Tab = createBottomTabNavigator(); // Define the Tab navigator

type HomeNavigationProp = DrawerNavigationProp<RootDrawerParamList>;

const Home = () => {
  const fontsLoaded = useFontLoading();
  const { shoppingLists, setShoppingLists } = useShoppingList(); // Use the shopping list context here
  const [activeTab, setActiveTab] = useState<string | null>(null);

  if (!fontsLoaded) return null;

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: activeTab !== "Seasonal",
        headerBackground: () => null,
        headerTintColor: "#0F5933",
        headerLeft: () => <DrawerHamburgerIcon />,
        drawerType: "back",
      }}
      drawerContent={(props) => (
        <CustomDrawerContent
          {...props}
          shoppingLists={shoppingLists}
          setShoppingLists={setShoppingLists}
        />
      )}
    >
      {shoppingLists.length > 0 ? (
        shoppingLists.map((list) => (
          <Drawer.Screen
            key={list.id}
            name={list.name}
            options={{
              title: list.name,
              drawerLabelStyle: {
                fontSize: 16,
                fontWeight: "bold",
              },
              drawerActiveTintColor: "#CEF1DF",
              drawerInactiveTintColor: "#0F5933",
              drawerActiveBackgroundColor: "#60957A",
            }}
            initialParams={{ shoppingList: list }}
          >
            {(props) => (
              <ShoppingListWithTabs
                {...props}
                list={list}
                setActiveTab={setActiveTab}
              />
            )}
          </Drawer.Screen>
        ))
      ) : (
        <Drawer.Screen name="Seasonal" component={SeasonalStack} />
      )}
    </Drawer.Navigator>
  );
};

const ShoppingListWithTabs = ({
  list,
  setActiveTab,
}: {
  list: any;
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Einkaufsliste"
        options={{
          tabBarActiveTintColor: "",
          tabBarInactiveTintColor: "#60957A",
          tabBarIcon: () => <Text className="text-2xl">🛒</Text>,
        }}
        listeners={{
          focus: () => setActiveTab("ShoppingList"),
        }}
      >
        {(props) => <ShoppingList list={list} />}
      </Tab.Screen>

      <Tab.Screen
        name="Saisonal"
        component={SeasonalStack}
        options={{
          tabBarActiveTintColor: "#0F5933",
          tabBarInactiveTintColor: "grey",
          tabBarIcon: () => <Text className="text-2xl">🥬</Text>,
        }}
        listeners={{
          focus: () => setActiveTab("Seasonal"),
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerHamburgerIcon = () => {
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <Ionicons
      name="menu"
      size={30}
      color="#0F5933"
      style={{
        marginLeft: 10,
        borderRadius: 15,
        backgroundColor: "transparent",
      }}
      onPress={() => {
        navigation.toggleDrawer();
      }}
    />
  );
};

export default Home;
