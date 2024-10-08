import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import axios from "axios";

import Logo from "../../assets/images/logo.png";
import Image3 from "../../assets/images/image3.png";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

import AntDesign from "@expo/vector-icons/AntDesign";

const SignIn = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // handle sign-in
  const signInHandler = async (phone: string, password: string) => {
    if (!phone || !password) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "https://tor.appdevelopers.mobi/api/login",
        {
          phone,
          password,
        }
      );

      // console.log("logged in: ", response.data);

      if (response.data.status == true) {
        router.push("/(auth)/Welcome");
      } else {
        Alert.alert("Error", response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error during login: ", error);
      Alert.alert("Error", "Login failed. Please try again.");
    }
  };

  return (
    <View>
      <ScrollView style={styles.mainContainer}>
        {/* logo */}
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
        </View>

        {/* text */}
        <View>
          <Text style={styles.signinText}>Sign In</Text>

          <Text style={styles.welcomeText}>
            Hi ! Welcome back, you{"\n"}have been missed{" "}
          </Text>
        </View>

        {/* custom inputs */}
        <View>
          {/* email */}
          {/* <CustomInput title="Email" icon="email" placeholder="xyz@gmail.com" /> */}

          {/* phone */}
          <CustomInput
            title="Phone"
            icon="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
          />

          {/* password */}
          <CustomInput
            title="Password"
            icon="lock"
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* forgot password button */}
        <View style={styles.forgotButton}>
          <TouchableWithoutFeedback>
            <Text style={styles.forgotText}>Forgot password ?</Text>
          </TouchableWithoutFeedback>
        </View>

        {/* custom button */}
        <CustomButton
          text="Sign In"
          press={() => signInHandler(phone, password)}
        />

        {/* border */}
        <View style={styles.borderContainer}>
          <View style={styles.border} />

          <Text style={styles.orText}>or</Text>

          <View style={styles.border} />
        </View>

        {/* google and apple buttons */}
        <View style={styles.flex}>
          <TouchableOpacity style={styles.circleContainer}>
            <AntDesign name="google" size={22} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.circleContainer}>
            <AntDesign name="apple1" size={22} color="black" />
          </TouchableOpacity>
        </View>

        {/* don't have an account text */}
        <View style={styles.accountContainer}>
          <TouchableWithoutFeedback
            onPress={() => router.push("/(auth)/SignUp")}
          >
            <Text style={styles.accountText}>
              Don’t have an account?{" "}
              <Text style={styles.signupText}>Sign Up</Text>
            </Text>
          </TouchableWithoutFeedback>
        </View>

        {/* footer text */}
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>
            By login or sign up, you agree to our terms of use and privacy
            policy
          </Text>
        </View>
      </ScrollView>

      {/* bottom image */}
      <Image source={Image3} style={styles.image3} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 30,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 233,
    height: 180,
  },
  signinText: {
    fontFamily: "Poppins-Bold",
    fontSize: 32,
  },
  welcomeText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#808080",
    marginBottom: 10,
  },
  forgotButton: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgotText: {
    fontFamily: "Poppins-Medium",
    textDecorationLine: "underline",
  },
  borderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    margin: 15,
  },
  border: {
    width: 100,
    height: 1,
    backgroundColor: "#A3CFFF",
  },
  orText: {
    color: "#666161",
    fontSize: 15,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#A3CFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "gray",
  },
  signupText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#000000",
  },
  accountContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  footerTextContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  footerText: {
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    lineHeight: 21,
    color: "#808080",
  },
  image3: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: -999,
    transform: [{ rotateX: "180deg" }, { rotateY: "180deg" }],
    height: 200,
  },
});

export default SignIn;
