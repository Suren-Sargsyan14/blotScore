import { StyleSheet } from 'react-native';

import { COLORS } from '../../UI';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.transparentWhite8,
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,

  },
  text: {
    color: COLORS.black,
    fontSize: 20,
    textAlign: "center",
  }
});
