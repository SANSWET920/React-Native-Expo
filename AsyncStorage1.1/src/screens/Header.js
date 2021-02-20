import React from "react";
import { View, Text, StyleSheet ,Image} from "react-native";
import { Ionicons, Entypo } from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";
import Fire from './Fire';
import * as firebase from "firebase";
import { color } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Header extends React.Component {


    
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
  
    
    render() {
        return (
            <LinearGradient colors={["#f97878","#ea3372"]} start={0,0} end={[1,1]} > 
             <View style={{ marginHorizontal: 32, paddingVertical: 45}}>
             <View  style={{flexDirection: "row", justifyContent: "space-between"}}>

              <TouchableOpacity    onPress={()=>this.props.navigation.navigate("Home")}>
              <Ionicons name="md-arrow-back" color={"#FFFFFF"} size={32} />
              </TouchableOpacity>
            
              <TouchableOpacity>
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
        );
    }
}

const styles = StyleSheet.create({
    
 
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

    }
});