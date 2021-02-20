import React from 'react';
import {Ionicons } from "@expo/vector-icons" 
import { StyleSheet, Text, View , Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ top: 30  }}>Open up App.js to start working on your appbsdbjnb!</Text>
      <Image source={require("./assets/icon.png")} 
          style={{ width: 160, height: 120, top: 50}}  />


<TouchableWithoutFeedback style={{ top: 100}}>
          
<Ionicons

name="ios-grid"

size={40}

color="black"

   />

</TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
