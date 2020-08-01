import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet
} from "react-native";

import mathFunction from './Math';

import { AppModal } from "../../UI";

const TeamScoreModal = ({
  modalVisible, setModalVisible,
  setTeamScore1, setTeamScore2,
  teamScore1, teamScore2,
  whichTeam,
  teamVs, setTeamVs,
  teamScoreOut1, teamScoreOut2, teams
}) => {
  const [inputValue, setInputValue] = useState("0");

  return (
    <AppModal
      setModalVisible={setModalVisible}
      modalVisible={modalVisible}
      title={`Գրեք "${teams[whichTeam]}" թիմի միավորների քանակը`}
      onPress={() => mathFunction({modalVisible, setModalVisible,
        setTeamScore1, setTeamScore2,
        teamScore1, teamScore2,
        whichTeam,
        teamVs, setTeamVs,
        teamScoreOut1, teamScoreOut2,
        inputValue, setInputValue })}
    >
      <TextInput
        keyboardType='numeric'
        style={styles.textInput}
        defaultValue={inputValue}
        autoFocus
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

export default TeamScoreModal;
