import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconPicker(props) {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [catergoryName, setCategoryName] = useState("");
  const [categories, setCategoris] = useState([]);


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
    selectedIcon(icon);
  }


  return (
    <View style={styles.container}>
      <Text>Custom Category</Text>
      <View 
      {iconList.map((item, index) => (
        <TouchableOpacity 
        key={index}
        title={item.title}
        onPress={() => handleIconSelected(item.icon)}
        />
      ))}
      />
      <MaterialCommunityIcons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "30%",
  },
});

export default IconPicker;
