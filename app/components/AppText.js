import React from "react";
import { Text } from "react-native";

import styles from "./AppText/styles";
import defaultStyles from "../screens/config/styles";

function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;
