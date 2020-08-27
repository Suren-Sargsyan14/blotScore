import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TextInput } from 'react-native';

import { AppModal } from '../../../../UI';
import {
  setTeam1,
  setTeam2,
  setModalNameVisible,
} from '../../../../Actions/main';

import styles from '../modals.style';

const TeamNameModal = ({
  setTeam1,
  setTeam2,
  whichTeam,
  modalNameVisible,
  setModalNameVisible
}) => {
  const [inputValue, setInputValue] = useState("");

  const applyModal = () => {
    if (inputValue) {
      whichTeam ? setTeam2(inputValue) : setTeam1(inputValue);
    }
    setModalNameVisible(!modalNameVisible);
  };

  return (
    <AppModal
      setModalVisible={setModalNameVisible}
      modalVisible={modalNameVisible}
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

const mapStateToProps = ({ main: { whichTeam, modalNameVisible } }) => ({
  whichTeam,
  modalNameVisible,
});
const mapDispatchToProps = dispatch => ({
  setTeam1: team1 => dispatch(setTeam1(team1)),
  setTeam2: team2 => dispatch(setTeam2(team2)),
  setModalNameVisible: modalNameVisible => dispatch(setModalNameVisible(modalNameVisible)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamNameModal);
