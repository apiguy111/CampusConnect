import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import CreateEvent from "../components/createEvent/CreateEvent";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateEventScreen = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        <View>
          <Text style={styles.registration}>Create an Event</Text>
        </View>
        <CreateEvent />
      </ScrollView>
    </View>
  );
};

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
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
    width: 393,
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
    fontSize: 24,
    letterSpacing: -0.333333,
    color: "#000000",
  },
});

export default CreateEventScreen;
