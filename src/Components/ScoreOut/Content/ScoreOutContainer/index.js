import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { TextRegular } from '../../../../UI';
import { setCardCount } from '../../../../Actions/scoreOut';

import styles from './scoreOutContainer.style';

const ScoreOutContainer = ({
  cardCount,
  whichTeam,
  setCardCount,
  scoreOutName,
  selfCardCount,
  scoreOutCount,
  selectedValue,
  setSelectedValue,
}) => {
  const plus = () => {
    if(scoreOutCount !== null){
      if(selectedValue?.count >= scoreOutCount){
        return;
      }
      setSelectedValue({
        team: whichTeam,
        count: selectedValue?.count + 1,
      });
      return;
    }
    if(cardCount[0] - selfCardCount >= 0){
      setCardCount([cardCount[0] - selfCardCount, cardCount[1]]);
    }else if(cardCount[1] - selfCardCount >= 0){
      setCardCount([cardCount[0], cardCount[1] - selfCardCount]);
    }else{
      return;
    }
    setSelectedValue({
      team: whichTeam,
      count: selectedValue?.count + 1,
    });
  };
  const minus = () => {
    if(scoreOutCount !== null){
      if(selectedValue?.count === 0){
        return;
      }
      setSelectedValue({
        team: selectedValue?.count - 1 === 0 ? null : whichTeam,
        count: selectedValue?.count - 1,
      });
      return;
    }
    if(cardCount[0] + selfCardCount <= 8){
      setCardCount([cardCount[0] + selfCardCount, cardCount[1]]);
    }else if(cardCount[1] + selfCardCount <= 8){
      setCardCount([cardCount[0], cardCount[1] + selfCardCount]);
    }else{
      return;
    }
    setSelectedValue({
      team: selectedValue?.count - 1 === 0 ? null : whichTeam,
      count: selectedValue?.count - 1,
    });
  };

  return (selectedValue.team === null || selectedValue.team === whichTeam) && (
    <View style={styles.scoreOutContainer}>
      <Text style={styles.scoreOut}>{scoreOutName}</Text>
      <View style={styles.scoreOutContainer}>
        <TouchableOpacity onPress={minus}>
          <View style={styles.plusMinus}>
            <TextRegular style={styles.count}>-</TextRegular>
          </View>
        </TouchableOpacity>
        <TextRegular style={styles.count}>{selectedValue?.count}</TextRegular>
        <TouchableOpacity onPress={plus}>
          <View style={styles.plusMinus}>
            <TextRegular style={styles.count}>+</TextRegular>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = ({ scoreOut: { cardCount } }) => ({
  cardCount,
});

const mapDispatchToProps = dispatch => ({
  setCardCount: cardCount => dispatch(setCardCount(cardCount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreOutContainer);
