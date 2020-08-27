import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Buttons from '../Buttons';

import styles from '../../modals.style';

const ButtonContainer = ({
  type,
  team1,
  team2,
  isQuanche,
  setIsQuanche,
  selectedTeam,
  setSelectedTeam,
}) => {
  const teams = [team1, team2];

  const quancheSharp = (type) => {
    if(type){
      setIsQuanche(isQuanche === 1 ? 0 : 1);
    }else{
      setIsQuanche(isQuanche === 2 ? 0 : 2);
    }
  };
  return (
    <View style={styles.buttonContainer}>
      <Buttons
        title={type ? teams[0] : "-"}
        active={type ? selectedTeam === 0 : !!isQuanche}
        onPress={() => type ? setSelectedTeam(0) : quancheSharp(true)}
      />
      <Buttons
        title={type ? teams[1] : "+"}
        active={type ? selectedTeam === 1 : isQuanche === 2}
        onPress={type ? () => setSelectedTeam(1) : quancheSharp(false)}
      />
    </View>
  );
};
const mapStateToProps = ({ main: { team1, team2 } }) => ({
  team1,
  team2,
});

export default connect(mapStateToProps)(ButtonContainer);
