import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './teamName.style';

import { TextBold } from '../../UI';

const TeamName = ({
  onPress,
  title,
}) => (
  <TouchableOpacity
    onPress={onPress}
    center
  >
    <TextBold
      center
      style={styles.teamText}
    >
      {title}
    </TextBold>
  </TouchableOpacity>
);

export default TeamName;
