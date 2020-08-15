import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { Picker } from '@react-native-community/picker';

const TeamScoreModal = ({
  ScoreOutName,
  ScoreOutCount,
  selectedValue,
  setSelectedValue
}) => (
  <View style={styles.scoreOutContainer}>
    <Text style={styles.scoreOut}>{ScoreOutName} - </Text>
    <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    >
      {ScoreOutCount.map(v => <Picker.Item key={v} label={v.toString()} value={v.toString()} />)}
    </Picker>
  </View>
);

const styles = StyleSheet.create({
  picker: {
    width: 110,
    height: 50,
  },
  scoreOutContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  scoreOut: {
    fontSize: 18,
    width: "50%",
  },
});

export default TeamScoreModal;
