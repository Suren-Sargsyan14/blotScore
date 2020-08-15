import React, { useMemo } from 'react';
import { View } from 'react-native';

import styles from './teamScores.style';

import { TextRegular } from '../../UI';

const TeamFinalScore = ({
  teamScore1,
  teamScore2
}) => {
  const score1 = useMemo(() => teamScore1.reduce((p, v) => p + v), [teamScore1]);
  const score2 = useMemo(() => teamScore2.reduce((p, v) => p + v), [teamScore1]);
  return (
    <View style={styles.scrollContainer}>
      <View style={styles.team}>
        <TextRegular
          center
          style={styles.text}
        >
          {score1}
        </TextRegular>
      </View>
      <View style={styles.vs} />
      <View style={styles.team}>
        <TextRegular
          center
          style={styles.text}
        >
          {score2}
        </TextRegular>
      </View>
    </View>
  )
};

export default TeamFinalScore;
