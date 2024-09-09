import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import Logo from "../../assets/images/logo.png";
import CustomButton from "@/components/CustomButton";

const Welcome = () => {
  const logoutHandler = () => {
    router.push("/(auth)/SignIn");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* logo */}
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      {/* welcome text */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome Ramesh</Text>
      </View>

      {/* custom button */}
      <CustomButton text="Logout" press={logoutHandler} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  logoContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
  logo: {
    width: 233,
    height: 180,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 60,
  },
  text: {
    fontWeight: "bold",
    fontSize: 32,
  },
});

export default Welcome;
