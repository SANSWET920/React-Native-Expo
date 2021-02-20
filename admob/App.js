import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import {AppLoading} from 'expo'
import * as Font from 'expo-font' 
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';


export default class App extends React.Component{



  render(){
    return (
      <View style={styles.container}>

  <AdMobBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-8598728716633931/7118507734" // Test ID, Replace with your-admob-unit-id
 />

      </View>
    )         
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  }
})

