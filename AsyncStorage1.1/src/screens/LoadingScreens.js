import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import LottieView from "lottie-react-native";
import firebase from "firebase";
import Fire from "./Fire"


export default class LoadingScreen extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        })
    }


     render() {
        return (
             <View style={styles.container}>
          
<LottieView 

source={require("../images/13269-text-document.json")}

autoPlay={true}

loop={true}

ref={animation => {

    this.animation = animation;

}}

/>

          
             </View>
        );
     }
}


const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: "center",
         alignItems: "center"
     }
});