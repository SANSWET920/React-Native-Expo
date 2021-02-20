import React, { useEffect, useState } from "react";
import { Keyboard, Text, View, TextInput, Image,
TouchableWithoutFeedback,StatusBar,TouchableOpacity
,Alert,AsyncStorage,KeyboardAvoidingView, StyleSheet, Share, Clipboard} from 'react-native';
import { Button, Card } from 'react-native-elements';
import Textarea from 'react-native-textarea';
import { Camera } from 'expo-camera';
import { switchTheme } from "../redux/themeActions";
import { lightTheme, darkTheme } from "../Theme";
import { useSelector, useDispatch } from "react-redux";
import * as FaceDetector from 'expo-face-detector';
import LottieView from "lottie-react-native";
import * as Permissions from 'expo-permissions';
import styled, { ThemeProvider }  from "styled-components";
import { ScrollView } from "react-native-gesture-handler";
import {Ionicons } from "@expo/vector-icons" 

export default function PrivateScreen(props) {
  
    const [hasPermission, setHasPermission] = useState(null);
    const [faceDetected, setFaceDtected] = useState(false);
    const [type, setType] = useState(Camera.Constants.Type.front);

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
  



    useEffect(() => {
        (async () => {
            const status = await Permissions.askAsync(Permissions.CAMERA);
            setHasPermission(status.status === 'granted');
        })();
    }, []);

    const [name, setName ] = useState();

    const save = async () => {
      try {
        await AsyncStorage.setItem("MyName", name);
      } catch (err) {
        alert(err);
      } 
    };
  
    const load = async () => {
      try {
        let name = await AsyncStorage.getItem("MyName");
  
        if (name !== null) {
          setName(name);
        }
      } catch (err) {
        alert(err);
      }
    };
  
    const remove = async () => {
      try {
        await AsyncStorage.removeItem("MyName")
      } catch (err) {
        alert(err)
      } finally {
         setName("")
      }
    }
  
    useEffect(() => {
      load();
    }, []);
 

    
    return (

        <View1>
            {hasPermission ?
                <View>

        

                    <Camera style={{ width: 90, height: 90, marginTop: -10, marginLeft: 130 , position: "absolute"}} type={type}
                        onFacesDetected={data => { handleFacesDetected(data); }}
                        faceDetectorSettings={{
                            mode: FaceDetector.Constants.Mode.fast,
                            detectLandmarks: FaceDetector.Constants.Landmarks.none,
                            runClassifications: FaceDetector.Constants.Classifications.none,
                            minDetectionInterval: 350,
                            tracking: true,
                        }}
                    />
                </View>
                
                : null}

  


 


<ScrollView style={{ top: 82, height: 240, width: 340,
position: "absolute",backgroundColor: "#DCDCDC", 
left: 10, borderWidth: 3 , borderColor: "#696969",
 borderRadius: 5, paddingLeft: 5, paddingRight: 5,

}}>
<Text1 >{name}</Text1>
</ScrollView>

<TextInput1 onChangeText={(text) => setName(text)} />




<TouchableOpacity  style={{top: 450, position: "absolute", left: 40, backgroundColor: "#008888",
 alignItems: "center",justifyContent: "center", alignSelf: "stretch",
  paddingHorizontal: 12, paddingVertical: 5, marginTop: 32,
   marginHorizontal: 32, borderRadius: 6 }}  onPress={() => save()}>
<Text style={{ color: "white", fontSize :20, }}>  Save!  </Text>
</TouchableOpacity>


<TouchableOpacity 
style={{top: 450, position: "absolute", left: 180, 
backgroundColor: "#D2691E", alignItems: "center",
justifyContent: "center", alignSelf: "stretch", 
paddingHorizontal: 12, paddingVertical: 5, marginTop: 32,
 marginHorizontal: 32, borderRadius: 6 }}  onPress={() => remove()}>
<Text style={{ color: "white",  fontSize: 20}}>Delete!</Text>
</TouchableOpacity>

    
    <TouchableOpacity onPress={onShare} style={{top: 500, position: "absolute"}}>

    <Text>Share</Text> 
  
    </TouchableOpacity>

             
<Text style={{top: 200}} onPress={() => Clipboard.setString(name)}>Copy Text</Text>

<Text style={{ top: 560, fontSize: 15, left: 90, position: "absolute", color: "#000000" }}>Save now! to remember later!</Text>

<Text style={{ top: 590, fontSize: 15, left: 70, position: "absolute", color: "#000000" }}>Fear not your data is safe within you!</Text>

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
        </View1>

      
    );
          

    function handleFacesDetected(event) {
        if (event.faces.length > 0) {
    
            setFaceDtected(true);
        } else {
            setFaceDtected(false);
        }
    }
}



const View1 = styled.View`
   flex: 1;
   width: 400px;
   height: 400px;
   background-color: white;
`;

const Text1 =styled.Text`
    color: black;
    font-size: 20px; 
`;

const TextInput1 = styled.TextInput`
   top: 290;
   color: green;
   border-width: 3px;
   border-color: #000000;
   right: 18;
   margin: 42px;
   height: 40px;
   border-radius: 10px;
   padding-left: 10px;
   padding-right: 10px;
   font-size: 20px;
`;

