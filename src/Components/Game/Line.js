import React from 'react';
import { View, StyleSheet } from 'react-native';

const ScoreOut = () => {
  return (
    <View style={styles.hr} />
  )
};

const styles = StyleSheet.create({
  hr: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
});

export default ScoreOut;
