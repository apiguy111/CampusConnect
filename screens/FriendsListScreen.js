import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../components/profile/Header";
import FriendsList from "../components/friendList/FriendsList";

const FriendsListScreen = () => {
  return (
    <View>
      <Header />
      <View>
        <FriendsList />
      </View>
    </View>
  );
};

export default FriendsListScreen;
