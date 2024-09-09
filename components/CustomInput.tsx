import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { Fontisto, Feather, AntDesign } from "@expo/vector-icons";

// interface
interface CustomInputProps {
  title: string;
  icon: string;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  title,
  icon,
  placeholder,
}) => {
  return (
    <View style={styles.mainContainer}>
      {/* title */}
      <Text style={styles.title}>{title}</Text>

      {/* input field */}
      <View style={styles.inputContainer}>
        {icon === "email" ? (
          <Fontisto name={icon} size={24} color="#808080" style={styles.icon} />
        ) : icon === "lock" ? (
          <Feather name={icon} size={24} color="#808080" style={styles.icon} />
        ) : (
          <Feather name="user" size={24} color="#808080" style={styles.icon} />
        )}

        {/* text input */}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#808080"
        />

        {/* lock icon */}
        {icon === "lock" && (
          <TouchableOpacity>
            <AntDesign name="eyeo" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 10,
  },
  title: {
    marginBottom: 5,
    fontFamily: "Poppins-Medium",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 8,
    height: 53,
    paddingHorizontal: 10,
  },
  icon: {
    width: 35,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#000",
  },
});

export default CustomInput;
