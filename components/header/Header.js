import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    width: 393,
    height: 95,
    backgroundColor: "#A68F97",
  },

  image: {
    height: 17,
    width: 21,
    opacity: 0.7,
    marginTop: 25,
    left: 20,
  },
});

export default Header;
