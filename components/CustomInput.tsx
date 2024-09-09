import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { Fontisto, Feather, AntDesign } from "@expo/vector-icons";

// interface
interface CustomInputProps {
  title: string;
  icon: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  title,
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  const [showPass, setShowPass] = useState(false);

  const privateHandler = () => {
    setShowPass(!showPass);
  };

  return (
    <View style={styles.mainContainer}>
      {/* title */}
      <Text style={styles.title}>{title}</Text>

      {/* input field */}
      <View style={styles.inputContainer}>
        {icon === "phone" ? (
          // <Fontisto name={icon} size={24} color="#808080" style={styles.icon} />

          <AntDesign
            name="phone"
            size={24}
            color="#808080"
            style={styles.icon}
          />
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
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPass}
        />

        {/* lock icon */}
        {icon === "lock" && showPass == false ? (
          <TouchableOpacity onPress={privateHandler}>
            <AntDesign name="eyeo" size={24} color="black" />
          </TouchableOpacity>
        ) : icon === "lock" && showPass == true ? (
          <TouchableOpacity onPress={privateHandler}>
            <Feather name="eye-off" size={24} color="black" />
          </TouchableOpacity>
        ) : null}
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
