import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconPicker(props) {
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
    setCategoryName;
  };

  const handleAddCategory = () => {
    if (categoryName.trim() !== "" && selectedIcon) {
      setCategories((prevCategories) => [
        ...prevCategories,
        { name: categoryName, icon: selectedIcon },
      ]);
      setCategoryName("");
      selectedIcon(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Custom Category</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name={selectedIcon} size={40} color="#45C786" />
        <TextInput
          style={styles.TextInput}
          placeholder="Add Category Name"
          value={setCategoryName}
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
            />
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Create Category" onPress={handleAddCategory} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "30%",
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
});

export default IconPicker;
