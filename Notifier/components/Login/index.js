import React, { useState } from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";
import firebase from "firebase";
import StyledButton from "../StyledButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result.user.email);
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
          type="primary"
          content={"Sign In"}
          run={() => {
            onSignIn();
          }}
        />
      </View>
    </View>
  );
}