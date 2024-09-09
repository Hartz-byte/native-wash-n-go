import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { router } from "expo-router";

import CustomButton from "@/components/CustomButton";
import Image1 from "../../assets/images/image1.png";
import Image3 from "../../assets/images/image3.png";
import Logo from "../../assets/images/logo.png";

const LetsStart = () => {
  const pressHandler = () => {
    router.push("/(auth)/SignUp");
  };

  const signInHandler = () => {
    router.push("/(auth)/SignIn");
  };

  return (
    <View style={styles.mainContainer}>
      {/* top images */}
      <View style={styles.imagesContainer}>
        <Image source={Image1} style={styles.image1} />

        <Image source={Image3} style={styles.image3} />
      </View>

      {/* logo */}
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      {/* text */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Sparkle & Shine Transform{"\n"}Your Drive with Every Wash!
        </Text>
      </View>

      {/* custom button and sign-in button */}
      <View>
        {/* custom button */}
        <CustomButton text="Let's Start" press={pressHandler} />

        {/* sign-in button */}
        <View style={styles.logoContainer}>
          <TouchableWithoutFeedback onPress={signInHandler}>
            <Text style={styles.signinText}>
              Already have an account?{" "}
              <Text style={styles.signinLink}>Sign in</Text>
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    justifyContent: "space-between",
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 230,
  },
  image1: {},
  image3: {
    height: 220,
  },
  logoContainer: {
    alignItems: "center",
    height: 260,
  },
  logo: {
    width: 340,
    height: 260,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 160,
  },
  text: {
    fontSize: 24,
    lineHeight: 36,
    textAlign: "center",
    color: "#808080",
    fontFamily: "Poppins-SemiBold",
  },
  signinText: {
    fontFamily: "Poppins-Medium",
    color: "#808080",
    marginTop: 20,
  },
  signinLink: {
    color: "#000000",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default LetsStart;
