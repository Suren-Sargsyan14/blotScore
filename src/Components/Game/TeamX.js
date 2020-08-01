import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import styles from './teamX.style';

import { TextRegular } from '../../UI';

const TeamX = ({
  onPress,
  v,
  suits
}) => {
  return (
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
      <Image
        source={suits[v.suit]}
        style={[styles.image, {display: (v.suit === -1 ? "none" : "flex")}]}
      />
      <TextRegular
        center
        style={styles.text}
      >
        {v.quanche ? "-" : (v.sharp ? "+" : "")}
      </TextRegular>
    </TouchableOpacity>
  )
};

export default TeamX;
