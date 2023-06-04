import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EditPlace from "../components/editPlace/EditPlace";

const EditPlaceScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={styles.registration}>Select State and District</Text>
      </View>
      <EditPlace />
    </View>
  );
};

const Header = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity activeOpacity={0.9}>
        <Image
          source={require("../assets/backArrow.png")}
          style={styles.image}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  headerContainer: {
    width: "100%",
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

  registration: {
    left: 15,
    top: 15,
    fontWeight: "400",
    fontSize: 18,
    letterSpacing: -0.333333,
    color: "#000000",
  },
});

export default EditPlaceScreen;
