import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Service from "../../components/about/Service";

const ServiceScreen = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View>
        <Text style={styles.registration}>Terms of Service</Text>
        <Text style={styles.smallText}>Updated: January 18, 2023</Text>
      </View>
      <Service />
    </View>
  );
};

const Header = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity activeOpacity={0.9}>
        <Image
          source={require("../../assets/backArrow.png")}
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
    fontWeight: "600",
    fontSize: 28,
    letterSpacing: -0.333333,
    color: "#000000",
  },

  smallText: {
    left: 17,
    top: 18,
    fontWeight: "600",
    fontSize: 14,
    letterSpacing: -0.333333,
    color: "#000000",
  },
});

export default ServiceScreen;
