
import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Image,
TouchableOpacity,AsyncStorage  } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import LottieView from "lottie-react-native";
import * as Permissions from 'expo-permissions';
import styled from "styled-components";
import { ScrollView } from "react-native-gesture-handler";

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
   top: 140;
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

