import React, { useState } from 'react';

import ScoreOutContainer from './ScoreOutContainer';

import { AppModal } from '../../UI';

const TeamScoreModal = ({
  modalVisible,
  setModalVisible,
  teams,
  whichTeam,
  setTeamScoreOut1,
  setTeamScoreOut2 ,
  suit
}) => {
  const [selectedLessValue, setSelectedLessValue] = useState("0");
  const [selectedBlotValue, setSelectedBlotValue] = useState("0");
  const [selectedFiftyValue, setSelectedFiftyValue] = useState("0");
  const [selectedHundredValue, setSelectedHundredValue] = useState("0");
  const [selected4PaperValue, setSelected4PaperValue] = useState("0");

  const ScoreOut = { setTeamScoreOut1, setTeamScoreOut2 };

  const applyModal = () => {
    let valueArray = [selectedLessValue * 20, selectedBlotValue * 20,
      selectedFiftyValue * 50, selectedHundredValue * 100];
    switch(selected4PaperValue){
      case "0":
        valueArray.push(0);
        break;
      case "9":
        valueArray.push(suit === 4 ? 0 : 140);
        break;
      case "J":
        valueArray.push(suit === 4 ? 100 : 200);
        break;
      case "T":
        valueArray.push(suit === 4 ? 190 : 110);
        break;
      default:
        valueArray.push(100);
        break;
    }
    ScoreOut["setTeamScoreOut" + (whichTeam + 1)](valueArray);
    setSelectedLessValue("0");
    setSelectedBlotValue("0");
    setSelectedFiftyValue("0");
    setSelectedHundredValue("0");
    setSelected4PaperValue("0");
    setModalVisible(!modalVisible);
  };

  return (
    <AppModal
      setModalVisible={setModalVisible}
      modalVisible={modalVisible}
      title={`Գրեք թէ քանի՞ միավոր ունի "${teams[whichTeam]}" թիմը դրսից`}
      onPress={applyModal}
    >
      <ScoreOutContainer
          ScoreOutName="Թերզ"
          ScoreOutCount={[0, 1, 2, 3, 4]}
          selectedValue={selectedLessValue}
          setSelectedValue={setSelectedLessValue}
      />
      <ScoreOutContainer
          ScoreOutName="Բլոտ"
          ScoreOutCount={[0, 1]}
          selectedValue={selectedBlotValue}
          setSelectedValue={setSelectedBlotValue}
      />
      <ScoreOutContainer
          ScoreOutName="Հիսուն"
          ScoreOutCount={[0, 1, 2, 3, 4]}
          selectedValue={selectedFiftyValue}
          setSelectedValue={setSelectedFiftyValue}
      />
      <ScoreOutContainer
          ScoreOutName="Հարյուր"
          ScoreOutCount={[0, 1, 2]}
          selectedValue={selectedHundredValue}
          setSelectedValue={setSelectedHundredValue}
      />
      <ScoreOutContainer
          ScoreOutName="4 Թուղթ"
          ScoreOutCount={[0, 9, 10, "J", "Q", "K", "T"]}
          selectedValue={selected4PaperValue}
          setSelectedValue={setSelected4PaperValue}
      />
    </AppModal>
  );
};


export default TeamScoreModal;
