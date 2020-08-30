import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import styles from '../TeamScores/teamScores.style';

import { TextRegular } from '../../../UI';

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

const mapStateToProps = ({ main: { teamVs } }) => ({
  teamVs,
});

export default connect(mapStateToProps)(TeamFinalScore);
