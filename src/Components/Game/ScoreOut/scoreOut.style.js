import { StyleSheet } from 'react-native';

import { COLORS } from '../../../UI';

export default StyleSheet.create({
  openButton: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    elevation: 2,
    borderRadius: 5,
    marginHorizontal: 20,
    backgroundColor: COLORS.transparentWhite8,
  },
  image: {
    width: 40,
    height: 40,
  },
});
