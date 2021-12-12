import { StyleSheet } from "react-native";
export default StyleSheet.create({
  button: {
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 17,
    fontFamily: "Lato-Light",
    textTransform: "uppercase",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  btnContainer: {
    marginLeft: 10,
    flex: 0.3
  },
  order: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
