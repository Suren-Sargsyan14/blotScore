import React from 'react';
import { View, FlatList } from 'react-native';

import styles from './teamScores.style';

import TeamScoresContainer from './TeamScoresContainer';

const TeamScores = ({
  teamVs,
  openTeamScoreModal,
  suits,
  openXModal
}) => (
  <View style={styles.container}>
    <FlatList
      data={teamVs}
      keyExtractor={(value, index) => (value + index).toString()}
      renderItem={({ item, index }) => (
        <TeamScoresContainer
          openTeamScoreModal={openTeamScoreModal}
          value={item}
          suits={suits}
          openXModal={openXModal}
          index={index}
        />
      )}
    />
  </View>
);

export default TeamScores;
