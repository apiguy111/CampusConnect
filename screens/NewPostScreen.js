import { View, Text } from "react-native";
import React from "react";
import Header from "../components/header/Header";
import NewPost from "../components/newPost/NewPost";

const NewPostScreen = () => {
  return (
    <View>
      <Header />
      <NewPost />
    </View>
  );
};

export default NewPostScreen;
