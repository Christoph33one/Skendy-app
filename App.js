import { StyleSheet, Text, View } from "react-native";
import IconPicker from "./components/IconPicker";
import Home from "./components/Home";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  return <IconPicker />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
