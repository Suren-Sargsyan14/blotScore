import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import styles from './teamX.style';

import { TextRegular } from '../../UI';

const TeamX = ({
  onPress,
  v,
  suits
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.teamX}
  >
    <TextRegular
      center
      style={styles.text}
    >
      {v.x}
    </TextRegular>
    {v.suit !== -1 && (
      <Image
        source={suits[v.suit]}
        style={styles.image}
      />
    )}

    <TextRegular
      center
      style={styles.text}
    >
      {v.quanche ? "-" : (v.sharp ? "+" : "")}
    </TextRegular>
  </TouchableOpacity>
);

export default TeamX;
