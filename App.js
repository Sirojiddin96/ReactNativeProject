import React from "react";
import LanguageNavigator from "./navigation/LanguageNavigator";
import LoginScreen from "./screens/LoginScreen";
import Register from "./screens/RegisterScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import Courses from "./screens/Courses";
import AccountNavigator from "./navigation/AccountNavigator";
import ProfileScreen from "./screens/ProfileScreen";

const App = () => {
  return <AccountNavigator />;
};

export default App;
