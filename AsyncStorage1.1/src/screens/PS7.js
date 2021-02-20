
import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Image,
TouchableOpacity,AsyncStorage,ImageBackground ,Alert, KeyboardAvoidingView,Share, Clipboard,StyleSheet ,TouchableWithoutFeedback, Keyboard, Button} from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';
import Pic from "./Pic";
import UserName from "./UserName";
import HomePage from "./HomePage";


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

  const createTwoButtonAlert3 = () =>
  Alert.alert(
    "Notice for you",
    "Click on the top-right button to view all your saved notes",
    
  );

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
                  
                    <TouchableOpacity style={{
                        paddingHorizontal:10,
                        paddingVertical:13,
                        borderRadius:10,
                        marginTop:30,
                        backgroundColor:"#9a3c7e",
                        marginLeft:240
                    }}                           onPress={()=>props.navigation.navigate("ViewScreen")}
>
                        <Image
                            source={require('../images/hum.png')}
                            style={{height:15,width:20}}
                        />
                    </TouchableOpacity>
                  
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
                    

                        <View
                          
                            style={{
                                height:50,
                                width:50,
                                borderWidth:1,
                                borderColor:"#f58084",
                                borderRadius:50,
                                top: -5
                            }}
                        >
                        <Pic />

                        </View>
                        <View style={{marginHorizontal:20}}>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:18
                            }}>Pin number</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:12
                            }}> 
                                <UserName />
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
                        
                        <Ionicons name="md-chatbox-ellipses" color={"#f58084"} size={20} />
                        
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
                  

                    <HomePage/>
                    <AdMobBanner
  bannerSize="Banner"
  adUnitID="ca-app-pub-8598728716633931/7124863707" 
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
  marginTop: 10
},
  });