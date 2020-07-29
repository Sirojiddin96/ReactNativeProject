import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ListItemSeperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: "#f8f4f4",
  },
});
