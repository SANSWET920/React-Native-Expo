import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textInputContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  textInput: {
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    margin: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    width: "50%",
  },
  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingTop: 20,
    fontSize: 15,
  },
  textUser: {
    fontWeight: "bold",
    fontSize: 20,
  },
  textToken: {
    color: "red",
  },
  textDescription: {
    paddingTop: 10,
    color: "grey",
  },
});
export default styles;