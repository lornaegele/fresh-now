import React, { useEffect, useState } from "react";
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Import Tab Navigator
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import WelcomeModal from "@/components/WelcomeModal";
import useFontLoading from "@/lib/useFontLoading";
import useAppInitialization from "@/lib/useAppInitialization";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import ShoppingList from "./(tabs)/ShoppingList";
import { Text } from "react-native";
import "./global.css";
import SeasonalStack from "./stacks/SeasonalStack";

const Drawer = createDrawerNavigator(); // Drawer navigator
const Tab = createBottomTabNavigator(); // Define the Tab navigator

type RootLayoutNavigationProp = DrawerNavigationProp<RootDrawerParamList>;

const RootLayout = () => {
  const fontsLoaded = useFontLoading();
  const { isModalVisible, shoppingLists, setIsModalVisible, setShoppingLists } =
    useAppInitialization();
  const [activeTab, setActiveTab] = useState<string | null>(null);

  if (!fontsLoaded) return null;

  return (
    <>
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
        {shoppingLists && shoppingLists.length > 0 ? (
          shoppingLists.map((list, index) => (
            <Drawer.Screen
              key={index}
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
          <Drawer.Screen
            name="Seasonal"
            component={SeasonalStack} // Use SeasonalStack here
          />
        )}
      </Drawer.Navigator>

      <WelcomeModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
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
        component={SeasonalStack} // Use SeasonalStack here too if needed
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
  const navigation = useNavigation<RootLayoutNavigationProp>();

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

export default RootLayout;
