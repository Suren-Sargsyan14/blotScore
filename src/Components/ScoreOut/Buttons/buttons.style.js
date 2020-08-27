import { StyleSheet } from 'react-native';

import { COLORS } from '../../../UI';

export default StyleSheet.create({
  text: {
    color: COLORS.white,
    fontSize: 20,
  },
  textContainer: {
    borderWidth: 1,
    borderColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: "flex-start",
  }
});
