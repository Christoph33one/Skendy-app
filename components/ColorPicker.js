import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

function ColorPicker({ onColorSelected }) {
  const commonColors = [
    "#A569BD",
    "#F39C12",
    "#1ABC9C",
    "#D35400",
    "#C0392B",
    "#5499C7",
    "#E74C3C",
    "#3498DB",
    "#E74C3C",
    "#48C9B0",
    "#E74C3C",
    "#85C1E9",
    "#D35400",
    "#F1948A",
    "#16A085",
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
      {commonColors.map((color, index) => (
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
