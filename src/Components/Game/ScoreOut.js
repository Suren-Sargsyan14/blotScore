import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './scoreOut.style';

import { TextBold } from '../../UI';

const ScoreOut = ({
  onPress,
  title = 'Միավորներ Դրսից',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.openButton}
    >
      <TextBold center>
        {title}
      </TextBold>
    </TouchableOpacity>
  )
};

export default ScoreOut;
