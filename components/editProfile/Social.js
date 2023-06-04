import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

const Social = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.label}>Add Social links</Text>
        <TouchableOpacity activeOpacity={0.9}>
          <Image
            source={require("../../assets/editProfile.png")}
            style={[styles.image]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.socials}>Social’s</Text>
          <Divider orientation="vertical" width={1} style={styles.vertical} />
          <Text style={[styles.socials, { left: 80 }]}>Username</Text>
        </View>

        <Divider orientation="horizontal" style={styles.divider} width={1} />

        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.social}>Twitter</Text>
            <Divider
              orientation="vertical"
              width={1}
              style={[styles.vertical, { left: 70 }]}
            />
            <Text style={[styles.twitter, { left: 80 }]}>shukla.priyanshi</Text>
          </View>
          <Divider
            orientation="horizontal"
            style={[styles.divider, {}]}
            width={1}
          />
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.social}>Instagram</Text>
            <Divider
              orientation="vertical"
              width={1}
              style={[styles.vertical, { left: 53 }]}
            />
            <Text style={[styles.twitter, { left: 63 }]}>priyanshi.shukla</Text>
          </View>
          <Divider
            orientation="horizontal"
            style={[styles.divider, {}]}
            width={1}
          />
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.social}>Twitter</Text>
            <Divider
              orientation="vertical"
              width={1}
              style={[styles.vertical, { left: 70 }]}
            />
            <Text style={[styles.twitter, { left: 80 }]}>
              shukla.priyanshiii
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "600",
    opacity: 0.7,
    left: 15,
    marginBottom: 15,
  },

  container: {
    backgroundColor: "#FAFAFA",
    borderRadius: 6,
    width: "93%",
    left: 15,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  socials: {
    fontSize: 13,
    fontWeight: "600",
    padding: 16,
  },

  twitter: {
    fontSize: 13,
    fontWeight: "400",
    padding: 20,
    marginLeft: 29,
    opacity: 0.5,
  },

  divider: {
    marginBottom: 0,
  },

  vertical: {
    left: 35,
  },

  social: {
    fontSize: 13,
    fontWeight: "600",
    alignSelf: "center",
    left: 16,
  },

  image: {
    height: 19,
    width: 19,
    opacity: 0.67,
    right: 16,
  },
});

export default Social;
