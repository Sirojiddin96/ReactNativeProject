import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import TutorialsScreen from "../screens/TutorialsScreen";

import RegisterScreen from "../screens/RegisterScreen";

import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import Courses from "../screens/Courses";

const Stack = createStackNavigator();

export default function AccountNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Courses"
          component={Courses}
          // options={{
          //   headerShown: false,
          // }}
        />

        <Stack.Screen name="Tutorials" component={TutorialsScreen} />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
