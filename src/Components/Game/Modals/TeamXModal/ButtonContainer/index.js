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

  const quancheSharp = (buttonType, type) => {
    if(buttonType){
      setSelectedTeam(type)
    }else{
      if(type){
        setIsQuanche(isQuanche === 1 ? 0 : 1);
      }else{
        setIsQuanche(isQuanche === 2 ? 0 : 2);
      }
    }

  };
  return (
    <View style={styles.buttonContainer}>
      <Buttons
        title={type ? teams[0] : "-"}
        active={type ? selectedTeam === 0 : !!isQuanche}
        onPress={() => quancheSharp(type, type ? 0 : true)}
      />
      <Buttons
        title={type ? teams[1] : "+"}
        active={type ? selectedTeam === 1 : isQuanche === 2}
        onPress={() => quancheSharp(type, type ? 1 : false)}
      />
    </View>
  );
};

const mapStateToProps = ({ main: { team1, team2 } }) => ({
  team1,
  team2,
});

export default connect(mapStateToProps)(ButtonContainer);
