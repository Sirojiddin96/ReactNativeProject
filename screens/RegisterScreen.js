import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import * as Yup from "yup";

import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const Register = ({ navigation }) => {
  const handleSubmit = () => {};
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
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {/* <ErrorMessage error={error} visible={error} /> */}
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name Please"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="name"
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
            title="Register"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
        </Form>
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
  logo: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 18,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
export default Register;
