import React, { useState } from "react";
import {
  TextInput,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const TeamNameModal = ({ modalVisible, setModalVisible, setTeam }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.centeredView}>
      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Գրեք թիմի նոր անունը</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => setInputValue(text)}
            />
            <TouchableOpacity
              style={[styles.openButton, { backgroundColor: "#2196F3" }]}
              onPress={() => {
                if (inputValue) {
                  setTeam(inputValue);
                }
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Հաստատել</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "rgba(255, 255, 255, .8)",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "rgba(0, 0, 0, .5)",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    width: 200,
    height: 40,
    marginVertical: 15,
    fontSize: 18,
    textAlign: "center",
  },
});

export default TeamNameModal;
