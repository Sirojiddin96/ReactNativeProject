import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Text>Welcome here</Text>
        <Button
          title="Go to Tutorials"
          onPress={() => navigation.navigate("Tutorials")}
        />
      </View>
      <View style={styles.container}>
        <Text>Welcome here</Text>
        <Button
          title="Go to Tutorials"
          onPress={() => navigation.navigate("Tutorials")}
        />
      </View>
      <View style={styles.container}>
        <Text>Welcome here</Text>
        <Button
          title="Go to Tutorials"
          onPress={() => navigation.navigate("Tutorials")}
        />
      </View>
      <View style={styles.container}>
        <Text>Welcome here</Text>
        <Button
          title="Go to Tutorials"
          onPress={() => navigation.navigate("Tutorials")}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default WelcomeScreen;
