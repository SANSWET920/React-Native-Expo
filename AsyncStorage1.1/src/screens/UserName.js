import React from "react";
import {View,Text,StatusBar,ScrollView, StyleSheet,ActivityIndicator, Image, TouchableOpacity} from "react-native";
import { LinearGradient} from "expo-linear-gradient";
import Fire from './Fire';
import { Ionicons, Entypo } from '@expo/vector-icons';
import * as firebase from "firebase";



class Profile extends React.Component{
    
       state = {
         user: {},
         isLoading: true
       }

       async componentDidMount() {
         try {
           let res = await fetch("https://randomuser.me/api/?inc=name,picture,location&noinfo")
           let users = await res.json()

           this.setState({user: users.results[0]}, () => {
               this.setState({isLoading: false })
           })
         } catch (err) {
           console.log(err)
         }
       }
      
       state = {
        user: {},
        email: "",
        displayName: ""
    };
  
  componentDidMount() {
      const { email, displayName } = firebase.auth().currentUser;
  
      this.setState({ email, displayName });
  }
  
  
  
  signOutUser = () => {
    firebase.auth().signOut();
  };
  
  
  
    unsubscrible = null;
  
    componentDidMount() {
        const user = this.props.uid || Fire.shared.uid;
  
        this.unsubscrible = Fire.shared.firestore
            .collection("users")
            .doc(user)
            .onSnapshot(doc => {
                this.setState({ user: doc.data() });
            });
    }
  
    componentWillUnmount() {
        this.unsubscrible();
    }
  
  

    render(){
    
        return (
          

                 <Text>
                    {this.state.user.name}!</Text>
              

        );
      }
}

export default Profile;

const styles = StyleSheet.create({
   
})