import { View, Text } from "react-native";
import React from "react";
import NonTechnicalClub from "../components/selectClub/NonTechnicalClub";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";

const NonTechnicalClubScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={styles.registration}>Choose any club</Text>
      </View>
      <NonTechnicalClub />
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
    backgroundColor: "#FDF7F7",
    flex: 1,
  },

  headerContainer: {
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

  registration: {
    left: 15,
    top: 15,
    fontWeight: "400",
    fontSize: 24,
    letterSpacing: -0.333333,
    color: "#000000",
  },
});

export default NonTechnicalClubScreen;
