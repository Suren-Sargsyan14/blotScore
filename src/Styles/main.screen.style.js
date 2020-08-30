import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    height,
    justifyContent: "space-evenly",
  },
  buttons: {
    justifyContent: "space-around",
    flexDirection: "row",
  }
});
