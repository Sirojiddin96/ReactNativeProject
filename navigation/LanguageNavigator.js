import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TutorialsScreen from '../screens/TutorialsScreen';
import WelcomeScreen from '../screens/WelcomeScreen'
import RegisterScreen from '../screens/RegisterScreen'

const Stack=createStackNavigator()

const LanguageNavigator=()=>{
  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name="Tutorials" component={TutorialsScreen}/>
          <Stack.Screen name="Profile" component={ProfileScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
       </Stack.Navigator>
     </NavigationContainer>
     
  );
}

export default LanguageNavigator;