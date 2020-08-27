import React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { TextBold } from '../../../UI';
import { setTeamScoreOut1, setTeamScoreOut2 } from '../../../Actions/main';

import styles from '../../../Styles/scoreOut.screen.style';

const ApplyScoreOut = ({
  teamVs,
  whichTeam,
  navigation,
  setTeamScoreOut1,
  setTeamScoreOut2,
  selectedLessValue,
  selectedBlotValue,
  selectedFiftyValue,
  selected4PaperValue,
  selectedHundredValue,
}) => {
  const suit = teamVs[teamVs.length - 1].suit,
        setScoreOut = { setTeamScoreOut1, setTeamScoreOut2 };

  const applyScoreOut = () => {
    let valueArray = [
      selectedLessValue.count * 20,
      selectedBlotValue.count * 20,
      selectedFiftyValue.count * 50,
      selectedHundredValue.count * 100
    ];
    selected4PaperValue.count.forEach(v => {
      switch(v){
        case "0":
          valueArray.push(0);
          break;
        case "9":
          valueArray.push(suit === 4 ? 0 : 140);
          break;
        case "J":
          valueArray.push(suit === 4 ? 100 : 200);
          break;
        case "A":
          valueArray.push(suit === 4 ? 190 : 110);
          break;
        default:
          valueArray.push(100);
          break;
      }
    });

    setScoreOut["setTeamScoreOut" + (whichTeam + 1)](valueArray);
    navigation.goBack();
  };
  return (
    <TouchableOpacity
      style={[styles.openButton]}
      onPress={applyScoreOut}
    >
      <TextBold
        center
        style={styles.textStyle}
      >
        Հաստատել
      </TextBold>
    </TouchableOpacity>
  );
};

const mapStateToProps = ({
  main: { teamVs },
  scoreOut: {
    whichTeam,
    selectedLessValue,
    selectedBlotValue,
    selectedFiftyValue,
    selected4PaperValue,
    selectedHundredValue,
  },
}) => ({
  teamVs,
  whichTeam,
  selectedLessValue,
  selectedBlotValue,
  selectedFiftyValue,
  selected4PaperValue,
  selectedHundredValue,
});

const mapDispatchToProps = dispatch => ({
  setTeamScoreOut1: teamScoreOut1 => dispatch(setTeamScoreOut1(teamScoreOut1)),
  setTeamScoreOut2: teamScoreOut2 => dispatch(setTeamScoreOut2(teamScoreOut2)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplyScoreOut);
