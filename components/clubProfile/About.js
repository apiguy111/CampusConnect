import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const About = () => {
  return (
    <View>
      <View>
        <Text style={styles.projects}>About</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Welcome to our designing group on Familiarity! We are a community of
          creative individuals who are passionate about designing and creating
          visually stunning graphics. Our group provides a platform for
          designers to share their work, collaborate with each other, and learn
          from experts in the field. Whether you are a seasoned designer or just
          starting out, we welcome you to join our community and share your
          unique perspective with us. Here, we encourage you to express your
          creativity, challenge yourself, and explore the endless possibilities
          of design. Join us today and let's make something beautiful together!
        </Text>
      </View>
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  projects: {
    fontSize: 18,
    fontWeight: "600",
    left: 20,
    color: "#E1D7DA",
    marginBottom: 20,
  },

  container: {
    backgroundColor: "#D9D9D9",
    width: "100%",
    padding: 16,
    marginBottom: 30,
  },

  text: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 25,
    left: 5,
  },

  underline: {
    backgroundColor: "#000",
    height: 1,
    marginBottom: 15,
    opacity: 0.2,
  },
});

export default About;
