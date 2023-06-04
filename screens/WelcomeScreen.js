import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StackActions } from "@react-navigation/native";

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      if (
        navigation.dangerouslyGetState().routes[
          navigation.dangerouslyGetState().index
        ].name !== "WelcomeScreen"
      ) {
        navigation.dispatch(StackActions.replace("WelcomeScreen"));
      } else {
        unsubscribe();
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logoContainer}
        source={require("../assets/logo.png")}
      />
      <Text style={styles.text}>Welcome to</Text>

      <Image style={styles.fam} source={require("../assets/fam.png")} />
      <View style={styles.underline} />
      <View style={styles.secondUnderline} />

      <TouchableOpacity style={styles.logIn} activeOpacity={0.9}>
        <Pressable
          titleSize={20}
          style={styles.button}
          onPress={() => navigation.push("LogInScreen")}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUp} activeOpacity={0.9}>
        <Pressable
          titleSize={20}
          style={styles.button}
          onPress={() => navigation.push("SignupScreen")}
        >
          <Text style={styles.signButtonText}>Sign up</Text>
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDF7F7",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logoContainer: {
    position: "absolute",
    width: 258.05,
    height: 271.68,
    left: 52,
    top: 105,
    justifyContent: "center",
  },

  text: {
    position: "absolute",
    width: 253,
    height: 56,
    left: 52,
    top: 370,

    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 46,
    lineHeight: 56,
    textAlign: "center",
    letterSpacing: -0.333333,
    color: "#000000",
  },

  fam: {
    position: "absolute",
    width: 254,
    height: 49,
    left: 52,
    top: 433,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },

  underline: {
    position: "absolute",
    left: "12.21%",
    right: "44.78%",
    top: 513,
    bottom: 35,
    backgroundColor: "#000000",
    borderRadius: 10,
    height: 3,
  },

  secondUnderline: {
    position: "absolute",
    left: "40.78%",
    right: "12.21%",
    top: 520,
    bottom: 35,
    backgroundColor: "#000000",
    borderRadius: 10,
    height: 3,
  },

  logIn: {
    position: "absolute",
    width: "92%",
    height: 43,
    left: 16,
    top: 622,
    borderRadius: 32,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
    letterSpacing: -0.333333,
  },

  signUp: {
    position: "absolute",
    width: 332,
    height: 43,
    left: 16,
    top: 675,
    borderRadius: 32,
    backgroundColor: "#D0CBCB",
    justifyContent: "center",
    alignItems: "center",
  },

  signButtonText: {
    fontWeight: "600",
    color: "#000",
    fontSize: 20,
    letterSpacing: -0.333333,
  },
});

export default WelcomeScreen;
