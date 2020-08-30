import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';

import styles from './startNewGame.style';

import { TextBold } from '../../../UI';
import {
  setTeam1,
  setTeam2,
  setTeamVs,
  setTeamScoreOut1,
  setTeamScoreOut2
} from '../../../Actions/main';

const StartNewGame = ({
  setTeam1,
  setTeam2,
  setTeamVs,
  navigation,
  setTeamScoreOut1,
  setTeamScoreOut2
}) => {
  const startNewGame = () => {
    setTeam1('Մենք');
    setTeam2('Դուք');
    setTeamVs([{ team: -1, x: 0, suit: -1, kaput: false, quanche: false, sharp: false, teamScore1: 0, teamScore2: 0 }]);
    setTeamScoreOut1([]);
    setTeamScoreOut2([]);
    navigation.navigate("Main")
  };

  return (
    <TouchableOpacity
      onPress={startNewGame}
      style={styles.openButton}
    >
      <TextBold center>
        Սկսել նոր խաղ
      </TextBold>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = dispatch => ({
  setTeam1: team1 => dispatch(setTeam1(team1)),
  setTeam2: team2 => dispatch(setTeam2(team2)),
  setTeamVs: teamVs => dispatch(setTeamVs(teamVs)),
  setTeamScoreOut1: teamScoreOut1 => dispatch(setTeamScoreOut1(teamScoreOut1)),
  setTeamScoreOut2: teamScoreOut2 => dispatch(setTeamScoreOut2(teamScoreOut2)),
});

export default connect(null, mapDispatchToProps)(StartNewGame);
