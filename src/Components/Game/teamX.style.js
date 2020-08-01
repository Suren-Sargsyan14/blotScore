import { StyleSheet } from 'react-native';

import { COLORS } from '../../UI';

export default StyleSheet.create({
  teamX: {
    backgroundColor: COLORS.transparentWhite3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    color: COLORS.white,
    fontSize: 23,
    marginVertical: 10,
  },
  image: {
    width: 30,
    height: 30,
  }
});
