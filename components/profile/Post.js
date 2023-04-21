import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import upActiveIcon from "../../assets/upActive.png";
import upInactiveIcon from "../../assets/upArrow.png";
import downActiveIcon from "../../assets/downActive.png";
import downInactiveIcon from "../../assets/downArrow.png";

const Post = ({ post }) => {
  return (
    <View style={{ marginTop: 14 }}>
      <PostHeader post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => {
  const [voteCount, setVoteCount] = useState(0);
  const [userVote, setUserVote] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (imageUri) => {
    setSelectedImage(imageUri);
    setModalVisible(true);
  };

  const handleVote = (vote) => {
    if (userVote === vote) {
      // If user clicks the same vote button again, reset the vote count
      setVoteCount(voteCount - vote);
      setUserVote(null);
    } else {
      // Add the vote to the count and set the user's vote
      setVoteCount(voteCount + vote);
      setUserVote(vote);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.9}>
          <Image source={{ uri: post.profile_picture }} style={styles.avatar} />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{post.user}</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.username}> @{post.username}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.role}>
        <Text style={styles.roleText}>{`(${post.role})`}</Text>
      </View>
      <View style={styles.date}>
        <Text style={{ fontSize: 11, fontWeight: "700" }}>{post.date},</Text>
        <Text style={{ fontSize: 11, fontWeight: "700" }}> {post.year}</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.text}>{post.blog}</Text>
        {post.image ? (
          <TouchableOpacity
            onPress={() => handleImagePress(post.image)}
            activeOpacity={0.9}
          >
            <Image
              source={{ uri: post.image }}
              style={[styles.image, { flex: 1 }]}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      <Modal visible={modalVisible} transparent={true}>
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => setModalVisible(false)}
        >
          <Image
            source={{ uri: selectedImage }}
            resizeMode="contain"
            style={styles.modalImage}
          />
        </TouchableOpacity>
      </Modal>

      <Divider width={1} orientation="vertical" style={styles.divider} />
      <View style={styles.voteButtons}>
        <TouchableOpacity
          style={[
            styles.voteButton,
            userVote === 1 && styles.selectedVoteButton,
            userVote === -1 && styles.disabledVoteButton,
          ]}
          disabled={userVote === -1}
          onPress={() => handleVote(1)}
          activeOpacity={1}
        >
          <Image
            source={userVote === 1 ? upActiveIcon : upInactiveIcon}
            style={[styles.voteButton]}
          />
        </TouchableOpacity>
        <Text style={styles.voteCount}>{voteCount}</Text>

        <TouchableOpacity
          style={[
            styles.voteButton,
            userVote === -1 && styles.selectedVoteButton,
            userVote === 1 && styles.disabledVoteButton,
          ]}
          disabled={userVote === 1}
          onPress={() => handleVote(-1)}
          activeOpacity={1}
        >
          <Image
            source={userVote === -1 ? downActiveIcon : downInactiveIcon}
            style={[styles.voteButton]}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/comment.png")}
            style={styles.comment}
          />
          <Text style={styles.commentText}> {post.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9}>
          <Image
            source={require("../../assets/share.png")}
            style={styles.share}
          />
        </TouchableOpacity>
        <Text style={styles.shareText}> Share</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F0F0",
    borderRadius: 16,
    padding: 16,
    marginVertical: 0,
    marginHorizontal: 19,
    elevation: 3,
    left: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 9.5,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 12,
  },

  userInfo: {
    flex: 1,
    flexDirection: "row",
  },

  name: {
    fontSize: 15,
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "600",
    marginBottom: 4,
  },

  username: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.92)",
    opacity: 0.5,
    fontWeight: "700",
    left: 2,
  },

  role: {
    marginTop: -45,
    left: 0,
    marginBottom: 4,
  },

  roleText: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.72)",
  },

  date: {
    fontWeight: "800",
    lineHeight: 12,
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.72)",
    opacity: 0.5,
    flexDirection: "row",
    marginLeft: 67.5,
    marginBottom: 18,
  },

  body: {
    marginBottom: 12,
  },

  text: {
    fontWeight: "400",
    fontSize: 14.5,
    lineHeight: 21,
    color: "#000000",
    width: 294,
    marginBottom: 14,
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  image: {
    height: 200,
    marginRight: 4,
    borderRadius: 10,
    resizeMode: "cover",
  },

  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalImage: {
    width: "90%",
    height: "90%",
  },

  divider: {
    marginBottom: 5,
  },

  voteButtons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 8,
    marginBottom: 0 - 6,
  },

  voteButton: {
    width: 20,
    height: 20,

    backgroundColor: "#ECECEC",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 9,
  },

  voteCount: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.72)",
    opacity: 0.8,
    left: 8,
    marginRight: 13,
  },

  comment: {
    height: 24,
    width: 29,
    marginLeft: 30,
    opacity: 0.5,
  },

  commentText: {
    top: 3,
    opacity: 0.6,
    fontWeight: "700",
  },

  share: {
    width: 22,
    height: 22,
    marginLeft: 36,
    opacity: 0.5,
  },

  shareText: {
    left: 3,
    opacity: 0.6,
    fontWeight: "600",
  },

  selectedVoteButton: {
    backgroundColor: "#FF4500",
  },

  disabledVoteButton: {
    opacity: 0.5,
  },
});

export default Post;
