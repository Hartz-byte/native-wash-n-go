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

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // handle sign-up
  const signUpHandler = async (
    phone: string,
    password: string,
    name: string
  ) => {
    if (!name || !phone || !password) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }

    if (!isChecked) {
      Alert.alert("Error", "Please agree to the terms and conditions.");
      return;
    }

    try {
      const response = await axios.post(
        "https://tor.appdevelopers.mobi/api/register",
        {
          phone,
          password,
          name,
        }
      );

      // console.log("registered: ", response.data);

      if (response.data.status == true) {
        router.replace("/(auth)/SignIn");
      } else {
        Alert.alert("Error", response.data.message || "Something went wrong");
      }
    } catch (error) {
      Alert.alert("Error", "Registration failed");
      console.error(error);
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
          <Text style={styles.signinText}>Sign Up</Text>

          <Text style={styles.welcomeText}>
            Fill in the below form and add life to{"\n"}your car!
          </Text>
        </View>

        {/* custom inputs */}
        <View>
          {/* name */}
          <CustomInput
            title="Name"
            icon="name"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />

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

        {/* check box */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={toggleCheckbox} style={styles.checkbox}>
            {isChecked ? <View style={styles.checkedBox} /> : null}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            Agree with{" "}
            <Text style={styles.checkboxText2}>Terms & Conditions</Text>
          </Text>
        </View>

        {/* custom button */}
        <CustomButton
          text="Sign Up"
          press={() => signUpHandler(phone, password, name)}
        />

        {/* already have an account text */}
        <View style={styles.accountContainer}>
          <TouchableWithoutFeedback
            onPress={() => router.push("/(auth)/SignIn")}
          >
            <Text style={styles.accountText}>
              Already have an account?{" "}
              <Text style={styles.signupText}>Sign In</Text>
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
    right: 0,
    zIndex: -999,
    transform: [{ rotateX: "180deg" }],
    height: 220,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#797979",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkedBox: {
    width: 12,
    height: 12,
    backgroundColor: "#A3CFFF",
  },
  checkboxText: {
    fontFamily: "Poppins-Medium",
    color: "#000000",
  },
  checkboxText2: {
    fontFamily: "Poppins-Medium",
    color: "gray",
    textDecorationLine: "underline",
  },
});

export default SignUp;
