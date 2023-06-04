import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import { Image } from "react-native";

const Place = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.label}>Place</Text>
        <TouchableOpacity activeOpacity={0.9}>
          <Image
            source={require("../../assets/editProfile.png")}
            style={[styles.image]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.socials}>State</Text>
          <Divider
            orientation="vertical"
            width={1}
            style={[styles.vertical, { left: 46 }]}
          />
          <Text style={[styles.twitter, { left: 40 }]}>Uttar Pradesh</Text>
        </View>
        <Divider orientation="horizontal" style={styles.divider} width={1} />

        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.social}>Twitter</Text>
            <Divider
              orientation="vertical"
              width={1}
              style={[styles.vertical, { left: 68.2 }]}
            />
            <Text style={[styles.twitter, { left: 63 }]}>Varanasi</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "600",
    opacity: 0.7,
    left: 15,
    marginBottom: 15,
  },

  container: {
    backgroundColor: "#FAFAFA",
    borderRadius: 6,
    width: "93%",
    left: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },

  socials: {
    fontSize: 13,
    fontWeight: "600",
    padding: 16,
  },

  vertical: {
    left: 35,
    marginRight: 50,
  },

  social: {
    fontSize: 13,
    fontWeight: "600",
    alignSelf: "center",
    left: 16,
  },

  twitter: {
    fontSize: 13,
    fontWeight: "400",
    padding: 20,
    opacity: 0.5,
  },

  labels: {
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.7,
    left: 35,
  },

  image: {
    height: 19,
    width: 19,
    opacity: 0.67,
    right: 16,
  },
});

export default Place;
