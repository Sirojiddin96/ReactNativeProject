import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import FormField from "../components/forms/FormField";
import Form from "../components/forms/Form";
import SubmitButton from "../components/forms/SubmitButton";
import routes from "../navigation/routes";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = ({ navigation }) => {
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
      <Screen style={styles.container}>
        <Form
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="Email"
            placeholder="Email Please"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password Please"
            securityTextEntry
            textContentType="password"
          />
          <SubmitButton
            title="Login"
            onPress={() => navigation.navigate(routes.WELCOME)}
          />
        </Form>
        {/* <View>
          <Text>Have not created an account yet</Text>
          <Button
            title="Register"
            onPress={() => navigation.navigate(routes.WELCOME)}
          />
        </View> */}
      </Screen>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  tagline: {
    fontSize: 18,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
export default LoginScreen;
