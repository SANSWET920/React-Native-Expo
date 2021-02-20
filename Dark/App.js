import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/HomeScreen"
import {Provider} from "react-redux"
import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import themeReducer from "./redux/themeReducer"


const store = createStore(combineReducers({ themeReducer }), applyMiddleware(thunk));

export default function App() {
  return (
    <View style={styles.container}>
    <Provider store={store}>
     <HomeScreen />
    </Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
