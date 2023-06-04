import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Name from "../components/editProfile/Name";
import Place from "../components/editProfile/Place";
import { ScrollView } from "react-native";
import Skills from "../components/editProfile/Skills";

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Name />
        <Place />
        <Skills />
      </ScrollView>
    </View>
  );
};

const Header = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity activeOpacity={0.9} style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/backArrow.png")}
          style={styles.image}
        />
        <Text style={styles.text}>Edit profile</Text>
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

  text: {
    marginTop: 22,
    left: 35,
    fontSize: 18,
    fontWeight: "700",
    color: "#3C3235",
  },
});

export default EditProfile;
