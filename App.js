import { StyleSheet, Text, View } from "react-native";
import IconPicker from "./components/IconPicker";
import Home from "./components/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ViewCategories from "./components/ViewCategories";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="IconPicker" component={IconPicker} />
        <Stack.Screen name="ViewCategories" component={ViewCategories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
