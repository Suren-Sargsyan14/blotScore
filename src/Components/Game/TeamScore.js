import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './teamScore.style';

import { TextRegular } from '../../UI';

const TeamScore = ({
  onPress,
  value,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <TextRegular
        center
        style={styles.text}
      >
        {value}
      </TextRegular>
    </TouchableOpacity>
  )
};

export default TeamScore;
