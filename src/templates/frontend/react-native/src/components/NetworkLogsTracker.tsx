import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React, { FC } from "react";
import { useNetwork } from "@context/NetworkProvider";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@gorhom/bottom-sheet";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NetworkLogger from "react-native-network-logger";

const NetworkLogs: FC = () => {
  const { showNetworkLogs, setShowNetworkLogs } = useNetwork();
  return (
    <Modal
      visible={showNetworkLogs}
      transparent
      animationType="slide"
      onRequestClose={() => setShowNetworkLogs(false)}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setShowNetworkLogs(false)}
        >
          <MaterialCommunityIcons name="close" size={40} color={"#fff"} />
        </TouchableOpacity>
        <View style={styles.networkLoggerContainer}>
          <NetworkLogger />
        </View>
      </View>
    </Modal>
  );
};

const NetworkLogsTracker = () => {
  const { showNetworkLogs, setShowNetworkLogs } = useNetwork();
  return (
    <>
      <TouchableOpacity
        onPress={() => setShowNetworkLogs(!showNetworkLogs)}
        style={{
          position: "absolute",
          bottom: 80,
          right: 40,
          zIndex: 100000,
          backgroundColor: "#006FAE",
          borderRadius: 25,
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <MaterialCommunityIcons
            name="access-point-network"
            size={20}
            color={"#fff"}
          />
        </View>
      </TouchableOpacity>
      <NetworkLogs />
    </>
  );
};

export default NetworkLogsTracker;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    position: "absolute",
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 99999,
  },
  closeButton: {
    padding: 16,
  },
  networkLoggerContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 2,
    borderRadius: 8,
    overflow: "hidden",
  },
});
