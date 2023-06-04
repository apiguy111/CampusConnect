import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const friends = [
  {
    id: "1",
    name: "John Doe",
    username: "johndoe",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
    },
  },
  {
    id: "2",
    name: "Jane Smith",
    username: "janesmith",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
  {
    id: "3",
    name: "Bob Johnson",
    username: "bobjohnson",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
  {
    id: "4",
    name: "Bob Johnson",
    username: "niks",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
  {
    id: "5",
    name: "Ashwani",
    username: "shubham12",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
  {
    id: "6",
    name: "jacky",
    username: "shiv24",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
  {
    id: "7",
    name: "sneha",
    username: "priyanshi11",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
  {
    id: "8",
    name: "Gippy",
    username: "ashwani",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
    },
  },
  {
    id: "9",
    name: "Shubham",
    username: "shivansh",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
    },
  },
  {
    id: "10",
    name: "Chiku",
    username: "robert",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
    },
  },
  {
    id: "11",
    name: "Saurav",
    username: "steve",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
    },
  },
  {
    id: "12",
    name: "Jane Smith",
    username: "jennifer",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
  {
    id: "13",
    name: "Jane Smith",
    username: "vedika",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
  {
    id: "14",
    name: "Jane Smith",
    username: "rishabh",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
  {
    id: "15",
    name: "Jane Smith",
    username: "rishabh.kumar",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
  {
    id: "16",
    name: "Jane Smith",
    username: "kuwar",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
  {
    id: "17",
    name: "Jane Smith",
    username: "shivanshhh",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
  {
    id: "18",
    name: "Saurav",
    username: "jobssss",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
    },
  },
  {
    id: "19",
    name: "Alva",
    username: "thomas",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
    },
  },
  {
    id: "20",
    name: "messi",
    username: "leo",
    profilePic: {
      uri: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
    },
  },

  // add more friends data here...
];

const FriendsList = () => {
  const sortedFriends = friends.sort((a, b) => a.name.localeCompare(b.name));
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.9}>
      <Image source={{ uri: item.profilePic.uri }} style={styles.profilePic} />
      <View style={styles.textContainer}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedFriends}
        renderItem={renderItem}
        keyExtractor={(item) => item.username}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 12,
    color: "#999",
    left: 10,
  },
  username: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333333",
    left: 10,
    bottom: 0,
  },
});

export default FriendsList;
