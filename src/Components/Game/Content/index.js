import React from 'react';
import { connect } from 'react-redux';

import {
  setWhichTeam,
  setModalXVisible,
  setModalNameVisible,
  setModalScoreVisible,
} from '../../../Actions/main';

import {
  Line,
  Heading,
  ScoreOut,
  TeamScores,
  StartNewGame,
  TeamFinalScore
} from '../../../Components';

import suits from '../../../assets/Suits';

const Content = ({
  teamVs,
  navigation,
  setWhichTeam,
  setModalXVisible,
  setModalNameVisible,
  setModalScoreVisible
}) => {
  const openTeamScoreModal = (team, index) => {
    if (teamVs[teamVs.length - 1].x === 0 || index !== teamVs.length - 1) {
      return;
    }
    setModalScoreVisible(true);
    setWhichTeam(team);
  };

  const openXModal = (index) => {
    if (index !== teamVs.length - 1) {
      return;
    }
    setModalXVisible(true);
    setWhichTeam(0);
  };

  return (
    <>
      <ScoreOut onPress={() => navigation.navigate("ScoreOut")} />
      <Heading setModalNameVisible={setModalNameVisible} />
      <TeamScores
        suits={suits}
        openXModal={openXModal}
        openTeamScoreModal={openTeamScoreModal}
      />
      <Line />
      <TeamFinalScore />
      <StartNewGame navigation={navigation} />
    </>
  );
};

const mapStateToProps = ({ main: { teamVs } }) => ({
  teamVs,
});

const mapDispatchToProps = dispatch => ({
  setWhichTeam: whichTeam => dispatch(setWhichTeam(whichTeam)),
  setModalXVisible: modalXVisible => dispatch(setModalXVisible(modalXVisible)),
  setModalNameVisible: modalNameVisible => dispatch(setModalNameVisible(modalNameVisible)),
  setModalScoreVisible: modalScoreVisible => dispatch(setModalScoreVisible(modalScoreVisible)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
