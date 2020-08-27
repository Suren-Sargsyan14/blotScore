import { StyleSheet } from 'react-native';
import {COLORS} from "../../../UI";

export default StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    width: 200,
    height: 40,
    marginVertical: 15,
    fontSize: 18,
    textAlign: "center",
  },
  textInputXs: {
    borderBottomWidth: 1,
    width: 70,
    height: 40,
    marginVertical: 15,
    fontSize: 18,
    textAlign: "center",
    marginRight: 50,
  },
  suits: {
    flexDirection: "row",
  },
  suitImages: {
    width: 30,
    height: 30,
    margin: 5,
  },
  suitTouchable: {
    padding: 5,
    borderWidth: 1,
    marginHorizontal: 4
  },
  buttonContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  picker: {
    width: 110,
    height: 50
  },
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
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
