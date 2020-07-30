import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  hr1: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  teamContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
  },
  teamContainer1: {
    flexDirection: "row",
    justifyContent: "center",
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
    color: "white",
    textAlign: "center",
    fontSize: 23,
    marginVertical: 10,
  },
  teamText: {
    color: "white",
    fontSize: 23,
    textAlign: "center",
    marginVertical: 10,
  },
  scoreOut: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  openButton: {
    padding: 10,
    elevation: 2,
    borderRadius: 5,
    marginHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255, .8)",
  },
});
