import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { Image } from "react-native";

const Members = () => {
  return (
    <View>
      <MutualFriends />
      <ProfileScreen />
      <View style={styles.underline} />
    </View>
  );
};

const MutualFriends = () => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.friends}>Group Members </Text>
        <TouchableOpacity style={styles.friendsContainer} activeOpacity={0.9}>
          <Text style={styles.friendsText}>See all members</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mutualContainer}>
        <Text style={styles.mutualText}>28</Text>
        <Text style={styles.mutualDot}> .</Text>
        <Text style={styles.mutualText}> 3 Mutual friends</Text>
      </View>
    </View>
  );
};

const ProfileScreen = () => {
  const friends = [
    {
      id: "1",
      name: "Shivanshi singh",
      image: {
        uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    },
    {
      id: "2",
      name: "Nikhlesh Singh",
      image: {
        uri: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
    },
    {
      id: "3",
      name: "Ashwini Singh",
      image: {
        uri: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      },
    },
    {
      id: "4",
      name: "Shreya shukla",
      image: {
        uri: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1961&q=80",
      },
    },
    {
      id: "5",
      name: "Rishabh Kumar",
      image: {
        uri: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      },
    },
    {
      id: "6",
      name: "Sara",
      image: {
        uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      },
    },
    {
      id: "7",
      name: "Ishita Singh",
      image: {
        uri: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      },
    },
    {
      id: "8",
      name: "Nisha Singh",
      image: {
        uri: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=438&q=80",
      },
    },
    {
      id: "9",
      name: "Tom",
      image: {
        uri: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
    },
  ];

  const renderFriend = ({ item, index }) => {
    const isLastInRow = (index + 1) % 4 === 0;
    return (
      <View
        style={{
          alignItems: "center",
          marginRight: isLastInRow ? 20 : 7,
          left: 20,
        }}
      >
        <Image
          source={item.image}
          style={{
            width: 76,
            height: 76,
            borderRadius: 52,
            borderWidth: 2,
            borderColor: "#000",
          }}
        />
        <Text style={{ marginTop: 5, color: "#fff" }}>
          {" "}
          {item.name.length > 11
            ? item.name.slice(0, 10).toLowerCase() + "..."
            : item.name.toLowerCase()}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <FlatList
          data={friends.slice(0, 4)}
          renderItem={renderFriend}
          keyExtractor={(item) => item.id}
          horizontal={true}
          style={{ marginBottom: 10 }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <FlatList
          data={friends.slice(4, 8)}
          renderItem={renderFriend}
          keyExtractor={(item) => item.id}
          horizontal={true}
          style={{ marginBottom: 25 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  friendsContainer: {
    height: 37,
    width: 106,
    backgroundColor: "#DADADA",
    left: 115,
    borderRadius: 32,
    marginTop: 11,
  },

  friendsText: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    top: 8,
  },

  friends: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#E1D7DA",
    left: 20,
    top: 8,
  },

  mutualContainer: {
    flexDirection: "row",
    left: 20,
  },

  mutualText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#E1D7DA",
  },

  mutualDot: {
    fontSize: 26,
    fontWeight: "400",
    color: "#E1D7DA",
    bottom: 13,
    marginRight: 1,
  },

  underline: {
    backgroundColor: "#000",
    height: 1,
    marginBottom: 15,
    opacity: 0.2,
  },
});

export default Members;
