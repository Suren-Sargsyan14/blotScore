import React from 'react';
import { View } from 'react-native';

import styles from './teamScores.style';

import { TextRegular } from '../../UI';

const TeamFinalScore = ({
  teamVs
}) => {
  return (
    <View style={styles.finalScoreContainer}>
        <View style={styles.team}>
          <TextRegular
            center
            style={styles.text}
          >
            {teamVs.reduce((p, v) => p + v.teamScore1, 0)}
          </TextRegular>
        </View>
        <View style={styles.vs} />
        <View style={styles.team}>
          <TextRegular
            center
            style={styles.text}
          >
            {teamVs.reduce((p, v) => p + v.teamScore2, 0)}
          </TextRegular>
        </View>
    </View>
  )
};

export default TeamFinalScore;
