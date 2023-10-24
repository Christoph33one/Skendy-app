import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconPicker({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Home");
  };

  const [selectedIcon, setSelectedIcon] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);

  const iconList = [
    { icon: "book", title: "Tax" },
    { icon: "folder-home-outline", title: "Job" },
    { icon: "hospital", title: "Healthcare" },
    { icon: "school", title: "School" },
    { icon: "van-utility", title: "Utilities" },
    { icon: "home-circle", title: "Housing" },
    { icon: "piggy-bank-outline", title: "Investments" },
    { icon: "file", title: "Business" },
    { icon: "file-cabinet", title: "Lawsuit" },
    { icon: "file-download-outline", title: "Miscellaneous" },
  ];

  const handleIconSelected = (icon) => {
    setSelectedIcon(icon);
  };

  const handleCategoryNameChange = (text) => {
    setCategoryName(text);
  };

  const handleAddCategory = () => {
    if (categoryName !== "" && selectedIcon) {
      setCategories((prevCategories) => [
        ...prevCategories,
        { name: categoryName, icon: selectedIcon },
      ]);
      setCategoryName("");
      setSelectedIcon(null);
    }
  };

  const handleSubmit = () => {
    handleAddCategory();
  };

  return (
    <View style={styles.container}>
      <Text>CUSTOM CATEGORY</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name={selectedIcon} size={40} color="#45C786" />
        <TextInput
          style={styles.TextInput}
          placeholder="Add Category Name"
          value={categoryName}
          onChangeText={handleCategoryNameChange}
        />
      </View>

      <View style={styles.iconContainer}>
        {iconList.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.icon}
            onPress={() => handleIconSelected(item.icon)}
          >
            <Text>{item.title}</Text>
            <MaterialCommunityIcons
              name={item.icon}
              size={50}
              padding={15}
              color="#45C786"
              paddingTop={50}
            />
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Create Category" onPress={handleSubmit} />
      <View style={styles.homeButton}>
        <Button
          title="Click here to return Home!"
          onPress={handlePress}
          color="#F55B6E"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "20%",
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  TextInput: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  },
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 10,
  },
  icon: {
    padding: 10,
    alignItems: "center",
  },
  homeButton: {
    paddingTop: 40,
  },
});

export default IconPicker;
