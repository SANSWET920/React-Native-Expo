import React from 'react';
import { View, Text, StyleSheet,Dimensions,TouchableOpacity, 
  TextInput,
  Platform,
Image,
  StatusBar,
   } from 'react-native';
import Fire from "./Fire";
import { Ionicons, Entypo } from '@expo/vector-icons';
import UserPermissions from "./UserPermission";
import * as ImagePicker from "expo-image-picker";
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default class MusicApp extends React.Component {
    state = {
        user: { 
         name: "",
         email: "",
         password: "",
         avatar: null
     },
     errorMessage: null
 };
 


handlePickAvatar = async () => {
    UserPermissions.getCamerPermission()

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4,3]
    });

    if (!result.cancelled) {
        this.setState({ user : { ...this.state.user, avatar: result.uri }});
    }
};


handleSignUp = () => {
    Fire.shared.createUser(this.state.user);
   
};


  render() {
    return (
      <View style={styles.container}> 
     


    <View  style={{
        top:-500,
    }}>
                
       <Text style={{color: "#ffffff",fontSize: 25, fontFamily:"Bold", alignSelf: "center", marginTop:-70}}>Edit Profile</Text>
    </View>
        
        
<View  style={styles.avatarContainer}>

<TouchableOpacity style={styles.avatarPlaceholder}  onPress={this.handlePickAvatar}>

                        <Image source={{ uri: this.state.user.avatar}} style={styles.avatar} />

                        <Ionicons
                            name="md-add" size={40} color="#FFF" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                            
                    </TouchableOpacity> 
</View>


<View style={{
                                        flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:50,
                    borderWidth:3,
                    marginTop:-480,
                    paddingHorizontal:20,
                    borderColor:"#fff",
                    borderRadius:35,
                    paddingVertical:10
                }}>

                    <TextInput 
                        placeholder="Username     "
                        placeholderTextColor="#FFFFFF"
                        onChangeText={name => this.setState({ user: { ...this.state.user , name} })}
                    value={this.state.user.name}
                        style={{fontSize:17,   fontFamily:"Medium",}}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:50,
                    borderWidth:3,
                    marginTop:30,
                    paddingHorizontal:20,
                    borderColor:"#fff",
                    borderRadius:35,
                    paddingVertical:10
                }}>
                   
                   <TextInput 
                    
                        placeholder="Email      "
                        placeholderTextColor="#fff"
                        onChangeText={email => this.setState({  user: { ...this.state.user, email }  })}
                       value={this.state.user.email}
                        style={{fontSize:17, fontFamily:"Medium"}}
                    />


                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:50,
                    borderWidth:3,
                    marginTop:30,
                    paddingHorizontal:10,
                    borderColor:"#FFFFFF",
                    borderRadius:35,
                    paddingVertical:10
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#FFFFFF"
                        onChangeText={password => this.setState({ user: { ...this.state.user, password}})}
                      value={this.state.user.password}
                        style={{paddingHorizontal:10, fontFamily:"Medium",fontSize:17}}
                    />
                    

                </View>
                <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                   </View>
                   <TouchableOpacity style={{
                    marginHorizontal:70,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:20,
                    backgroundColor:"#fff",
                    paddingVertical:15,
                    borderRadius:23
                }}  onPress={this.handleSignUp} >
                    <Text style={{
                        color:"black",
                        fontFamily:"Bold"
                    }}>Update Now</Text>
                </TouchableOpacity>
</View>


                

      
    );
  }
}


const styles = StyleSheet.create({
  
    container: {  
        flex: 1,
      },
      button: {
        top:90,
        backgroundColor: 'white',
        height: 40,
        marginHorizontal: 120,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        shadowOffset: { width: 2, height:2},
        shadowColor: "#000000",
        shadowOpacity: 0.2
      },
      textInput: {
        height: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        borderColor: "rgba(0,0,0,0.2)"
      },
      closeButton: {
        height: 40,
        width: 40,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: -20,
        left: width / 2 - 20,
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 10,
      },
      avatarPlaceholder: {
        width: 100,
        height: 100,
        backgroundColor: "#E1E2E6",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        zIndex:100
    },
    avatar: {
        
        position: "absolute",
        width: 100,
        height: 100,
        borderRadius: 50 ,
         zIndex:100  
    },
    avatarContainer: {
            
        borderRadius: 32,
        shadowOffset: { height: 3, width: 1},
        shadowColor: "#222",
        shadowOpacity: 0.5,
        justifyContent: "center",
        alignItems: "center",
        top:-520,
        zIndex:100
        
    },
    
    
    });