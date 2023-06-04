import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SignupForm from "../components/signupForm/SignupForm";

const SignupScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <View>
        <Text style={styles.signUp}>Sign up</Text>
      </View>
      <SignupForm navigation={navigation} />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF7F7",
    paddingTop: 50,
    paddingHorizontal: 12,
  },

  signUp: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    width: 86,
    height: 34,
    left: 130,
    top: 8,
    fontWeight: "400",
    fontSize: 28,
    letterSpacing: -0.333333,
    color: "#000000",
  },
});

export default SignupScreen;
