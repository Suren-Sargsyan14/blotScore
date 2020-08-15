import React, { useMemo } from 'react';
import { View } from 'react-native';

import styles from './teamScores.style';

import { TextRegular } from '../../UI';

const TeamFinalScore = ({ teamVs }) => {
  const score1 = useMemo(() => teamVs?.reduce((p, v) => p + v?.teamScore1, 0), [teamVs]);
  const score2 = useMemo(() => teamVs?.reduce((p, v) => p + v?.teamScore2, 0), [teamVs]);

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
