import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../UI';

export default StyleSheet.create({
  plusMinus: {
    borderWidth: 1,
    borderColor: COLORS.transparentWhite8,
    alignSelf: "flex-start",
    marginHorizontal: 2,
  },
  count: {
    color: COLORS.white,
    alignSelf: "flex-start",
    paddingVertical: 15,
    paddingHorizontal: 25,
    fontSize: 18,
  },
  scoreOut: {
    fontSize: 18,
    width: "30%",
    color: "white",
    textAlign: "center",
    marginVertical: 10,
  },
  paperContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
