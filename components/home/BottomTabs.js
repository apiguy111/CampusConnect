import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { Image } from "react-native";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: require("../../assets/activeHome.png"),
    inactive: require("../../assets/inactiveHome.png"),
  },
  {
    name: "Search",
    active: require("../../assets/activeSearch.png"),
    inactive: require("../../assets/inactiveSearch.png"),
  },
  {
    name: "Event",
    active: require("../../assets/activeEvent.png"),
    inactive: require("../../assets/inactiveEvent.png"),
  },
  {
    name: "Chat",
    active: require("../../assets/activeChat.png"),
    inactive: require("../../assets/inactiveChat.png"),
  },
];

const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={activeTab === icon.name ? icon.active : icon.inactive}
        style={[
          styles.icon,
          activeTab === icon.name ? styles.activeIcon : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {bottomTabIcons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
    backgroundColor: "#D9D9D9",
  },

  icon: {
    width: 25,
    height: 25,
  },
});

export default BottomTabs;
