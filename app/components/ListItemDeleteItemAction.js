import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../screens/config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ListItemDeleteItemAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={35}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
