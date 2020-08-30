import React  from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { TextRegular } from '../../../UI';

import { setWhichTeam } from '../../../Actions/main';

import TeamName from '../TeamName';

import style from '../../../Styles/game.screen.style';

const Heading = ({
  team1,
  team2,
  setWhichTeam,
  setModalNameVisible,
}) => {
  const openNameModal = team => {
    setModalNameVisible(true);
    setWhichTeam(team);
  };

  return (
    <View style={style.teamContainer}>
      <View style={style.teams}>
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
        <TeamName
          onPress={() => openNameModal(1)}
          title={team2}
        />
      </View>
    </View>
  );
};

const mapStateToProps = ({ main: { team1, team2 } }) => ({
  team1,
  team2,
});

const mapDispatchToProps = dispatch => ({
  setWhichTeam: whichTeam => dispatch(setWhichTeam(whichTeam)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Heading);
