import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../components/search/Search";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
    </View>
  );
};

const Header = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity activeOpacity={0.9}>
        <Image
          source={require("../assets/backArrow.png")}
          style={styles.image}
        />
      </TouchableOpacity>
    </SafeAreaView>
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
});

export default SearchScreen;
