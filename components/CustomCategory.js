import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconPicker from "../components/IconPicker";

function CustomCategory(props) {
  const [textInput, setTextInput] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);

  const onChangeText = (newText) => {
    setTextInput(newText);
  };

  const handleIconPress = (icon) => {
    setSelectedIcon(icon.icon);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={textInput}
          placeholder="Add text here!"
        />
        <Text>
          <IconPicker onIconPress={handleIconPress} />
          <Text style={styles.iconContainer}>
            {selectedIcon && (
              <MaterialCommunityIcons
                name={selectedIcon}
                size={40}
                color="grey"
                icon={name}
              />
            )}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
  },

  textInputContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default CustomCategory;
