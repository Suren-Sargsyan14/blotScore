import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './teamScore.style';

import { TextRegular } from '../../UI';

const TeamScore = ({
  align,
  onPress,
  value,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <TextRegular
        style={[styles.text, {textAlign: align}]}
      >
        {value === 0 ? "—" : value}
      </TextRegular>
    </TouchableOpacity>
  )
};

export default TeamScore;
