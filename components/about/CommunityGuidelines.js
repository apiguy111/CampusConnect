import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CommunityGuidelines = () => {
  return (
    <View style={styles.container}>
      <BasicContent />
      <MainContent />
    </View>
  );
};

const BasicContent = () => {
  return (
    <View>
      <View>
        <Text style={styles.firstText}>
          We contribute to human progress by empowering people to express
          themselves, live in the moment, learn about the world, and have fun
          together. We created these Community Guidelines to support our mission
          by encouraging the broadest range of self-expression, while making
          sure students can use our services safely every day. We intend for
          these Guidelines to be clear and understandable for all members of our
          community.
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
          the vast majority of which are students. If you have questions about
          how we use your data, you can always ask us for more information.
        </Text>
      </View>
    </View>
  );
};

const MainContent = () => {
  return (
    <View style={styles.mainContentContainer}>
      <View>
        <Text style={styles.mainHeading}>Sexually Explicit Content</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.text}>
            We prohibit accounts that promote or distribute pornographic
            content.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.text}>
            We report all instances of child sexual exploitation to authorities.
            Never post, save, or send nude or sexually explicit content
            involving anyone under the age of 18 — even of yourself. Never ask a
            minor to send sexually explicit content.
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.mainHeading}>Harassment & Bullying</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.text}>
            We prohibit bullying or harassment of any kind. If someone blocks
            you, you may not contact them from another account.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.text}>
            Harassment and bullying of any kind are not tolerated on our
            platform. This includes but is not limited to derogatory remarks,
            slurs, threats, or other forms of intimidation towards other users
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.mainHeading}>Threats, Violence & Harm</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.text}>
            Encouraging violence or dangerous behavior is prohibited — never
            intimidate or threaten to harm a person, a group of people, or
            someone’s property.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.text}>
            We don’t allow the glorification of self-harm, including the
            promotion of self-injury, suicide or eating disorders
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.mainHeading}>
          Impersonation, Deceptive Practices & False Information
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.text}>
            We prohibit pretending to be someone (or something) that you’re not,
            or attempting to deceive people about who you are. This includes
            impersonating your friends, celebrities, brands, or other
            organizations.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.text}>
            We prohibit spreading false information that causes harm or is
            malicious, such as denying the existence of tragic events,
            unsubstantiated medical claims, undermining the integrity of civic
            processes, or manipulating content for false or misleading purposes.
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.bottom}>
          Please take these Guidelines seriously and honor them in the spirit in
          which they are intended.
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

  mainContentContainer: {
    marginTop: 45,
    width: "90%",
  },

  mainHeading: {
    fontSize: 20,
    fontWeight: "600",
  },

  bulletPoint: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 24,
    left: 5,
  },

  text: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 1,
    left: 15,
  },

  bottom: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 1,
  },
});

export default CommunityGuidelines;
