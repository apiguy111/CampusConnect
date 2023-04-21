import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const PersonalDetails = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Image
          source={require("../../assets/location.png")}
          style={styles.location}
        />
        <Text style={styles.locationText}>From</Text>
        <Text style={styles.stateText}> {post.district},</Text>
        <Text style={styles.stateText}> {post.state}</Text>
      </View>
      <View style={styles.instagramContainer}>
        <Image
          source={require("../../assets/instagram.png")}
          style={styles.instagram}
        />
        <Text style={styles.instagramText}>{post.instagram}</Text>
      </View>
      <View style={styles.twitterContainer}>
        <Image
          source={require("../../assets/twitter.png")}
          style={styles.twitter}
        />
        <Text style={styles.twitterText}>{post.twitter}</Text>
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
    height: 16,
    width: 16,
    left: 20,
    opacity: 0.6,
  },

  locationText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000",
    left: 49,
    opacity: 0.6,
  },

  stateText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
    left: 49,
    opacity: 0.6,
  },

  instagramContainer: {
    flexDirection: "row",
    marginBottom: 12,
  },

  instagram: {
    height: 16,
    width: 16,
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

  twitterContainer: {
    flexDirection: "row",
    marginBottom: 3,
  },

  twitter: {
    height: 16,
    width: 16,
    left: 20,
    opacity: 0.6,
  },

  twitterText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
    left: 49,
    opacity: 0.6,
  },
});

export default PersonalDetails;
