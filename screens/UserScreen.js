import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import User from "../components/user/User";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <User />
      <View style={styles.bottomTabsContainer}>
        <BottomTabs icons={bottomTabIcons} />
      </View>
    </View>
  );
};

const Header = () => {
  return <SafeAreaView style={styles.headerContainer}></SafeAreaView>;
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

  bottomTabsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default UserScreen;
