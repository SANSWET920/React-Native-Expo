
import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Image,
TouchableOpacity,AsyncStorage,ImageBackground ,Alert, KeyboardAvoidingView,Share, Clipboard,StyleSheet ,TouchableWithoutFeedback, Keyboard, Button} from 'react-native';
import { Camera } from 'expo-camera';
import { LinearGradient} from "expo-linear-gradient";
import * as FaceDetector from 'expo-face-detector';
import LottieView from "lottie-react-native";
import * as Permissions from 'expo-permissions';
import styled from "styled-components";
import { ScrollView } from "react-native-gesture-handler";
import { Modalize } from 'react-native-modalize'
import Chapters from '../screens/Chapters'
import CourseList from '../screens/CourseList'
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';


export default function PrivateScreen(props) {

  
   
   
  const [hasPermission, setHasPermission] = useState(null);
  const [faceDetected, setFaceDtected] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
      (async () => {
          const status = await Permissions.askAsync(Permissions.CAMERA);
          setHasPermission(status.status === 'granted');
      })();
  }, []);

  const [name, setName ] = useState();

  const save = async () => {
    try {
      await AsyncStorage.setItem("MyNames7", name);
    } catch (err) {
      alert(err);
    } 
  };

  const load = async () => {
    try {
      let name = await AsyncStorage.getItem("MyNames7");

      if (name !== null) {
        setName(name);
      }
    } catch (err) {
      alert(err);
    }
  };

  const remove = async () => {
    try {
      await AsyncStorage.removeItem("MyNames7")
    } catch (err) {
      alert(err)
    } finally {
       setName("")
    }
  }

  useEffect(() => {
    load();
  }, []);

  const createTwoButtonAlert3 = () =>
  Alert.alert(
    "Notices for you",
    "face detecting only your face not your Eyes",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );


  const createTwoButtonAlert = () =>
  Alert.alert(
    "Save Text",
    "If you want to save the texts",
    [
      {
        text: "NO",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "YES", onPress: () => save("OK Pressed") }
    ],
    { cancelable: false }
  );

  const createTwoButtonAlert1 = () =>
  Alert.alert(
    "Delete Text",
    "If you want to permanent delete the texts",
    [
      {
        text: "NO",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "YES", onPress: () => remove("OK Pressed") }
    ],
    { cancelable: false }
  );
  
  const createTwoButtonAlert2 = () =>
  Alert.alert(
    "Copy Text",
    "If you want to copy the texts",
    [
      {
        text: "NO",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "YES", onPress: () =>  Clipboard.setString(name) }
    ],
    { cancelable: false }
  );
  

  const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            name
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
  
  return (

   <View style={styles.container}>

   
{hasPermission ?
<ImageBackground
                source={require('../images/crs.png')}
                style={{width:"100%",height:"100%"}}
          >
     
     <View 
         animation="bounceIn"  
         style={styles.header}>

          <View style={{
                   flexDirection:"row",
                   justifyContent: "space-between",
                    width:"100%",
                    paddingHorizontal:20,
                    top:10
                    
                }}>
                    <TouchableOpacity
                        onPress={()=>props.navigation.navigate("Cources")}
                        style={{
                          paddingHorizontal:10,
                            paddingVertical:13,
                            borderRadius:10,
                            marginTop:30,
                            backgroundColor:"#9a3c7e"
                        }}
                    >
                            <Image
                                source={require('../images/a1.png')}
                                style={{height:15,width:20}}
                            />
                    </TouchableOpacity>
                  
                    <View style={{
                        paddingHorizontal:10,
                        paddingVertical:13,
                        borderRadius:10,
                        marginTop:30,
                        backgroundColor:"#9a3c7e",
                        marginLeft:240
                    }}>
                        <Image
                            source={require('../images/hum.png')}
                            style={{height:15,width:20}}
                        />
                    </View>
                  
                </View>

     </View>
     <Camera style={{ width: 90, height: 90, alignSelf:"center", top:-90}} type={type}
                        onFacesDetected={data => { handleFacesDetected(data); }}
                        faceDetectorSettings={{
                            mode: FaceDetector.Constants.Mode.fast,
                            detectLandmarks: FaceDetector.Constants.Landmarks.none,
                            runClassifications: FaceDetector.Constants.Classifications.none,
                            minDetectionInterval: 350,
                            tracking: true,
                        }}
                    />
     <Animatable.View 
         animation="fadeInUpBig"    
         style={styles.footer}>
  

  <View style={{
                        flexDirection:"row",
                        marginHorizontal:25,

                        marginTop:-60
                    }}>
                    

                        <Image
                            source={require('../images/person2.jpg')}
                            style={{
                                height:50,
                                width:50,
                                borderWidth:1,
                                borderColor:"#f58084",
                                borderRadius:50,
                                top: -5
                            }}
                        />
                        <View style={{marginHorizontal:20}}>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:18
                            }}>face detecting</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:12
                            }}> 
                                Days to remember!
                            </Text>
                        </View>

                        <TouchableOpacity   style={{
                            alignItems:"center",
                            justifyContent:"center",
                            backgroundColor:"#fff2f2",
                            width:40,
                            height:40,
                            borderRadius:40
                        }}       onPress={createTwoButtonAlert3}>
                        
                            <Image
                                source={require('../images/a2.png')}
                            />
                        
                        </TouchableOpacity>
                    </View>
                    <View>

                        
                    </View>
                    <View style={{   
                      paddingHorizontal:35,
                        paddingVertical:2.8,
                        borderRadius:90,
                       top:-70,
                       right:120,
                        backgroundColor:"#dcdcdc",
                        marginLeft:240,
                       }} />
                    <View
                        style={{
                            flexDirection:"row",
                            paddingVertical:5,
                            backgroundColor:"#fff2f2",
                            marginHorizontal:5,
                            paddingVertical:15,
                            alignItems:"center",
                            borderRadius:10,
                            justifyContent:"center"
                        }}
                    >
                    <ScrollView style={{height: 190,width: 190, }}>
                        <Text style={{
                            color:"#f58084",
                            fontFamily:"Bold",
                            fontSize: 15,
                            height: "100%",
                            paddingLeft: 10, paddingRight: 10
                        }}>{name}</Text>
                        </ScrollView>

                    </View>


