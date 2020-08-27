import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import styles from './teamScores.style';

import TeamScoresContainer from './TeamScoresContainer';

const TeamScores = ({
  suits,
  teamVs,
  openXModal,
  openTeamScoreModal
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
const mapStateToProps = ({ main: { teamVs } }) => ({
  teamVs,
});

export default connect(mapStateToProps)(TeamScores);
