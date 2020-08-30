import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../UI';

export default StyleSheet.create({
  scoreOutContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  scoreOut: {
    fontSize: 18,
    width: "30%",
    color: "white"
  },
  plusMinus: {
    borderWidth: 1,
    borderColor: COLORS.transparentWhite8,
    alignSelf: "flex-start",
  },
  count: {
    color: COLORS.white,
    alignSelf: "flex-start",
    paddingVertical: 15,
    paddingHorizontal: 25,
    fontSize: 18,
  }
});
