import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Image1 from "../../assets/images/image1.png";
import Image3 from "../../assets/images/image3.png";
import Logo from "../../assets/images/logo.png";
import CustomButton from "@/components/CustomButton";

const LetsStart = () => {
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

      {/* custom button */}
      <CustomButton />
    </View>
  );
};

export default LetsStart;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    justifyContent: "space-between",
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 250,
  },
  image1: {},
  image3: {
    height: 220,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 340,
    height: 260,
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    lineHeight: 36,
    textAlign: "center",
    color: "#808080",
    fontFamily: "Poppins-SemiBold",
  },
});
