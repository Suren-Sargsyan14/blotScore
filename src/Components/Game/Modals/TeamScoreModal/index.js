import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';

import mathFunction from '../../../../assets/Math';

import { AppModal } from '../../../../UI';
import {
  setTeam1,
  setTeam2,
  setTeamVs,
  setWhichTeam,
  setTeamScoreOut2,
  setTeamScoreOut1,
  setModalScoreVisible,
} from '../../../../Actions/main';
import {
  setSelectedLessValue,
  setSelectedBlotValue,
  setSelectedFiftyValue,
  setSelected4PaperValue,
  setSelectedHundredValue,
} from '../../../../Actions/scoreOut';

import styles from '../modals.style';

const TeamScoreModal = ({
  team1,
  team2,
  teamVs,
  setTeamVs,
  whichTeam,
  teamScoreOut1,
  teamScoreOut2,
  setTeamScoreOut1,
  setTeamScoreOut2,
  modalScoreVisible,
  setModalScoreVisible,
  setSelectedLessValue,
  setSelectedBlotValue,
  setSelectedFiftyValue,
  setSelected4PaperValue,
  setSelectedHundredValue,
}) => {

  let teams = [team1, team2];
  const [inputValue, setInputValue] = useState("0");

  return (
    <AppModal
      setModalVisible={setModalScoreVisible}
      modalVisible={modalScoreVisible}
      title={`Գրեք "${teams[whichTeam]}" թիմի միավորների քանակը`}
      onPress={() => mathFunction({
        teamVs,
        setTeamVs,
        whichTeam,
        inputValue,
        modalScoreVisible,
        setInputValue,
        teamScoreOut1,
        teamScoreOut2,
        setModalScoreVisible,
        setTeamScoreOut1,
        setTeamScoreOut2,
        setSelectedLessValue,
        setSelectedBlotValue,
        setSelectedFiftyValue,
        setSelected4PaperValue,
        setSelectedHundredValue,
      })}
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

const mapStateToProps = ({ main: { whichTeam, team1, team2, teamVs, teamScoreOut1, teamScoreOut2, modalScoreVisible } }) => ({
  team1,
  team2,
  teamVs,
  whichTeam,
  teamScoreOut1,
  teamScoreOut2,
  modalScoreVisible
});
const mapDispatchToProps = dispatch => ({
  setTeam1: team1 => dispatch(setTeam1(team1)),
  setTeam2: team2 => dispatch(setTeam2(team2)),
  setTeamVs: teamVs => dispatch(setTeamVs(teamVs)),
  setWhichTeam: whichTeam => dispatch(setWhichTeam(whichTeam)),
  setTeamScoreOut1: teamScoreOut1 => dispatch(setTeamScoreOut1(teamScoreOut1)),
  setTeamScoreOut2: teamScoreOut2 => dispatch(setTeamScoreOut2(teamScoreOut2)),
  setModalScoreVisible: modalScoreVisible => dispatch(setModalScoreVisible(modalScoreVisible)),
  setSelectedLessValue: selectedLessValue => dispatch(setSelectedLessValue(selectedLessValue)),
  setSelectedBlotValue: selectedBlotValue => dispatch(setSelectedBlotValue(selectedBlotValue)),
  setSelectedFiftyValue: selectedFiftyValue => dispatch(setSelectedFiftyValue(selectedFiftyValue)),
  setSelected4PaperValue: selected4PaperValue => dispatch(setSelected4PaperValue(selected4PaperValue)),
  setSelectedHundredValue: selectedHundredValue => dispatch(setSelectedHundredValue(selectedHundredValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamScoreModal);
