import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ListingDetails"
      options={{ headerShown: false }}
      component={ListingDetailsScreen}
    />
    <Stack.Screen
      name="Welcome"
      options={{ headerShown: false }}
      component={WelcomeScreen}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
export default FeedNavigator;
