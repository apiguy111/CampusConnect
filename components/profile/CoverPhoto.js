import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const CoverPhoto = ({ post }) => {
  return (
    <View style={styles.container}>
      <UserPicture post={post} />
      <UserDetails post={post} />
    </View>
  );
};

const UserPicture = ({ post }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.9}>
        <Image style={styles.coverPhoto} source={{ uri: post.image }} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.9}>
        <Image style={styles.profilePic} source={{ uri: post.profile }} />
      </TouchableOpacity>
    </View>
  );
};

const UserDetails = ({ post }) => {
  return (
    <View>
      <Text style={styles.name}>{post.user}</Text>
      <Text style={styles.username}>{`(${post.username})`}</Text>
      <Text style={styles.bio}>{post.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "relative",
    backgroundColor: "#fff",
  },
  coverPhoto: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },
  profilePic: {
    position: "absolute",
    bottom: -50,
    left: 128,
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },

  name: {
    marginTop: 60,
    left: 100,
    fontSize: 24,
    fontWeight: "600",
    color: "#FCEAF0",
  },

  username: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 16,
    textAlign: "center",
    color: "#E1D7DA",
    marginTop: 3,
  },

  bio: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    color: "#dadadae0",
    marginTop: 20,
    marginLeft: 26,
    maxWidth: 300,
    marginBottom: 20,
  },

  addUser: {
    height: 20,
    width: 20,
    left: 11,
    marginTop: 8,
  },

  addUserContainer: {
    width: 114,
    height: 37,

    left: 28,
    marginTop: 20,
    borderRadius: 32,
  },

  editContainer: {
    width: 114,
    height: 37,

    marginTop: 20,
    borderRadius: 32,
  },

  chat: {
    height: 20,
    width: 20,
    left: 12,
    marginTop: 8,
  },

  text: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    color: "#fff",
    left: 12,
    marginTop: -18,
  },

  editText: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    color: "#000",
    left: 12,
    marginTop: -18,
  },

  messageContainer: {
    width: 114,
    height: 37,
    backgroundColor: "#DADADA",
    marginTop: 20,
    borderRadius: 32,
    left: 38,
  },

  messageText: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    color: "#000",
    left: 10,
    marginTop: -19,
  },

  dotsContainer: {
    width: 57,
    height: 37,
    backgroundColor: "#DADADA",
    marginTop: 20,
    borderRadius: 32,
    marginLeft: 48,
  },

  dots: {
    height: 19,
    width: 20,
    left: 18,
    marginTop: 8,
  },

  buttonContainer: {
    flexDirection: "row",
    marginBottom: 23,
  },
});

export default CoverPhoto;
