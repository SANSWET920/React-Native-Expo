import React from "react";
import {View,Text,StatusBar,ScrollView, StyleSheet,ActivityIndicator, Image,Share, TouchableOpacity} from "react-native";
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
  
    onShare = async () => {
      try {
        const result = await Share.share({
          message:
            'https://asyncstorage.000webhostapp.com/download.html',
        });
  
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };
  

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
          <View style={styles.container}>
                <ScrollView >
                <LinearGradient colors={["#f97878","#ea3372"]} start={0,0} end={[1,1]} > 
             <View style={{ marginHorizontal: 32, paddingVertical: 45}}>
             
             <View  style={{flexDirection: "row", justifyContent: "space-between"}}>

              <TouchableOpacity    onPress={()=>this.props.navigation.navigate("Home")}>
              <Ionicons name="md-arrow-back" color={"#FFFFFF"} size={32} />
              </TouchableOpacity>
            
              <TouchableOpacity  onPress={()=>this.props.navigation.navigate("EditProfile")}>
              <Entypo name="dots-three-vertical" color={"#FFFFFF"} size={24} />
              </TouchableOpacity>
              
             </View> 

             <View style={styles.imageContainer}>
               <View>
                   <View style={styles.check} >
                       <Ionicons   style={{position: "absolute", alignItems: "center", justifyContent: "center", top: 3, left: 4}} name="md-checkmark" size={20} color={"#ea3372"} />
                   </View>
       

         <Image 
           style={ styles.avatar}
            source ={
               this.state.user.avatar
                    ? { uri: this.state.user.avatar }
                    : require("../images/profile.png")
           }
           />
             </View>
             </View>

             <View  style={[styles.gs, {marginVertical: 16}]}>
                 <Text  style={{
                       paddingHorizontal:20,
                       fontSize:25,
                       fontFamily:"Bold",
                       color:"#ffffff"
                           }}>
                    {this.state.user.name}!</Text>
                 <Text style={{color: "rgba(255,255,255,0.6)", paddingHorizontal:20,
                       
                       fontFamily:"Bold", fontSize: 13, letterSpacing:1 }}>{this.state.user.email}</Text>
             </View>

         </View>
     </LinearGradient>
     <View style={styles.container2}>
             <View style={styles.statContainer}>
             <TouchableOpacity   onPress={()=>this.props.navigation.navigate("Menu")} >
             <Image source={require('../images/report.png')} 
            style={{width:25, height:25}}
             />
             </TouchableOpacity>
           
                  <Text style={styles.stat}>Report</Text>
             </View>
             <View style={[styles.statContainer, styles.divider]}>
             <TouchableOpacity    onPress={()=>this.props.navigation.navigate("feedback")} >
             <Image source={require('../images/feedback2.png')} 
            style={{width:30, height:25}}
             />
             </TouchableOpacity>
                  <Text style={styles.stat}>feedback</Text>
             </View>
             <View style={styles.statContainer}>
             <TouchableOpacity     onPress={this.signOutUser}>
             <Image source={require('../images/log.png')} 
            style={{width:25, height:25}}
             />
             </TouchableOpacity>
            
                  <Text style={styles.stat}>Logout</Text>
             </View>
        </View>
                <About />
                 <View style={{bottom:20}}>
                            <CourseList
                                onPress={()=>this.props.navigation.navigate("VideoPage")}
                                img={require('../images/T.png')}
                                title="Terms and conditions"
                                bg="#fdddf3"
                            />
                             <CourseList
                                onPress={()=>this.props.navigation.navigate("Privacyandpolicy")}
                                img={require('../images/p1.png')} 
                                title="Privacy and policy"
                                bg="#fef8e3"
                            />
                             <CourseList
                                onPress={()=>this.props.navigation.navigate("Helpandsupport")}
                                img={require('../images/h.png')}
                                title="Help & support"
                                bg="#fcf2ff"
                            />
                             <CourseList
                                onPress={this.onShare}
                                img={require('../images/i.png')}
                                title="invite friends"
                                bg="#fff0ee"
                            />
                        

                    </View>
                    
                 </ScrollView>
          </View>

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