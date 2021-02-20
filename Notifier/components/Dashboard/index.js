import React, { useEffect, useState, useRef } from "react";
import { Text, View, Button, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

import firebase from "firebase/app";
import "firebase/firestore";

import StyledButton from "../StyledButton";
import DismissKeyboard from "../DismissKeyboard";

import * as Notifications from "expo-notifications";

import Constants from "expo-constants";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Dashboard({ user }) {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [messageTitle, setMessageTitle] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [messageTo, setMessageTo] = useState("");

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      setExpoPushToken(token);
    });

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      }
    );

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  const onLogout = () => {
    firebase.auth().signOut();
  };

  const registerForPushNotificationsAsync = async () => {
    let token;
    if (Constants.isDevice) {
      const {
        status: existingStatus,
      } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }
    if (token) {
      firebase
        .firestore()
        .collection("Users")
        .doc(firebase.auth().currentUser.uid)
        .set({ token }, { merge: true });
    }
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    return token;
  };
  const sendPushNotification = async (
    messageTitle,
    messageBody,
    messageToken
  ) => {
    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: messageToken,
        sound: "default",
        body: messageBody,
        title: messageTitle,
      }),
    })
      .then(() => {
        console.warn("Success");
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textUser}>Welcome {user.displayName} !</Text>

          <Text style={styles.text}>Your Expo Token</Text>
          <Text style={styles.textToken} selectable={true}>
            {expoPushToken}
          </Text>
          <Text style={styles.textDescription}>
            Share it with your friends and chat Anonmously
          </Text>
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Expo Token of a User"
            onChangeText={(token) => {
              setMessageTo(token.trim());
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Title"
            onChangeText={(title) => {
              setMessageTitle(title.trim());
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Body"
            onChangeText={(bodyMsg) => {
              setMessageBody(bodyMsg.trim());
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <StyledButton
            type="primary"
            content={"Send Notification"}
            run={async () => {
              await sendPushNotification(messageTitle, messageBody, messageTo);
            }}
          />
          <StyledButton
            type="secondary"
            content={"Log Out"}
            run={() => {
              onLogout();
            }}
          />
        </View>
      </View>
    </DismissKeyboard>
  );
}