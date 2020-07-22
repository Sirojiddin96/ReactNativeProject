import React from "react";

import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import Text from "./Text";
import colors from "./config/colors";

function Card({ title, language, minutes, image }) {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={image} />
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>Topic: {title}</Text>
            <Text style={styles.language}>Language: {language}</Text>
            <Text style={styles.minutes}>{minutes} Mins</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "salmon",
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
    flexDirection: "row",
  },
  details: {
    width: "50%",
  },
  imageContainer: {
    width: "50%",
  },
  image: {
    width: "80%",
    height: 120,
    borderRadius: 15,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
