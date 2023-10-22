import React, { useState } from "react";

import { StyleSheet, TextInput, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function CustomCategory(props) {
  const [textInput, setTextInput] = useState();

  const onChangeText = (newText) => {
    setTextInput(newText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.container}>
        <MaterialCommunityIcons name="text-box-search" size={40} color="pink" />
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={textInput}
        placeholder="Add text here!"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
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
