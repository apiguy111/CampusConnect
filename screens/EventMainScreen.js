import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";

const EventMainScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Buttons />
      <View style={styles.bottomTabsContainer}>
        <BottomTabs icons={bottomTabIcons} />
      </View>
    </View>
  );
};

const Header = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text style={styles.eventContainer}>Events</Text>
    </SafeAreaView>
  );
};

const Buttons = () => {
  return (
    <View style={{ marginBottom: 40 }}>
      <TouchableOpacity style={styles.technicalContainer} activeOpacity={0.9}>
        <Image
          source={require("../assets/technical.png")}
          style={styles.technicalImage}
        />
        <Text style={styles.technicalText}>Upcoming Events</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nonTechnicalContainer}
        activeOpacity={0.9}
      >
        <Image
          source={require("../assets/nonTechnical.png")}
          style={styles.technicalImage}
        />
        <Text style={styles.nonTechnicalText}>Past Events</Text>
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

  bottomTabsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  eventContainer: {
    fontSize: 18,
    fontWeight: "700",
    color: "#3C3235",
    left: 12,
    marginTop: 17,
  },
});

export default EventMainScreen;
