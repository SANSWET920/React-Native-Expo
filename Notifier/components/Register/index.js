import React, { useState } from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";
import firebase from "firebase";
import StyledButton from "../StyledButton";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        return result.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            firebase
              .firestore()
              .collection("Users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                name,
                email,
              });
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={(name) => setName(name)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email.trim())}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="secondary"
          content={"Sign Up"}
          run={() => {
            onSignUp();
          }}
        />
      </View>
    </View>
  );
}