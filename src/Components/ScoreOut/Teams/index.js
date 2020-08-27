import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Buttons from '../Buttons';

import { setWhichTeam } from '../../../Actions/scoreOut';

import styles from '../../../Styles/scoreOut.screen.style';

const Teams = ({
  team1,
  team2,
  whichTeam,
  setWhichTeam,
}) => (
  <View style={styles.buttons}>
    <Buttons
      title={team1}
      active={whichTeam === 0}
      onPress={() => setWhichTeam(0)}
    />
    <Buttons
      title={team2}
      active={whichTeam === 1}
      onPress={() => setWhichTeam(1)}
    />
  </View>
);

const mapStateToProps = ({
  main: { team1, team2 },
  scoreOut: { whichTeam },
}) => ({
  team1,
  team2,
  whichTeam,
});

const mapDispatchToProps = dispatch => ({
  setWhichTeam: whichTeam => dispatch(setWhichTeam(whichTeam)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
