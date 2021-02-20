import React from "react";
import {View,Text,StatusBar,ScrollView, StyleSheet,ActivityIndicator, Image, TouchableOpacity} from "react-native";
import { LinearGradient} from "expo-linear-gradient";
import Fire from './Fire';
import { Ionicons, Entypo } from '@expo/vector-icons';
import * as firebase from "firebase";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CourseList from '../screens/Chapters'
import Header from "../screens/Header";
import Stats from "../screens/Stats";
import About from "../screens/About";


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
      if (this.state.isloading) {
        return (
          <View style={[styles.gs, styles.container]}>
            <StatusBar barStyle="light-content" />

            <ActivityIndicator size="large" />
          </View>
        )
      }
        return(
          
                 <Text style={{ color:"#f58084",
                 fontFamily:"Medium",
                 fontSize:12 }}>{this.state.user.email}</Text>

        );
      }
}

export default Profile;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#222222"
      
   },
   gs: {
      alignItems: "center",
      justifyContent: "center"
   },
        
    avatarContainer: {
        
        borderRadius: 32,
        shadowOffset: { height: 3, width: 1},
        shadowColor: "#222",
        shadowOpacity: 0.5,
        right: 0,
        top: 50,
        
    },

    avatar: {
      width: 90,
      height: 90,
      borderRadius: 32,
      shadowColor: "#000",
shadowOffset: {
width: 0,
height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
  },
  gs: {
      alignItems: "center",
      justifyContent: "center"
   },
        
  check: {
      backgroundColor: "#FFFFFF",
      borderRadius: 100,
      width: 25,
      height: 25,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      
      elevation: 24,
      position: "absolute",
      zIndex: 1,
      right: -16,
      bottom: 16
  },
  imageContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 16,
      shadowColor: "#000",
shadowOffset: {
width: 0,
height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,

  },
  container2: {
    paddingVertical:20,
    paddingHorizontal:25,
    marginBottom: 1,
    backgroundColor: "#333",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    borderRadius: 16,
    marginTop: -48
 },
 statContainer: {
   zIndex:1,
     alignItems: "center",        
     justifyContent: "center",
     flex:1
 },
 statNumber: {
     fontSize: 20,
     fontWeight: "600",
     color: "#FFFFFF"
 },
 stat: {
     fontSize:11,
     fontFamily: "Bold",
     letterSpacing: 1,
     textTransform: "uppercase",
     color: "#888",
     marginTop: 6
 },
 divider: {
     borderLeftWidth:1,
     borderRightWidth:1,
     borderColor: "#888"
 }
})