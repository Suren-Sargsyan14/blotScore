import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import {
  setCardCount,
  setSelected4PaperValue,
} from '../../../../Actions/scoreOut';

import { TextRegular } from '../../../../UI';

import styles from './paper4.style';

const Paper4 = ({
  whichTeam,
  cardCount,
  setCardCount,
  selectedLessValue,
  selectedFiftyValue,
  selected4PaperValue,
  selectedHundredValue,
  setSelected4PaperValue,
}) => {

  const scoreOutArray = ["9", "10", "J", "Q", "K", "A"];
  const selectedTeamArray = [
    selectedLessValue,
    selectedFiftyValue,
    selected4PaperValue,
    selectedHundredValue,
  ];
  const onPress = (item) => {
    if(!selected4PaperValue?.count.includes(item)){
      if(cardCount[0] - 4 >= 0){
        setCardCount([cardCount[0] - 4, cardCount[1]]);
      }else if(cardCount[1] - 4 >= 0){
        setCardCount([cardCount[0], cardCount[1] - 4]);
      }else{
        return;
      }
      setSelected4PaperValue({
        team: whichTeam,
        count: [...selected4PaperValue?.count, item],
      });
    }else{
      if(cardCount[0] + 4 <= 8){
        setCardCount([cardCount[0] + 4, cardCount[1]]);
      }else if(cardCount[1] + 4 <= 8){
        setCardCount([cardCount[0], cardCount[1] + 4]);
      }else{
        return;
      }
      let newArray = selected4PaperValue.count;
      newArray.splice(newArray.indexOf(item), 1);
      setSelected4PaperValue({
        team: whichTeam,
        count: [...newArray],
      });
    }
  };
  return (selectedTeamArray.some(v => v.team === whichTeam) || selectedTeamArray.every(v => v.team === null)) && (
    <View style={styles.paperContainer}>
      <Text style={styles.scoreOut}>4 Թուղթ</Text>
      <FlatList
        horizontal
        data={scoreOutArray}
        keyExtractor={(value, index) => (value + index).toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPress(item)}>
            <View style={[styles.plusMinus, { borderColor: selected4PaperValue.count.includes(item) ? "red" : "white"}]}>
              <TextRegular style={styles.count}>{item}</TextRegular>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const mapStateToProps = ({ scoreOut: {
  whichTeam,
  cardCount,
  selectedLessValue,
  selectedFiftyValue,
  selected4PaperValue,
  selectedHundredValue,
} }) => ({
  whichTeam,
  cardCount,
  selectedLessValue,
  selectedFiftyValue,
  selected4PaperValue,
  selectedHundredValue,
});

const mapDispatchToProps = dispatch => ({
  setSelected4PaperValue: selected4PaperValue => dispatch(setSelected4PaperValue(selected4PaperValue)),
  setCardCount: cardCount => dispatch(setCardCount(cardCount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Paper4);
