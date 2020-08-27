import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  View,
  TextInput,
} from 'react-native';

import { AppModal } from '../../../../UI';
import {
  setTeamVs,
  setModalXVisible,
} from '../../../../Actions/main';

import Suits from './Suits';
import Buttons from './Buttons';
import ButtonContainer from './ButtonContainer';

import styles from '../modals.style';

const TeamXModal = ({
  teamVs,
  setTeamVs,
  modalXVisible,
  setModalXVisible
}) => {
  const [selectedTeam, setSelectedTeam] = useState(0);
  const [inputValue, setInputValue] = useState("8");
  const [selectedSuit, setSelectedSuit] = useState(-1);
  const [isKaput, setIsKaput] = useState(false);
  const [isQuanche, setIsQuanche] = useState(0);

  const applyModal = () => {
    if (inputValue) {
      teamVs.pop();
      setTeamVs([...teamVs, {
        team: selectedTeam,
        x: inputValue,
        suit: selectedSuit,
        kaput: isKaput,
        quanche: isQuanche === 1,
        sharp: isQuanche === 2,
        teamScore1: 0,
        teamScore2: 0
      }]);
      setIsQuanche(0);
      setIsKaput(false);
      setInputValue("8");
      setSelectedTeam(0);
      setSelectedSuit(-1);
    }
    setModalXVisible(!modalXVisible);
  };
  const onKaputPress = async () => {
    setInputValue(!isKaput && inputValue < 25 ? "25" : inputValue);
    await setIsKaput(!isKaput);
  };
  return (
    <AppModal
      setModalVisible={setModalXVisible}
      modalVisible={modalXVisible}
      title="Ընտրեք թիմը և գրեք թե ինչ են խոսացել"
      onPress={applyModal}
    >
      <ButtonContainer
        type
        isQuanche={isQuanche}
        setIsQuanche={setIsQuanche}
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
      />

      <View style={styles.inputContainer}>
        <TextInput
          autoFocus
          keyboardType='numeric'
          defaultValue={inputValue}
          style={styles.textInputXs}
          onChangeText={text => setInputValue(text)}
        />
        <Buttons
          title="Կապուտ"
          active={isKaput}
          onPress={onKaputPress}
        />
      </View>

      <Suits
        selectedSuit={selectedSuit}
        setSelectedSuit={setSelectedSuit}
      />

      <ButtonContainer
        type={false}
        isQuanche={isQuanche}
        setIsQuanche={setIsQuanche}
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
      />
    </AppModal>
  );
};
const mapStateToProps = ({ main: { teamVs, modalXVisible } }) => ({
  teamVs,
  modalXVisible,
});

const mapDispatchToProps = dispatch => ({
  setTeamVs: teamVs => dispatch(setTeamVs(teamVs)),
  setModalXVisible: modalXVisible => dispatch(setModalXVisible(modalXVisible)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamXModal);
