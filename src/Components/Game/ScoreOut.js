import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import ScoreIcon from '../../assets/images/score.png';

import styles from './scoreOut.style';

const ScoreOut = ({
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.openButton}
    >
      <Image
        source={ScoreIcon}
        style={styles.image}
      />
    </TouchableOpacity>
  )
};

export default ScoreOut;
