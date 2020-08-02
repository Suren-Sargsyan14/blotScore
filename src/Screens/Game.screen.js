import React, { useState } from 'react';
import {
  View,
} from 'react-native';

import { AppContainer, TextRegular } from '../UI';

import TeamNameModal from '../Components/TeamNameModal';
import TeamScoreModal from '../Components/TeamScoreModal';
import TeamXModal from '../Components/TeamXModal';
import TeamScoreOutModal from '../Components/TeamScoreOutModal';

import {GameTitle, ScoreOut, TeamName, TeamScores, Line, TeamFinalScore, StartNewGame } from '../Components';

import style from '../Styles/game.screen.style';

import backgroundImage from '../assets/images/ZLohmG.jpg';
import clubs from '../assets/images/clubs.png';
import diamonds from '../assets/images/diamonds.png';
import hearts from '../assets/images/hearts.png';
import spades from '../assets/images/spades.png';
import High from '../assets/images/High.png';

const Game = () => {
  const [whichTeam, setWhichTeam] = useState(0);
  const [team1, setTeam1] = useState('Մենք');
  const [team2, setTeam2] = useState('Դուք');
  const [modalNameVisible, setModalNameVisible] = useState(false);
  const [modalScoreVisible, setModalScoreVisible] = useState(false);
  const [modalScoreOutVisible, setModalScoreOutVisible] = useState(false);
  const [modalXVisible, setModalXVisible] = useState(false);
  const [teamVs, setTeamVs] = useState([{ team: -1, x: 0, suit: -1, kaput: false, quanche: false, sharp: false, teamScore1: 0, teamScore2: 0 }]);
  const [teamScoreOut1, setTeamScoreOut1] = useState([]);
  const [teamScoreOut2, setTeamScoreOut2] = useState([]);

  const suits = [clubs, hearts, spades, diamonds, High];

  const openScoreOutModal = team => {
    setModalScoreOutVisible(true);
    setWhichTeam(team);
  };
  const openNameModal = team => {
    setModalNameVisible(true);
    setWhichTeam(team);
  };
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
  const startNewGame = () => {
    setTeam1('Մենք');
    setTeam2('Դուք');
    setTeamVs([{ team: -1, x: 0, suit: -1, kaput: false, quanche: false, sharp: false, teamScore1: 0, teamScore2: 0 }]);
    setTeamScoreOut1([]);
    setTeamScoreOut2([]);
  };

  return (
    <AppContainer
      translucent
      barStyle="light-bar"
      imageBackground={backgroundImage}
    >
        <View>
          <GameTitle title="Բլոտի Հաշիվ" />
          <View style={style.teamContainer}>
            <View style={style.teams}>
              <ScoreOut onPress={() => openScoreOutModal(0)} />
              <TeamName
                onPress={() => openNameModal(0)}
                title={team1}
              />
            </View>
            <View style={style.vs}>
              <TextRegular
                center
                style={style.vsText}
              >
                vs
              </TextRegular>
            </View>
            <View style={style.teams}>
              <ScoreOut onPress={() => openScoreOutModal(1)} />
              <TeamName
                onPress={() => openNameModal(1)}
                title={team2}
              />
            </View>
          </View>
          <TeamScores
            teamVs={teamVs}
            openTeamScoreModal={openTeamScoreModal}
            openXModal={openXModal}
            suits={suits}
          />
          <Line />
          <TeamFinalScore
            teamVs={teamVs}
          />
          <StartNewGame
            onPress={() => startNewGame()}
            title="Սկսել նոր խաղ"
          />
        </View>

      <TeamNameModal
        modalVisible={modalNameVisible}
        setModalVisible={setModalNameVisible}
        setTeam={whichTeam ? setTeam2 : setTeam1}
      />
      <TeamScoreModal
        modalVisible={modalScoreVisible}
        setModalVisible={setModalScoreVisible}
        whichTeam={whichTeam}
        teamVs={teamVs}
        setTeamVs={setTeamVs}
        teamScoreOut1={teamScoreOut1}
        teamScoreOut2={teamScoreOut2}
        teams={[team1, team2]}
      />
      <TeamScoreOutModal
        modalVisible={modalScoreOutVisible}
        setModalVisible={setModalScoreOutVisible}
        whichTeam={whichTeam}
        teams={[team1, team2]}
        setTeamScoreOut1={setTeamScoreOut1}
        setTeamScoreOut2={setTeamScoreOut2}
        suit={teamVs[teamVs.length - 1].suit}
      />
      <TeamXModal
        modalVisible={modalXVisible}
        setModalVisible={setModalXVisible}
        teams={[team1, team2]}
        setTeamVs={setTeamVs}
        teamVs={teamVs}
      />
    </AppContainer>
  );
};

export default Game;
