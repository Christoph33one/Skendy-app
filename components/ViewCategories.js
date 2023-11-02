import React from "react";
import { View, StyleSheet, Text } from "react-native";
import IconPicker from "./IconPicker";
import { FlatList } from "react-native-gesture-handler";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewCategories({ route, selectedColor }) {
  const { categories } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>View Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text>Name:{item.name}</Text>
            <MaterialCommunityIcons
              name={item.icon}
              size={40}
              color={item.color}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  categoryItem: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    backgroundColor: "#ccc",
  },
});

export default ViewCategories;
