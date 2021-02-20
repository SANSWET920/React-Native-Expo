import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LogBox } from "react-native";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

import Auth from "./components/Auth";
import Register from "./components/Register";
import Login from "./components/Login";
import Loader from "./components/Loader";
import Dashboard from "./components/Dashboard";

LogBox.ignoreLogs(["Setting a timer"]);

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Stack = createStackNavigator();
export default function App() {
  const [user, setUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setUser(null);
        setUserLoggedIn(false);
      } else {
        setUser(user);
        setUserLoggedIn(true);
      }
      setLoaded(true);
    });
    return () => {};
  }, [user]);
  if (!loaded) {
    return <Loader />;
  }
  if (user) {
    return <Dashboard user={user} />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}