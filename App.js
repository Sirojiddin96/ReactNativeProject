import React, { useState } from "react";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/screen";
import { TextInput, Text, Switch } from "react-native";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}
