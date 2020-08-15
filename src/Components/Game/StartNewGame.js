import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './startNewGame.style';

import { TextBold } from '../../UI';

const ScoreOut = ({
  onPress,
  title,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.openButton}
  >
    <TextBold center>
      {title}
    </TextBold>
  </TouchableOpacity>
);

export default ScoreOut;
