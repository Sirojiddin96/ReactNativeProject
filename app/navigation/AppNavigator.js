import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import NavigationTheme from "./NavigationTheme";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewLIstingButton from "./NewLIstingButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Feed"
          component={FeedNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={ListingEditScreen}
          options={({ navigation }) => ({
            tabBarButton: () => (
              <NewLIstingButton onPress={() => navigation.navigate("Post")} />
            ),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={size}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Account"
          component={AccountNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
