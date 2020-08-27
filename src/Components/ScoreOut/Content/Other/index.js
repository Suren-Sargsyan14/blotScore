import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import {
  setSelectedLessValue,
  setSelectedFiftyValue,
  setSelectedHundredValue,
} from '../../../../Actions/scoreOut';

import ScoreOutContainer from '../ScoreOutContainer';

const Content = ({
  whichTeam,
  selectedLessValue,
  selectedFiftyValue,
  selected4PaperValue,
  selectedHundredValue,
  setSelectedLessValue,
  setSelectedFiftyValue,
  setSelectedHundredValue,
}) => {

  const scoreOutArray = [
    {
      cardCount: 3,
      scoreOutCount: null,
      scoreOutName: "Թերզ",
      selectedValue: selectedLessValue,
      setSelectedValue: setSelectedLessValue,
    },
    {
      cardCount: 4,
      scoreOutCount: null,
      scoreOutName: "Հիսուն",
      selectedValue: selectedFiftyValue,
      setSelectedValue: setSelectedFiftyValue,
    },
    {
      cardCount: 5,
      scoreOutCount: null,
      scoreOutName: "Հարյուր",
      selectedValue: selectedHundredValue,
      setSelectedValue: setSelectedHundredValue,
    },
  ];
  return (
    (scoreOutArray.some(v => v.selectedValue.team === whichTeam) || selected4PaperValue.team === whichTeam) ||
    (scoreOutArray.every(v => v.selectedValue.team === null) && selected4PaperValue.team === null)
  ) && (
    <FlatList
      data={scoreOutArray}
      keyExtractor={(value, index) => (value + index).toString()}
      renderItem={({ item }) => (
        <ScoreOutContainer
          whichTeam={whichTeam}
          selfCardCount={item.cardCount}
          scoreOutName={item.scoreOutName}
          scoreOutCount={item.scoreOutCount}
          selectedValue={item.selectedValue}
          setSelectedValue={item.setSelectedValue}
        />
      )}
    />
  );
};

const mapStateToProps = ({
  scoreOut: {
   whichTeam,
   selectedLessValue,
   selectedFiftyValue,
   selected4PaperValue,
   selectedHundredValue,
  },
}) => ({
  whichTeam,
  selectedLessValue,
  selectedFiftyValue,
  selected4PaperValue,
  selectedHundredValue,
});

const mapDispatchToProps = dispatch => ({
  setSelectedLessValue: selectedLessValue => dispatch(setSelectedLessValue(selectedLessValue)),
  setSelectedFiftyValue: selectedFiftyValue => dispatch(setSelectedFiftyValue(selectedFiftyValue)),
  setSelectedHundredValue: selectedHundredValue => dispatch(setSelectedHundredValue(selectedHundredValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
