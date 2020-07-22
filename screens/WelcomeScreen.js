import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import routes from "../navigation/routes";
import Button from "../components/Button";
export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/images/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/imageLogo.jpg")}
        />
        <Text style={styles.tagline}>Start your Korean language Advanture</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    flex: 1,
    alignItems: "center",
  },
  tagline: {
    fontSize: 18,
    fontWeight: "600",
    paddingVertical: 20,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
});
