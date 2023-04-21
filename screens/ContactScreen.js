import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={styles.registration}>Contact Us</Text>
      </View>
      <ContactUs />
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

const ContactUs = () => {
  const handleEmailButtonPress = () => {
    const email = "familiarity111@gmail.com";
    const subject = "Contact Us";

    // Check if an email client app is installed on the device
    Linking.canOpenURL(`mailto:${email}?subject=${subject}`).then(
      (supported) => {
        if (supported) {
          // Open the email client app with the given email address and subject
          Linking.openURL(`mailto:${email}?subject=${subject}`);
        } else {
          console.log("Email client app is not installed");
        }
      }
    );
  };

  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.text}>
        We'd love to hear from you! If you have any questions or feedback,
        please don't hesitate to reach out to us. Click the Email Us button
        below to send us an email directly from your Gmail app. We'll do our
        best to get back to you as soon as possible.
      </Text>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Email Us"
          onPress={handleEmailButtonPress}
          activeOpacity={0.9}
        />
      </View>
    </View>
  );
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
    fontWeight: "600",
    fontSize: 28,
    letterSpacing: -0.333333,
    color: "#000000",
  },

  buttonContainer: {
    marginTop: 35,
    left: 16,
    width: "92%",
  },

  text: {
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 1,
    lineHeight: 19,
  },
});

export default ContactScreen;
