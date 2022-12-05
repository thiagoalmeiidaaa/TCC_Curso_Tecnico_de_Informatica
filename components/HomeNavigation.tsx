import Wallet from "../screens/Wallet";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import Profile from "./profile";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type StackList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  Wallet: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<StackList>();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
        }}  
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
