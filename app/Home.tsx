import React, { useState, useEffect } from "react";
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import useFontLoading from "@/lib/useFontLoading";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import ShoppingList from "./(tabs)/ShoppingList";
import { Modal, Platform, Text, TouchableOpacity, View } from "react-native";
import Settings from "@/components/Settings";
import "./global.css";
import SeasonalStack from "./stack/SeasonalStack";
import { useShoppingList } from "@/context/ShoppingListContext";
import NoLists from "./(tabs)/NoLists";

const Drawer = createDrawerNavigator(); // Drawer navigator
const Tab = createBottomTabNavigator(); // Define the Tab navigator

type HomeNavigationProp = DrawerNavigationProp<RootDrawerParamList>;

const Home = () => {
  const fontsLoaded = useFontLoading();
  const { shoppingLists, setShoppingLists } = useShoppingList(); // Use the shopping list context here
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [settingsVisible, setSettingsVisible] = useState(false);

  const closeSettings = () => setSettingsVisible(false);

  if (!fontsLoaded) return null;

  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerShown: activeTab !== "Saisonal",
          headerBackground: () => null,
          headerTintColor: "#0F5933",
          headerLeft: () => <DrawerHamburgerIcon />,
          // headerRight: () => (
          //   <TouchableOpacity onPress={openSettings} className="mr-3">
          //     <Ionicons name="settings-outline" size={24} color="#0F5933" />
          //   </TouchableOpacity>
          // ),
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
          <Drawer.Screen
            key={1415926535}
            name="Welcome"
            options={{
              title: "👋 Willkommen",
              drawerLabelStyle: {
                fontSize: 16,
                fontWeight: "bold",
              },
              drawerActiveTintColor: "#CEF1DF",
              drawerInactiveTintColor: "#0F5933",
              drawerActiveBackgroundColor: "#60957A",
            }}
          >
            {(props) => (
              <ShoppingListWithTabs
                {...props}
                list={null}
                setActiveTab={setActiveTab}
              />
            )}
          </Drawer.Screen>
        )}
      </Drawer.Navigator>
      <Modal
        animationType={Platform.OS === "ios" ? "slide" : "fade"}
        transparent={true}
        visible={settingsVisible}
        onRequestClose={closeSettings}
      >
        <View className="flex-1 justify-start items-start relative bg-white bg-opacity-50 mt-16 shadow-lg rounded-3xl p-4">
          <TouchableOpacity
            onPress={closeSettings}
            className="absolute left-4 top-4"
          >
            <Text className="text-primary-200 text-center text-lg">
              Schließen
            </Text>
          </TouchableOpacity>
          <Settings />
        </View>
      </Modal>
      {/* <WelcomeModal visible={modalVisible} onClose={handleCloseModal} /> */}
    </>
  );
};

const ShoppingListWithTabs = ({
  list,
  setActiveTab,
}: {
  list: ShoppingListItem | null;
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
        {(props) =>
          // Conditionally render ShoppingList or NoLists based on whether the list is empty
          list === null ? <NoLists /> : <ShoppingList list={list} />
        }
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
