import { View, Text, ScrollView } from "react-native";
import React from "react";
import CoverPhoto from "../components/clubProfile/CoverPhoto";
import PersonalDetails from "../components/clubProfile/PersonalDetails";
import { StyleSheet } from "react-native";
import Header from "../components/profile/Header";
import { POSTS2 } from "../data/posts";

const ClubProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <CoverPhoto post={POSTS2[1]} />
        <PersonalDetails post={POSTS2[1]} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#683647",
    flex: 1,
  },
});

export default ClubProfileScreen;
