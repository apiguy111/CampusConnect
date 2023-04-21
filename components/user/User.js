import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";

const User = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(false);
    // handle logout logic here
  };

  return (
    <View>
      <Image source={require("../../assets/fam.png")} style={styles.image} />
      <View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          }}
          style={styles.userImage}
        />
      </View>
      <View>
        <Text style={styles.username}>Priyanshi Shukla</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.profile}>View profile</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.text}>About us</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.text}>Contact us</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.text}>Community guidelines and rules</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.text}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.text}>Log out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>App version 1.1</Text>
      </View>
      <Modal visible={modalVisible}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Are you sure you want to </Text>
            <Text style={styles.modalSignOut}>Log out ? </Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleLogout}
                activeOpacity={0.8}
              >
                <Text style={styles.modalButtonText}>Log out</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton2}
                onPress={() => setModalVisible(false)}
                activeOpacity={0.8}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 48,
    width: 186,

    marginTop: 14,
  },

  userImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 18,
    marginBottom: 16,
    marginTop: 20,
  },

  username: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 18,
    marginBottom: 5,
  },

  profile: {
    fontSize: 12,
    fontWeight: "700",
    color: "#262525",
    marginLeft: 18,
    opacity: 0.6,
    marginBottom: 50,
  },

  text: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 18,
    marginBottom: 15,
  },

  versionContainer: {
    marginTop: 100,
    alignItems: "center",
  },

  versionText: {
    fontSize: 13,
    fontWeight: "500",
  },

  modalContainer: {
    backgroundColor: "white",
    width: "90.2%",
    height: "25%",
    borderRadius: 10,
    overflow: "hidden",
    left: 1,
    borderRadius: 32,
  },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalTitle: {
    marginTop: 30,
    fontWeight: "400",
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 2,
  },

  modalSignOut: {
    fontWeight: "700",
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 20,
  },

  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  modalButton: {
    height: 37,
    width: 112,
    backgroundColor: "#E0144C",
    borderRadius: 32,
  },

  modalButton2: {
    height: 37,
    width: 112,
    backgroundColor: "#2f2e41ad",
    borderRadius: 32,
  },

  modalButtonText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
    alignSelf: "center",
    marginTop: 6,
  },
});

export default User;
