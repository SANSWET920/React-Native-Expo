
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Animated, PanResponder } from 'react-native';
import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import PsMFaceDetector from './src/PsMFaceDetector';
import PsMIndexing from './src/PsMIndexing';
import PsMPrivatePage from './src/PsMPrivatePage';
import PsMLogIn from './src/PsMLogIn';
import objectDetection from './src/objectDetection';
import { StatusBar } from 'expo-status-bar';


import {Provider} from "react-redux"
import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import themeReducer from "./redux/themeReducer"


const store = createStore(combineReducers({ themeReducer }), applyMiddleware(thunk));

const AppNavigator = createStackNavigator({
  PsMLogIn: {
    screen: PsMLogIn
  },

  PsMIndexing: {
    screen: PsMIndexing
  },
  PsMPrivatePage: {
    screen: PsMPrivatePage
  },
  objectDetection: {
    screen: objectDetection
  }
}, {
  initialRouteName: "PsMLogIn",
  headerMode: "none"
});


const Navi = createAppContainer
(AppNavigator);

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="PsMLogIn">
    //     <Stack.Screen name="PsMLogIn" component={PsMLogIn} />
        /* <Stack.Screen name="PsMFaceDetector" component={PsMFaceDetector} /> */
        /* <Stack.Screen name="PsMIndexing" component={PsMIndexing} />
        <Stack.Screen name="PsMPrivatePage" component={PsMPrivatePage} /> */
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Navi />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
