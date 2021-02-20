import React from 'react'
import {View,Text,ImageBackground,TouchableOpacity,Image, StatusBar,StyleSheet} from 'react-native'
import {ScrollView,TextInput} from 'react-native-gesture-handler'
import CourseList from '../screens/CourseList'
import firebase from "firebase";
import Fire from './Fire';


export default class Home extends React.Component{

   state = {
       user: {}
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
        return(
          <View>
 <Image 
          style={ styles.avatar}
           source ={
              this.state.user.avatar
                   ? { uri: this.state.user.avatar }
                   : require("../images/profile.png")
          }
          />

  <Text style={{
                       paddingHorizontal:20,
                       fontSize:35,
                       paddingTop:10,
                       fontFamily:"Bold",
                       color:"#FFF"
                   }}>
                      Welcome {this.state.user.name}
                   </Text>
          </View>
         
          
        )
    }
}



const styles = StyleSheet.create({
    avatarContainer: {
        borderColor:"#f58084",
        borderRadius: 50,
        shadowColor: "#151734",
        shadowOpacity: 0.4,
        top:-40,
        left:15
        
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 68
    }
})