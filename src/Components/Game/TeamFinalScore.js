import React from 'react';
import { View } from 'react-native';

import styles from './teamScores.style';

import { TextRegular } from '../../UI';

const TeamFinalScore = ({
  teamScore1,
  teamScore2
}) => {
  return (
    <View style={styles.scrollContainer}>
        <View style={styles.team}>
          <TextRegular
            center
            style={styles.text}
          >
            {teamScore1.reduce((p, v) => p + v, 0)}
          </TextRegular>
        </View>
        <View style={styles.vs} />
        <View style={styles.team}>
          <TextRegular
            center
            style={styles.text}
          >
            {teamScore2.reduce((p, v) => p + v, 0)}
          </TextRegular>
        </View>
    </View>
  )
};

export default TeamFinalScore;
