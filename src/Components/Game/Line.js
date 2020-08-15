import React from 'react';
import { View, StyleSheet } from 'react-native';

import { COLORS } from '../../UI';

const ScoreOut = () => (
  <View style={styles.hr} />
);

const styles = StyleSheet.create({
  hr: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
  },
});

export default ScoreOut;
