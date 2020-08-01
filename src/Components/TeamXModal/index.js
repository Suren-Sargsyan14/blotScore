import React, { useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button,
} from "react-native";

import { Picker } from '@react-native-community/picker';

import styles from './style';

import clubs from '../../assets/images/clubs.png';
import diamonds from '../../assets/images/diamonds.png';
import hearts from '../../assets/images/hearts.png';
import spades from '../../assets/images/spades.png';
import High from '../../assets/images/High.png';

import { AppModal } from "../../UI";

const TeamXModal = ({ modalVisible, setModalVisible, teams, setTeamVs, teamVs }) => {
  const [inputValue, setInputValue] = useState("8");
  const [selectedValue, setSelectedValue] = useState("0");
  const [selectedSuit, setSelectedSuit] = useState(-1);
  const [isKaput, setIsKaput] = useState(false);
  const [isQuanche, setIsQuanche] = useState("0");
  const suits = [clubs, hearts, spades, diamonds, High];
  const applyModal = () => {
    if (inputValue) {
      teamVs.pop();
      setTeamVs([...teamVs, {
        team: selectedValue,
        x: inputValue,
        suit: selectedSuit,
        kaput: isKaput,
        quanche: isQuanche === "1",
        sharp: isQuanche === "2",
      }]);
      setIsQuanche("0");
      setIsKaput(false);
      setInputValue("8");
      setSelectedValue("0");
      setSelectedSuit(-1);
    }
    setModalVisible(!modalVisible);
  };

  return (
    <AppModal
      setModalVisible={setModalVisible}
      modalVisible={modalVisible}
      title="Ընտրեք թիմը և գրեք թե ինչ են խոսացել"
      onPress={() => applyModal()}
    >
            <View style={styles.blueButton}>
              <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label={teams[0]} value="0" />
                <Picker.Item label={teams[1]} value="1" />
              </Picker>
              <Button
                title="Կապուտ"
                onPress={async () => {
                  setInputValue("25");
                  await setIsKaput(!isKaput);
                  console.log(isKaput);
                }}
                color={isKaput ? "red" : ""}
              />
            </View>

            <View style={styles.suits}>
              {suits.map((v, i) => (
                <TouchableOpacity
                  key={i}
                  style={[styles.suitTouchable, { borderWidth: (i === selectedSuit ? 1 : 0) }]}
                  onPress={() => setSelectedSuit(i)}
                >
                  <Image source={v} style={styles.suitImages}/>
                </TouchableOpacity>))
              }
            </View>
            <TextInput style={styles.textInput} defaultValue={inputValue} autoFocus
                       onChangeText={text => setInputValue(text)} keyboardType='numeric'/>
            <Picker
              selectedValue={isQuanche}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setIsQuanche(itemValue)}
            >
              <Picker.Item label="........." value="0" />
              <Picker.Item label="Քուանշ" value="1" />
              <Picker.Item label="Սուր" value="2" />
            </Picker>
    </AppModal>
  );
};

export default TeamXModal;
