import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/profile/Header";
import CoverPhoto from "../components/profile/CoverPhoto";
import { POSTS2 } from "../data/posts";
import { FRIENDS, POSTS } from "../data/postsDuplicate";
import PersonalDetails from "../components/profile/PersonalDetails";
import Friends from "../components/profile/Friends";
import Skills from "../components/profile/Skills";
import Post from "../components/profile/Post";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <CoverPhoto post={POSTS2[0]} />
        <PersonalDetails post={POSTS2[0]} />
        <Friends />
        <Skills />
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
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

export default ProfileScreen;
