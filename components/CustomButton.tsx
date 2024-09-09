import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

// interface
interface CustomButtonProps {
  text: string;
  press: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, press }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={press}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    width: "90%",
    height: 61,
    backgroundColor: "#94C7FF",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "#092A4D",
    fontWeight: "bold",
  },
});

export default CustomButton;
