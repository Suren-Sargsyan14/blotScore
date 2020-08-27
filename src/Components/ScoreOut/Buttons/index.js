import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { COLORS, TextRegular } from '../../../UI';

import styles from './buttons.style';

const Buttons = ({
  title,
  active,
  onPress
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.textContainer, { backgroundColor: active ? COLORS.black : "transparent" }]}>
      <TextRegular style={styles.text}>{title}</TextRegular>
    </View>
  </TouchableOpacity>
);
export default Buttons;
