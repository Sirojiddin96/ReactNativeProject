import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItem";
import Icon from "../components/Icon";

const menuItems = [
  {
    title: "My Courses",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "#fc5c65",
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: "#4ecdc4",
    },
    targetScreen: "Courses",
  },
];
function ProfileScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Karimov Sirojiddin"
          subTitle="herodot.sk@mail.ru"
          image={require("../assets/image.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          // ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f8f4f4",
    marginVertical: 35,
  },
  container: {
    marginVertical: 20,
  },
});
export default ProfileScreen;
