import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity>
        <Text>Let's Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
  },
});
