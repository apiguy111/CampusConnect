import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Service = () => {
  return (
    <View style={styles.container}>
      <BasicContent />
    </View>
  );
};

const BasicContent = () => {
  return (
    <View>
      <View>
        <Text style={styles.firstText}>
          We’ve drafted these Terms of Service (which we call the “Terms”) so
          you’ll know the rules that govern our relationship with you as a user
          of our Services. Although we have tried our best to strip the legalese
          from the Terms, there are places where they may still read like a
          traditional contract. There’s a good reason for that: these Terms form
          a legally binding contract between you and Familiarity. So please read
          them carefully.
        </Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.secondText}>
          We've outlined here and in our Terms of Service specific rules for
          content that is prohibited on Familiarity. But it's hard to anticipate
          every situation that might come up. The key is the spirit of these
          rules: we want Familiarity to be a safe and positive experience for
          everyone. We reserve the right to decide, in our sole discretion, what
          content violates that spirit and will not be permitted on the
          platform.
        </Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.thirdText}>
          Any data we collect is used primarily to provide our services, which
          are focused on allowing people to come together and form communities,
          the vast majority of which are public. If you have questions about how
          we use your data, you can always ask us for more information.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    left: 15,
    width: "90%",
  },

  firstText: {
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 1,
    lineHeight: 19,
  },

  secondText: {
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 1,
    lineHeight: 19,
  },

  thirdText: {
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 1,
    lineHeight: 19,
  },
});

export default Service;
