import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";

const posts = [
  {
    id: 1,
    username: "priyanshi11",
    user: "Priyanshi Shukla",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 2,
    username: "niks1008",
    user: "Nikhlesh Singh",
    imageUrl:
      "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 3,
    username: "shiv_singh",
    user: "Kuwar Shiv Pratap Singh",
    imageUrl:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
  },
];

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const results = posts.filter((post) =>
        post.username.toLowerCase().includes(text.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.avatar} />
      <View style={styles.itemContent}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.user}>{item.user}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ padding: 10, marginTop: 10 }}>
      <Image
        style={styles.searchIcon}
        source={require("../../assets/activeSearch.png")}
      />
      <TextInput
        style={{
          backgroundColor: "#F2F2F2",
          borderRadius: 30,
          padding: 10,
          borderWidth: 0.1,
          left: 14,
          width: "92%",
          paddingLeft: 65,
        }}
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchText}
        autoCorrect={false}
        autoCompleteType="off"
      />

      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 24,
    width: 24,
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  itemContent: {
    flex: 1,
    bottom: 5,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },

  username: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333333",
    left: 10,
    bottom: 0,
  },

  user: {
    fontSize: 12,
    color: "#999",
    left: 10,
  },

  searchIcon: {
    width: 20,
    height: 20,
    position: "absolute",
    marginTop: 24,
    left: 44,
    zIndex: 1,
    opacity: 0.3,
  },
});

export default Search;
