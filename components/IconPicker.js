import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconPicker(props) {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const iconData = [
    {
      name: "Home",
      backgroundColor: "yellow",
      icon: "floor-lamp",
    },
    {
      name: "Studies",
      backgroundColor: "red",
      icon: "book",
    },
    {
      name: "Office",
      backgroundColor: "blue",
      icon: "folder",
    },
    {
      name: "Music",
      backgroundColor: "green",
      icon: "headphones",
    },
    {
      name: "Work",
      backgroundColor: "black",
      icon: "desk",
    },
    {
      name: "taxes",
      backgroundColor: "dodgerblue",
      icon: "import",
    },
  ];

  const handleIconPress = (icon) => {
    setSelectedIcon(icon);
    console.log("icon pressed");
  };

  return (
    <View style={styles.container}>
      {iconData.map((icon) => (
        <TouchableOpacity
          key={icon.name}
          onPress={() => handleIconPress(icon)}
          style={[
            styles.icon,
            {
              backgroundColor: icon.backgroundColor,
              borderColor: selectedIcon === icon ? "black" : "transparent",
            },
          ]}
        >
          <MaterialCommunityIcons name={icon.icon} size={30} color="white" />
          <Text>{icon.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  icon: {
    padding: 5,
    borderRadius: "50%",
    margin: 5,
    borderWidth: 2,
  },
});

export default IconPicker;