<View  style={{ 
  
  marginTop:-20,
justifyContent: "space-between",
  right:25,
 
  
  
  
  }}>
                    <LinearGradient   colors={['#a9a9a9', '#a9a9a9']} 
                      start={[0,0]} end={[1,1]} 
                          style={{
                          
   borderRadius: 20,
   
   margin: 42,
   height: 45,
      }}>
  <TextInput  
   style={{fontSize: 15, color: "#ffffff", fontFamily: "Bold",
   paddingStart: 10,paddingEnd: 10,top:10}}
   placeholder={"  Type here . . ."} 
   placeholderTextColor={"white"}  
   onChangeText={(text) => setName(text)} >
   </TextInput>
      </LinearGradient>

                  
</View>

<View  style={{ justifyContent: "center", alignItems: "flex-end", top:-90}}> 

<TouchableOpacity style={{

backgroundColor:"#fff2f2",
width:50,
height:50,
borderRadius:40,                      
}}   onPress={createTwoButtonAlert}>

<Image  style={{height: 45, width: 45}}
    source={require('../images/save.png')}
/>
</TouchableOpacity>
  
</View>
 
                        <View style={styles.container1}>
             <View style={styles.statContainer}>
             <TouchableOpacity style={{
                            alignItems:"center",
                            justifyContent:"center",
                            backgroundColor:"#fff2f2",
                            width:50,
                            height:50,
                            borderRadius:40,
              
                        }}  onPress={createTwoButtonAlert1}>
                
                            <Image  style={{height: 50, width: 50}}
                                source={require('../images/delete1.png')}
                            />
                        </TouchableOpacity>
                  <Text style={styles.stat}>Delete</Text>
             </View>
             <View style={[styles.statContainer]}>
           
<TouchableOpacity style={{
                            alignItems:"center",
                            justifyContent:"center",
                            backgroundColor:"#fff2f2",
                            width:50,
                            height:50,
                            borderRadius:40,
                    
                        }}  onPress={createTwoButtonAlert2}>
                
                            <Image  style={{height: 35, width: 35}}
                                source={require('../images/copy.png')}
                            />
                        </TouchableOpacity>


                  <Text style={styles.stat}>Copy</Text>
             </View>
             <View style={styles.statContainer}>
             <TouchableOpacity style={{
                            alignItems:"center",
                            justifyContent:"center",
                            backgroundColor:"#fff2f2",
                            width:50,
                            height:50,
                            borderRadius:40,
                    
                        }}  onPress={onShare}>
                
                            <Image  style={{height: 40, width: 40}}
                                source={require('../images/share1.png')}
                            />
                        </TouchableOpacity>
                  <Text style={styles.stat}>Share</Text>
             </View>
        </View>
        <AdMobBanner
  bannerSize="Banner"
  adUnitID="ca-app-pub-9979840777486735/2606761129" // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
  />
    
    
     </Animatable.View>

     
     </ImageBackground>
          
     : null}

{faceDetected ?
    null
    :

    
    <View style={{
        width: '100%',
        height: '99%',
        backgroundColor: "#000000",
        zIndex: 10,
        position: "absolute"
    }}>
                  
    </View>
}
   </View>

                                 
    );



    

function handleFacesDetected(event) {
  if (event.faces.length > 0) {

      setFaceDtected(true);
  } else {
      setFaceDtected(false);
  }
}

}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
  
    },
    header: {
        flex: 1,
        justifyContent: "space-between",
      
        paddingBottom: 20
    },
    footer: {
        marginTop:-70,
        flex: 3,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical:90
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 290,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
      
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    errorMessage: {
     marginTop: 40,
     alignItems: "center",
     justifyContent: "center",
     marginHorizontal: 30
},
statContainer: {
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
  fontWeight: "600",
  letterSpacing: 1,
  fontFamily:"Medium",
  color: "#888",
  marginTop: 6
},

container1: {
  paddingVertical:20,
  paddingHorizontal:0,
  flexDirection: "row",
  justifyContent: "space-between",
  marginHorizontal: 0,
  marginTop: -90
},
  });