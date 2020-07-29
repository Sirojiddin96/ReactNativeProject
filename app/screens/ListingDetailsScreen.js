import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "./config/colors";

import ListItem from "../components/ListItem";
export default function ListingDetailsScreen() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/jacket2.jpg")}
      />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../assets/image.jpg")}
            title="Karimov Sirojiddin"
            subTitle=" 5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});