import React from "react";
import { View, Text,Image, StyleSheet,TouchableOpacity, LayoutAnimation } from "react-native";
import {Ionicons } from "@expo/vector-icons" 
import firebase from "firebase";

export default class Settings extends React.Component {

    
  static navigationOptions = {

    header: null
  };
    state = {
        email: "",
        displayName: ""
    }

    componentDidMount() {
        const {email,displayName} = firebase.auth().currentUser;

        this.setState({ email, displayName });

    }

    signOutUser = () => {
        firebase.auth().signOut();
    };


     render() {
         LayoutAnimation.easeInEaseOut();

        return (
             <View style={styles.container}>
             
            <Image style={styles.Image1}

                 source={require("../assets/logo1.png")}

                 style={{ width: 230, height:90, top:-20,left:0}}

             />

              <Text style={{ top:0, fontWeight: "bold",left: 10,fontSize: 25}}>Take a Look...</Text>

                   <Text style={{ top: 30, left: 5, fontWeight:"bold", color:"black", fontSize: 20}}>{this.state.displayName}!</Text>
                
                <Text style={{ top: 70, fontWeight: "bold"}} >Warm Greetings from the Admins of</Text>
                <Text style={{ top: 90, fontWeight: "bold" }}>Memes Baazaar to the Users</Text>
                <Text style={{ top:110,fontWeight:"bold"}}>Go To the MemberShip Login and Sign-in</Text>
                <Text style={{ top: 130, fontWeight: "bold"}}>Using the Same email and Password</Text>
                <Text style={{ top: 150, fontWeight: "bold"}}>Used for Sign-up to become a member of</Text>
                <Text style={{ top: 170, fontWeight: "bold"}}>Memes Baazaar</Text>

                   <TouchableOpacity style={{ marginTop: 220, left: 10 }} onPress={this.signOutUser}>
                      <Text style={{fontWeight: "bold"}}>Logout</Text>
                  </TouchableOpacity>

                <Ionicons
 
                  name="ios-log-out"

                  size={30}

                  color="blue"

                  style={{left: -30, top: -25}}

               />
        
             </View>
        );
     }
}


const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: "center",
         alignItems: "center",
         
     }

});