import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

export default function Auth({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome to Push Notifier!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Register"}
          run={() => {
            navigation.navigate("Register");
          }}
        />
        <StyledButton
          type="secondary"
          content={"Login"}
          run={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
    </View>
  );
}