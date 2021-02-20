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
            
           <ImageBackground
            source={require('../images/Home.png')}
            style={{width:"100%",height:"100%"}}
           >


               <ScrollView>
              
                   <View style={{
                       width:"100%",
                       alignItems:"flex-end",
                       paddingHorizontal:20
                   }}>
                            
      
                
                <TouchableOpacity  style={{
                           paddingHorizontal:10,
                           paddingVertical:12,
                           borderRadius:10,
                           marginTop: 30,
                           zIndex: 1,
                           backgroundColor:"#d1a0a7"
                       }}      onPress={()=>this.props.navigation.navigate('Profile')}>
            
                           <Image
                            source={require('../images/hum.png')}
                            style={{height:15,width:20}}
                           />
                
</TouchableOpacity>



                   </View>

                   <View style={styles.avatarContainer}>
         <Image 
           style={ styles.avatar}
            source ={
               this.state.user.avatar
                    ? { uri: this.state.user.avatar }
                    : require("../images/profile.png")
           }
           />

        </View>
                   <Text style={{
                       paddingHorizontal:20,
                       fontSize:35,
                       paddingTop:10,
                       fontFamily:"Bold",
                       color:"#FFF"
                   }}>
                      Welcome {this.state.user.name}
                   </Text>

                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       backgroundColor:"#FFF",
                       padding:10,
                       borderRadius:12,
                       marginHorizontal:20,
                       marginTop:20
                   }}>
                       <TextInput
                            placeholder="Make notes to remember later!"
                            placeholderTextColor="#345c74"
                            style={{
                                fontFamily:"Bold",
                                fontSize:12,
                                width:280,
                                paddingHorizontal:12
                            }}
                       />
                       <Image
                            source={require('../images/sear.png')}
                            style={{height:14,width:14}}
                       />
                   </View>
                   <View style={{
                       flexDirection:"row",
                       backgroundColor:"#FFF2F2",
                       marginTop:15,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:20,
                               fontFamily:"Bold",
                               width:250,
                               paddingRight:100 
                           }}>
                               Start typing new Stuff
                           </Text>
                           <TouchableOpacity
                                onPress={()=>this.props.navigation.navigate('Cources')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#f58084",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"#FFF",
                                        fontFamily:"Bold",
                                        fontSize:12
                                    }}>Classic content</Text>  
                                    <Image
                                        source={require('../images/a3.png')}
                                        style={{marginLeft:20,width:8,height:8}}
                                    />
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('../images/undraw.png')}
                            style={{marginLeft:-80,marginTop:35}}
                       />

                   </View>
                   <Text style={{
                       color:"#345c74",
                       fontFamily:"Bold",
                       fontSize:20,
                       paddingHorizontal:20,
                       marginTop:20,
                       marginBottom:10
                   }}>   Instant notes</Text>

                   <CourseList
                      onPress={()=>this.props.navigation.navigate("PS1")}
                        img={require('../images/pen.png')}
                        title="Compose instant notes"
                        bg="#fdddf3"
                   />
                    <CourseList
                      onPress={()=>this.props.navigation.navigate("PS2")}
                        img={require('../images/pen2.png')}
                        title="Quick messages"
                        bg="#fef8e3"
                   />
                    <CourseList
                      onPress={()=>this.props.navigation.navigate("PS3")}
                        img={require('../images/pen6.png')}
                        title="Quick references"
                        bg="#fcf2ff"
                   />
               </ScrollView>
           </ImageBackground>
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
        width: 55,
        height: 55,
        borderRadius: 68
    }
})