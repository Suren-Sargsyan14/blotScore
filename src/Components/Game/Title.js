import React from 'react';
import { View } from 'react-native';

import { TextRegular } from '../../UI';

import styles from './title.style';

const Title = ({ title }) => (
  <View style={styles.header}>
    <TextRegular style={styles.headerText}>{title}</TextRegular>
  </View>
);

export default Title;
