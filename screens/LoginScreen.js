import { View, Text, StyleSheet } from "react-native";
import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const LogInScreen = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.logIn}>Log in</Text>
    </View>
    <LoginForm />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF7F7",
    paddingTop: 50,
    paddingHorizontal: 12,
  },

  logIn: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    width: 79,
    height: 34,
    left: 130,
    top: 8,
    fontWeight: "400",
    fontSize: 28,

    letterSpacing: -0.333333,
    color: "#000000",
  },
});

export default LogInScreen;
