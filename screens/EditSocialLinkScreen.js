import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/profile/Header";
import EditSocialLink from "../components/editSocial/EditSocialLink";

const EditSocialLinkScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={styles.registration}>Add Social Accounts</Text>
      </View>
      <EditSocialLink />
    </View>
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
    marginBottom: 15,
  },
});

export default EditSocialLinkScreen;
