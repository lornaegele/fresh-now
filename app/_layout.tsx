import React, { useEffect, useState } from "react";
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer"; // Drawer navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Bottom tab navigation
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import WelcomeModal from "@/components/WelcomeModal";
import Seasonal from "@/app/(tabs)/Seasonal";
import useFontLoading from "@/lib/useFontLoading";
import useAppInitialization from "@/lib/useAppInitialization";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import ShoppingList from "./(tabs)/ShoppingList";
import { Text } from "react-native";
import "./global.css";

// Create the drawer navigator
const Drawer = createDrawerNavigator();
// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

type RootLayoutNavigationProp = DrawerNavigationProp<RootDrawerParamList>;

const RootLayout = () => {
  const fontsLoaded = useFontLoading();
  const { isModalVisible, shoppingLists, setIsModalVisible, setShoppingLists } =
    useAppInitialization();
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // If fonts are not loaded, render nothing
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
            name="Create a list to start"
            component={Seasonal}
          ></Drawer.Screen>
        )}
      </Drawer.Navigator>

      {/* Welcome Modal */}
      <WelcomeModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
};

// ShoppingList screen with bottom tabs
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
        headerShown: false, // Hide the tab header itself
      })}
    >
      {/* Shopping List Tab */}
      <Tab.Screen
        name="Shopping List"
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

      {/* Seasonal Tab */}
      <Tab.Screen
        name="Seasonal"
        component={Seasonal}
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

// Drawer Hamburger Icon (remains the same)
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
