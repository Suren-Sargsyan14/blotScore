import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';

import { AppModal } from '../../UI';

const TeamNameModal = ({ modalVisible, setModalVisible, setTeam }) => {
  const [inputValue, setInputValue] = useState("");

  const applyModal = () => {
    if (inputValue) {
      setTeam(inputValue);
    }
    setModalVisible(!modalVisible);
  };

  return (
    <AppModal
      setModalVisible={setModalVisible}
      modalVisible={modalVisible}
      title="Գրեք թիմի նոր անունը"
      onPress={applyModal}
    >
      <TextInput
        style={styles.textInput}
        onChangeText={text => setInputValue(text)}
      />
    </AppModal>
  );
};

const styles = StyleSheet.create({
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
