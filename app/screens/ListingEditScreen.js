import React from "react";
import { StyleSheet } from "react-native";
import * as yup from "yup";

import Screen from "../components/screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label("Title"),
  price: yup.string().required().min(1).max(10000).label("Price"),
  description: yup.string().required().label("Description"),
  category: yup.string().required().nullable().label("Category"),
  images: yup.array().min(1, "Please select at least an image"),
});
const categories = [
  { label: "Furniture", value: 1, backgroundColor: "tomato", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Camera", value: 3, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "tomato", icon: "apps" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Camera", value: 3, backgroundColor: "tomato", icon: "apps" },
  { label: "Camera", value: 3, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
];
export default function ListingEditScreen() {
  const location = useLocation();
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PicketItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
