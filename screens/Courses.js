import React from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../components/config/colors";
import Text from "../components/Text";

const courses = [
  {
    id: 1,
    title: "Introduction",
    minutes: 10,
    language: "English",
    image: require("../assets/image.jpg"),
  },
  {
    id: 2,
    title: "Basics",
    minutes: 9,
    language: "English",
    image: require("../assets/image.jpg"),
  },
  {
    id: 3,
    title: "Verbs",
    minutes: 8,
    language: "English",
    image: require("../assets/image.jpg"),
  },
  {
    id: 3,
    title: "Adjectives",
    minutes: 15,
    language: "English",
    image: require("../assets/image.jpg"),
  },
  {
    id: 5,
    title: "Adverbs",
    minutes: 14,
    language: "English",
    image: require("../assets/image.jpg"),
  },
  {
    id: 6,
    title: "Tenses",
    minutes: 20,
    language: "English",
    image: require("../assets/image.jpg"),
  },
];
function Courses({ navigation }) {
  return (
    <>
      <View style={styles.screen}>
        <View style={styles.mainScreen}>
          <FlatList
            data={courses}
            keyExtractor={(course) => course.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                minutes={item.minutes}
                language={item.language}
                image={item.image}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  mainScreen: {
    marginVertical: 35,
    height: "100%",
  },
  content: {},
});
export default Courses;
