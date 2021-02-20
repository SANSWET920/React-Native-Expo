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


  interstitialDidClose() {
    AdMobInterstitial.requestAdAsync((error) => error && log(error));
   }

  componentDidMount() {
    AdMobRewarded.setTestDeviceID('EMULATOR');
    AdMobRewarded.setAdUnitID('ca-app-pub-9979840777486735/5594037066');

    AdMobRewarded.addEventListener('rewarded', reward =>
      console.log('AdMobRewarded => rewarded', reward),
    );
    AdMobRewarded.addEventListener('adLoaded', () =>
      console.log('AdMobRewarded => adLoaded'),
    );
    AdMobRewarded.addEventListener('adFailedToLoad', error =>
      console.warn(error),
    );
    AdMobRewarded.addEventListener('adOpened', () =>
      console.log('AdMobRewarded => adOpened'),
    );
    AdMobRewarded.addEventListener('videoStarted', () =>
      console.log('AdMobRewarded => videoStarted'),
    );
    AdMobRewarded.addEventListener('adClosed', () => {
      console.log('AdMobRewarded => adClosed');
      AdMobRewarded.requestAdAsync().catch(error => console.warn(error));
    });
    AdMobRewarded.addEventListener('adLeftApplication', () =>
      console.log('AdMobRewarded => adLeftApplication'),
    );

    AdMobRewarded.requestAdAsync().catch(error => console.warn(error));

    AdMobInterstitial.setTestDeviceID('EMULATOR');
    AdMobInterstitial.setAdUnitID('ca-app-pub-9979840777486735/9550212493');

    AdMobInterstitial.addEventListener('adLoaded', () =>
      console.log('AdMobInterstitial adLoaded'),
    );
    AdMobInterstitial.addEventListener('adFailedToLoad', error =>
      console.warn(error),
    );
    AdMobInterstitial.addEventListener('adOpened', () =>
      console.log('AdMobInterstitial => adOpened'),
    );
    AdMobInterstitial.addEventListener('adClosed', () => {
      console.log('AdMobInterstitial => adClosed');
      AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
    });
    AdMobInterstitial.addEventListener('adLeftApplication', () =>
      console.log('AdMobInterstitial => adLeftApplication'),
    );

    AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
  }

  componentWillUnmount() {
    AdMobRewarded.removeAllListeners();
    AdMobInterstitial.removeAllListeners();
  }

  showRewarded() {
    AdMobRewarded.showAdAsync().catch(error => console.warn(error));

  }

  showInterstitial() {
   AdMobInterstitial.showAdAsync().catch(error => console.warn(error))
  }
  
  render(){
    return (
      <View style={styles.container}>
<AdMobBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-9979840777486735/1748299003" // Test ID, Replace with your-admob-unit-id

  onDidFailToReceiveAdWithError={this.bannerError} />
  <AdMobBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-9979840777486735/1748299003" // Test ID, Replace with your-admob-unit-id
  onDidFailToReceiveAdWithError={this.bannerError} />
<Button
      title="Show Interstitial and preload next"
      onPress={this.showInterstitial}
    />
    <Button
      title="Show Interstitial and preload next"
      onPress={this.showRewarded}
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

