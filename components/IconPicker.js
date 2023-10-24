import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconPicker(props) {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);

  const iconList = [
    { icon: "book" },
    { icon: "folder-home-outline" },
    { icon: "hospital" },
    { icon: "school" },
    { icon: "van-utility" },
    { icon: "home-circle" },
    { icon: "piggy-bank-outline" },
    { icon: "file" },
    { icon: "file-cabinet" },
    { icon: "file-download-outline" },
    { icon: "book" },
    { icon: "folder-home-outline" },
    { icon: "hospital" },
    { icon: "school" },
    { icon: "van-utility" },
    { icon: "home-circle" },
    { icon: "piggy-bank-outline" },
    { icon: "file" },
    { icon: "file-cabinet" },
    { icon: "file-download-outline" },
    { icon: "book" },
    { icon: "folder-home-outline" },
    { icon: "hospital" },
    { icon: "school" },
    { icon: "van-utility" },
    { icon: "home-circle" },
    { icon: "piggy-bank-outline" },
    { icon: "file" },
    { icon: "file-cabinet" },
    { icon: "file-download-outline" },
    { icon: "book" },
    { icon: "folder-home-outline" },
    { icon: "hospital" },
    { icon: "school" },
    { icon: "van-utility" },
    { icon: "home-circle" },
    { icon: "piggy-bank-outline" },
    { icon: "file" },
    { icon: "file-cabinet" },
    { icon: "file-download-outline" },
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
    <ScrollView>
      <View style={styles.homeButton}></View>
      <View style={styles.container}>
        <Text>Add new category</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name={selectedIcon}
            size={40}
            color="#45C786"
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Add Category Name"
            value={categoryName}
            onChangeText={handleCategoryNameChange}
          />
        </View>
        <Button title="Create Category" onPress={handleSubmit} />
        <View style={styles.iconContainer}>
          {iconList.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.icon}
              onPress={() => handleIconSelected(item.icon)}
            >
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
      </View>
    </ScrollView>
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
    width: 300,
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
    alignItems: "center",
  },
  homeButton: {
    paddingTop: 40,
  },
});

export default IconPicker;
