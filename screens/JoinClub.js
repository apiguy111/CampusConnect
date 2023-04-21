import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const JoinClub = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Buttons />
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

const Buttons = () => {
  return (
    <View>
      <TouchableOpacity style={styles.technicalContainer} activeOpacity={0.9}>
        <Image
          source={require("../assets/technical.png")}
          style={styles.technicalImage}
        />
        <Text style={styles.technicalText}>Technical Club’s</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nonTechnicalContainer}
        activeOpacity={0.9}
      >
        <Image
          source={require("../assets/nonTechnical.png")}
          style={styles.technicalImage}
        />
        <Text style={styles.nonTechnicalText}>Non-Technical Club’s</Text>
      </TouchableOpacity>
    </View>
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

  technicalContainer: {
    height: 162,
    width: 343,
    left: 8,
    top: 150,
    backgroundColor: "#683647",
    borderRadius: 36,
  },

  technicalImage: {
    height: 45,
    width: 45,
    left: 39,
    top: 55,
  },

  technicalText: {
    fontSize: 22,
    fontWeight: "400",
    color: "#FFFFFF",
    left: 120,
    top: 18,
  },

  nonTechnicalContainer: {
    height: 162,
    width: 343,
    left: 8,
    top: 170,
    backgroundColor: "#683647",
    borderRadius: 36,
  },

  nonTechnicalText: {
    fontSize: 22,
    fontWeight: "400",
    color: "#FFFFFF",
    left: 120,
    top: 17,
    width: 150,
    lineHeight: 30,
  },
});

export default JoinClub;
