import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

function ColorPicker({ onColorSelected }) {
  const colors = [
    "#000000",
    "#808080",
    "#FF5733",
    "#FDFD96",
    "#80FF72",
    "#5DADE2",
    "#D2B4DE",
    "#FFC3A0",
    "#BDC3C7",
    "#FFD700",
    "#77B5FE",
    "#FF69B4",
    "#48C9B0",
    "#85C1E9",
    "#D4E157",
    "#FF5733",
    "#FDFD96",
    "#80FF72",
    "#5DADE2",
    "#D2B4DE",
    "#FFC3A0",
    "#BDC3C7",
    "#FFD700",
    "#77B5FE",
    "#FF69B4",
    "#48C9B0",
    "#85C1E9",
    "#D4E157",
    "#FF5733",
    "#FDFD96",
    "#80FF72",
    "#5DADE2",
  ];

  const handleColorSelected = (color) => {
    onColorSelected(color);
  };

  return (
    <ScrollView horizontal style={styles.container}>
      {colors.map((color, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleColorSelected(color)}
          style={[styles.colorCircle, { backgroundColor: color }]}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 25,
    margin: 5,
  },
});

export default ColorPicker;
