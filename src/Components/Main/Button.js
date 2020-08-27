import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { COLORS, TextRegular } from '../../UI';

import styles from './button.style';

const Button = ({
  onPress,
  text1,
  text2
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <TextRegular center style={styles.text}>{text1}</TextRegular>
      <TextRegular center style={styles.text}>{text2}</TextRegular>
    </View>
  </TouchableOpacity>
);

export default Button;
