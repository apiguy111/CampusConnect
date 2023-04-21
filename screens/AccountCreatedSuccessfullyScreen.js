import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountCreatedSuccessfullyScreen = () => (
  <SafeAreaView>
    <View>
      <Image
        style={styles.logoContainer}
        source={require("../assets/success.png")}
      />
      <Text style={styles.text}>
        Congratulations your account has been created successfully 🎉
      </Text>
      <View style={styles.loginContainer}>
        <Text>Click here to</Text>
        <TouchableOpacity onPress={() => navigation.push("SignupScreen")}>
          <Text style={{ color: "#6BB0F5", fontWeight: 600 }}> Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  logoContainer: {
    paddingTop: 50,
    position: "absolute",
    width: 150,
    height: 150,
    left: 108,
    top: 105,
    justifyContent: "center",
  },

  text: {
    position: "absolute",
    width: 350,
    height: 48,
    left: 5,
    top: 309,
    fontWeight: "350",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: -0.333333,
  },

  loginContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 400,
  },
});

export default AccountCreatedSuccessfullyScreen;
