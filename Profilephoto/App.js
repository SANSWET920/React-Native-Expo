import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from '@react-navigation/native';

import HomeScreen from "./components/HomeScreen";

import SearchTabNavigator from "./components/search/SearchTabNavigator";

import * as firebase from 'firebase'

//add your configuration here 
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(firebaseConfig);

const App = StackNavigator({

  HomeScreen: { screen: HomeScreen },
  SearchTabNavigator: {
    screen: SearchTabNavigator
  }
}, {
    initialRouteName: 'HomeScreen'
  })


export default App 
