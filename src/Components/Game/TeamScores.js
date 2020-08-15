import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';

import styles from './teamScores.style';

import TeamScore from './TeamScore';
import TeamX from './TeamX';

const ScoreOut = ({
  teamScore1,
  teamScore2,
  teamVs,
  openTeamScoreModal,
  suits,
  openXModal
}) => (
  <View style={styles.container}>
    <View style={styles.scrollContainer}>
      <View style={styles.team}>
        <FlatList
          data={teamScore1}
          keyExtractor={(value, index) => (value + index).toString()}
          renderItem={({ item, index }) => (
            <TeamScore
              onPress={() => openTeamScoreModal(0, teamScore1, teamVs, index)}
              value={item}
            />
          )}
        />
      </View>
      <View style={styles.vs}>
        <FlatList
          data={teamVs}
          keyExtractor={(value, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TeamX
              onPress={() => openXModal(index)}
              suits={suits}
              v={item}
            />
          )}
        />
      </View>
      <View style={styles.team}>
        <FlatList
          data={teamScore2}
          keyExtractor={(value, index) => (value + index).toString()}
          renderItem={({ item, index }) => (
            <TeamScore
              onPress={() => openTeamScoreModal(1, teamScore2, teamVs, index)}
              value={item}
            />
          )}
        />
      </View>
    </View>
  </View>
);

export default ScoreOut;
