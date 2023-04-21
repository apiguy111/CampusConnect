import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Buttons = () => {
  return (
    <View>
      <View style={[styles.container, { left: 24 }]}>
        <TouchableOpacity activeOpacity={0.9}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            }}
            style={[styles.event]}
          />
          <Text style={styles.eventText}>Create An Event</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
            style={[styles.event, { left: 162 }]}
          />
          <Text style={[styles.eventText, { left: 199 }]}>Upcoming Event</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        titleSize={20}
        style={styles.button}
        activeOpacity={0.9}
      >
        <Image
          source={require("../../assets/joinClub.png")}
          style={styles.clubImage}
        />
        <Text style={styles.buttonText}>Join Any Club</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: -15,
  },

  event: {
    position: "absolute",
    width: 160,
    height: 150,
    left: -7,
    top: 28,
    backgroundColor: "rgba(217, 217, 217, 0.9)",
    borderRadius: 30,
    overflow: "hidden",
    opacity: 0.87,
  },

  eventText: {
    position: "absolute",
    width: 89.1,
    height: 52.69,
    left: 30,
    top: 84,
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 23,
    textAlign: "center",
    letterSpacing: -0.333333,
    color: "#FFFFFF",
    overflow: "hidden",
  },

  button: {
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
    height: 101,
    width: 326,
    borderRadius: 30,
    marginTop: 190,
    left: 18,
  },

  buttonText: {
    fontWeight: "600",
    color: "#000",
    fontSize: 20,
  },

  clubImage: {
    position: "absolute",
    width: 55,
    height: 52,
    left: 23,
    top: 22,
  },

  text: {
    position: "absolute",
    width: 111,
    height: 19,
    left: 22,
    top: 14,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.8)",
  },
});

export default Buttons;
