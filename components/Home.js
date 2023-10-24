import React from "react";
import { Button, View, Text } from "react-native";
import { StyleSheet } from "react-native";

function Home({ navigation }) {
  const handlePress = () => {};

  return (
    <View style={styles.container}>
      <Text>Customise a category</Text>
      <Button title="Click here!" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
