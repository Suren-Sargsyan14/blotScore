import { StyleSheet } from 'react-native';

import { COLORS } from '../UI';

export default StyleSheet.create({
  teamContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
  },
  teams: {
    width: "40%",
  },
  vs: {
    marginTop: 60,
    width: "20%",
  },
  vsText: {
    color: COLORS.white,
    fontSize: 23,
    marginVertical: 10,
  },
});
