import React from 'react';
import { View } from 'react-native';

import styles from '../teamScores.style';

import TeamScore from './TeamScore';
import TeamX from './TeamX';

const TeamScoresContainer = ({
  openTeamScoreModal,
  value,
  suits,
  openXModal,
  index
}) => (
  <View style={styles.scrollContainer}>
    <View style={styles.team}>
      <TeamScore
        onPress={() => openTeamScoreModal(0, index)}
        value={value.teamScore1}
        align="left"
      />
    </View>
    <View style={styles.vs}>
      <TeamX
        onPress={() => openXModal(index)}
        suits={suits}
        v={value}
      />
    </View>
    <View style={styles.team}>
      <TeamScore
        onPress={() => openTeamScoreModal(1, index)}
        value={value.teamScore2}
        align="right"
      />
    </View>
  </View>
);

export default TeamScoresContainer;
