import { Image, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

import Logo from "../assets/images/logo.png";
import Image1 from "../assets/images/image1.png";
import Image2 from "../assets/images/image2.png";
import Image3 from "../assets/images/image3.png";

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(async () => {
      router.push("/(auth)/LetsStart");
    }, 2000);
  }, [router]);

  return (
    <View>
      {/* top images */}
      <View style={styles.flex}>
        <Image source={Image1} alt="image1" />

        <Image source={Image3} alt="image3" />
      </View>

      {/* logo */}
      <View style={styles.logoContainer}>
        <Image source={Logo} alt="logo" style={styles.logo} />
      </View>

      {/* bottom image */}
      <View style={styles.bottomContainer}>
        <Image source={Image2} alt="image2" style={styles.image2} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 360,
    height: 270,
  },
  bottomContainer: {
    alignItems: "flex-end",
  },
  image2: {
    width: 250,
    height: 250,
  },
});
