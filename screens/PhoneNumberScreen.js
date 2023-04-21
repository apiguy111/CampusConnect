import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PhoneNumberVerificationForm from "../components/numberVerification/PhoneNumberVerificationForm";

const PhoneNumberScreen = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.logIn}>Number verification</Text>
    </View>
    <PhoneNumberVerificationForm />
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
    width: 279,
    height: 34,
    left: 56,
    top: 8,
    fontWeight: "400",
    fontSize: 28,

    letterSpacing: -0.333333,
    color: "#000000",
  },
});

export default PhoneNumberScreen;
