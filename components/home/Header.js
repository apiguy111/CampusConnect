import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityBase,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ToggleSwitch from "toggle-switch-react-native";
import { Modal } from "react-native";

const Header = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleToggleNotification = () => {
    setNotificationEnabled(!notificationEnabled);
  };

  const handleBellPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }}
        style={styles.userImage}
      />
      <View style={styles.text}>
        <Text style={[{ color: "white", fontWeight: 330, fontSize: 16 }]}>
          Hello,
        </Text>
        <Text style={[{ color: "white", fontWeight: 500, fontSize: 16 }]}>
          {" "}
          Priyanshi
        </Text>

        <View style={styles.bell}>
          <TouchableOpacity onPress={handleBellPress}>
            <Image
              source={require("../../assets/bell.png")}
              style={{ height: 25, width: 25 }}
            />
          </TouchableOpacity>
          <Modal
            visible={modalVisible}
            onRequestClose={handleModalClose}
            transparent={true}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalContent}>
                <View style={styles.underline} />
                <Text style={styles.headingNotification}>Notifications</Text>
                <View style={styles.toggleContainer}>
                  <Text style={styles.notificationText}>
                    Enable Notifications
                  </Text>
                  <ToggleSwitch
                    isOn={notificationEnabled}
                    onToggle={handleToggleNotification}
                    offColor="#ccc"
                    onColor="#537FE7"
                    size="medium"
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 18,
    marginBottom: 10,
    marginTop: 20,
  },

  text: {
    position: "absolute",
    width: 126,
    height: 26,
    left: 80,
    top: 31,
    flexDirection: "row",
    alignItems: "center",
    lineHeight: 21,
    color: "#FFFFFF",
    opacity: 0.8,
  },

  bell: {
    position: "absolute",
    left: 240,
    opacity: 0.911,
  },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    width: "90.2%",
    height: "25%",
    borderRadius: 10,
    overflow: "hidden",
    left: 1,
    borderRadius: 32,
  },
  toggleContainer: {
    alignItems: "center",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  notificationText: {
    marginTop: 10,
    fontWeight: "400",
    fontSize: 16,
    marginRight: 25,
  },

  underline: {
    marginTop: 10,
    backgroundColor: "#979292",
    borderRadius: 10,
    height: 3,
    width: "15%",
    alignSelf: "center",
  },

  headingNotification: {
    marginTop: 15,
    fontWeight: "700",
    fontSize: 18,
    alignSelf: "center",
  },
});

export default Header;
