import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../../UI';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: Math.floor(height / 2),
  },
  scrollContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  finalScoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  teams: {
    width: "40%",
  },
  vs: {
    width: "20%",
  },
  text: {
    color: COLORS.white,
    fontSize: 23,
    marginVertical: 10
  },
});
