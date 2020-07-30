import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import { AppContainer } from '../UI';

import TeamNameModal from '../Components/TeamNameModal';
import TeamScoreModal from '../Components/TeamScoreModal';
import TeamXModal from '../Components/TeamXModal';
import TeamScoreOutModal from '../Components/TeamScoreOutModal';

import { GameTitle, ScoreOut } from '../Components';

import style from '../Styles/game.screen.style';

import backgroundImage from '../assets/images/ZLohmG.jpg';
import clubs from '../assets/images/clubs.png';
import diamonds from '../assets/images/diamonds.png';
import hearts from '../assets/images/hearts.png';
import spades from '../assets/images/spades.png';
import High from '../assets/images/High.png';

const { height, width } = Dimensions.get('window');

const Game = () => {
  const [whichTeam, setWhichTeam] = useState(0);
  const [team1, setTeam1] = useState('Մենք');
  const [team2, setTeam2] = useState('Դուք');
  const [modalNameVisible, setModalNameVisible] = useState(false);
  const [modalScoreVisible, setModalScoreVisible] = useState(false);
  const [modalScoreOutVisible, setModalScoreOutVisible] = useState(false);
  const [modalXVisible, setModalXVisible] = useState(false);
  const [teamScore1, setTeamScore1] = useState([0]);
  const [teamVs, setTeamVs] = useState([{ team: -1, x: 0, suit: -1, kaput: false, quanche: false, sharp: false }]);
  const [teamScore2, setTeamScore2] = useState([0]);
  const [teamScoreOut1, setTeamScoreOut1] = useState([]);
  const [teamScoreOut2, setTeamScoreOut2] = useState([]);

  const suits = [clubs, hearts, spades, diamonds, High];

  const openScoreOutModal = team => {
    setModalScoreOutVisible(true);
    setWhichTeam(team);
  }

  return (
    <AppContainer
      translucent
      barStyle="light-bar"
      imageBackground={backgroundImage}
    >
        <ScrollView>
          <GameTitle title="Բլոտի Հաշիվ" />
          <View style={style.teamContainer}>
            <View style={style.teams}>
              <ScoreOut onPress={() => openScoreOutModal(0)} />
              <TouchableOpacity onPress={() => {
                setModalNameVisible(true);
                setWhichTeam(0);
              }}>
                <Text style={style.teamText}>{team1}</Text>
              </TouchableOpacity>
              {teamScore1.map((v, i) => (
                <TouchableOpacity key={i} onPress={() => {
                  if (teamVs[teamVs.length - 1].x === 0 || i !== teamScore1.length - 1) {
                    return;
                  }
                  setModalScoreVisible(true);
                  setWhichTeam(0);
                }}>
                  <Text style={style.teamText}>{v}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={style.vs}>
              <Text style={style.vsText}>vs</Text>
              {teamVs.map((v, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    if (i !== teamVs.length - 1) {
                      return;
                    }
                    setModalXVisible(true);
                    setWhichTeam(0);
                  }}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, .3)",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Text style={style.vsText}>{v.x}</Text>
                  <Image source={suits[v.suit]}
                         style={[{ width: 30, height: 30 }, { display: (v.suit === -1 ? "none" : "flex") }]}/>
                  <Text style={style.vsText}>{v.quanche ? "-" : v.sharp ? "+" : ""}</Text>
                </TouchableOpacity>

              ))}
            </View>
            <View style={style.teams}>
              <ScoreOut onPress={() => openScoreOutModal(1)} />
              <TouchableOpacity
                onPress={() => {
                  setWhichTeam(1);
                  setModalNameVisible(true);
                }}
              >
                <Text style={style.teamText}>{team2}</Text>
              </TouchableOpacity>
              {teamScore2.map((v, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    if (teamVs[teamVs.length - 1].x === 0 || i !== teamScore2.length - 1) {
                      return;
                    }
                    setWhichTeam(1);
                    setModalScoreVisible(true);
                  }}
                >
                  <Text style={style.teamText}>{v}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={style.hr1} />
          <View style={style.teamContainer1}>
            <View style={style.teams}>
              <Text style={style.teamText}>{teamScore1.reduce((p, v) => p + v, 0)}</Text>
            </View>
            <View style={style.vs} />
            <View style={style.teams}>
              <Text style={style.teamText}>{teamScore2.reduce((p, v) => p + v, 0)}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={style.openButton}
            onPress={() => {
              setTeam1('Մենք');
              setTeam2('Դուք');
              setTeamScore1([0]);
              setTeamVs([{ team: -1, x: 0, suit: -1, kaput: false, quanche: false, sharp: false }]);
              setTeamScore2([0]);
              setTeamScoreOut1([]);
              setTeamScoreOut2([]);
            }}
          >
            <Text style={style.scoreOut}>Սկսել նոր խաղ</Text>
          </TouchableOpacity>
        </ScrollView>
      <TeamNameModal
        modalVisible={modalNameVisible}
        setModalVisible={setModalNameVisible}
        setTeam={whichTeam ? setTeam2 : setTeam1}
      />
      <TeamScoreModal
        modalVisible={modalScoreVisible}
        setModalVisible={setModalScoreVisible}
        setTeamScore1={setTeamScore1}
        setTeamScore2={setTeamScore2}
        teamScore1={teamScore1}
        teamScore2={teamScore2}
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
