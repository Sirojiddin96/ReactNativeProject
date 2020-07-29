import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";

import Screen from "../components/screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteItemAction from "../components/ListItemDeleteItemAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/image.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/image.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const hanleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteItemAction onPress={() => hanleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../../assets/image.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
