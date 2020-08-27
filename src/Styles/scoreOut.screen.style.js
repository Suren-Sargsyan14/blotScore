import {
  Dimensions,
  StyleSheet,
} from 'react-native';

import { COLORS } from '../UI';

const { height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    height
  },
  buttons: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    height: "20%",
  },
  scoreOutSubContainer: {
    justifyContent: "space-around",
    height: "70%",
  },
  openButton: {
    backgroundColor: COLORS.transparentWhite3,
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: COLORS.white,
  },
});
