import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const PersonalDetails = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Image
          source={require("../../assets/president.png")}
          style={styles.location}
        />
        <Text style={styles.stateText}>Shivansh Singh</Text>
        <Text style={styles.locationText}> (Club President)</Text>
      </View>
      <View style={styles.instagramContainer}>
        <Image
          source={require("../../assets/vicePresident.png")}
          style={styles.instagram}
        />
        <Text style={styles.stateText}>Priyanshi Shukla</Text>
        <Text style={styles.locationText}> (Club Vice-President)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9",
    width: "100%",
    padding: 16,
    marginBottom: 10,
  },

  locationContainer: {
    flexDirection: "row",
    marginBottom: 12,
  },

  location: {
    height: 18,
    width: 18,
    left: 20,
    opacity: 0.6,
  },

  locationText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000",
    left: 42,
    opacity: 0.6,
  },

  stateText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
    left: 39,
    opacity: 0.6,
  },

  instagramContainer: {
    flexDirection: "row",
  },

  instagram: {
    height: 18,
    width: 18,
    left: 20,
    opacity: 0.6,
  },

  instagramText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
    left: 49,
    opacity: 0.6,
  },
});

export default PersonalDetails;
