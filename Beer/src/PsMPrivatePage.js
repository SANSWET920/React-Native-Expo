import React, { useEffect, useState } from "react";
import { Keyboard, Text, View, TextInput, Image, TouchableWithoutFeedback, Alert, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Platform, SafeAreaView, AsyncStorage  } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Textarea from 'react-native-textarea';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import * as Permissions from 'expo-permissions';
import { ScrollView } from "react-native-gesture-handler";
import styled, { ThemeProvider } from "styled-components";




export default function PrivateScreen() {
   
    
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
      
    
        <View style={styles.containerView}>
            {hasPermission ?
                <View style={{ backgroundColor: "black"}}>
                    <Camera style={{ width: 100, height: 100, marginTop: 50, marginLeft: 125 }} type={type}
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
              
                <View style={styles.container}>
                <View style={styles.textareaContainer}>
    <ScrollView style={{ height: 10000, width: 290}}>
<Text style={{top: 1, fontSize: 15 }}>{name}</Text>
  </ScrollView>
      
  </View>

      <TextInput style={styles.input} onChangeText={(text) => setName(text)} />

      <TouchableOpacity style={styles.button1} onPress={() => save()}>
        <Text style={{ color: "white", fontSize: 15 }}>Save!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => remove()}>
        <Text style={{ color: "white" ,fontSize: 15}}>Delete!</Text>
      </TouchableOpacity>
    </View>



            {faceDetected ?
                null
                :
                <View style={{
                    width: '100%',
                    height: '99%',
                    backgroundColor: 'black',
                    zIndex: 10
                }}>
                </View>
            }
        </View>
    );


    function handleFacesDetected(event) {
        if (event.faces.length > 0) {
            // console.warn('This is vignesh');
            setFaceDtected(true);
        } else {
            setFaceDtected(false);
        }
    }
}


const styles = StyleSheet.create({
    containerView: {
        flex: 1
    },
    loginScreenContainer: {
        flex: 1,
        marginTop: '50%',
        height: '90%',
        zIndex: 10
    },
    textareaContainer: {
      height: 290,
      width: 299,
      padding: 5,
      backgroundColor: '#F5FCFF',
      borderRadius: 10,
      shadowColor:"black",
      marginTop: 25
  
  },
    loginFormView: {
        flex: 1
    }, 
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center' 
      },
      

      input: {
        borderWidth: 4,
        borderColor: "#575DD9",
        alignSelf: "stretch",
        margin: 40,
        height: 54,
        width: 290,
        top: 315,
        borderRadius: 6,
        paddingHorizontal: 15,
        fontSize: 20,
        position:"absolute"
      },
      button: {
        backgroundColor: "#575DD9",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        paddingVertical: 12,
        paddingHorizontal: 32,
        top: 250,
        marginTop: 190,
        marginHorizontal:120,
        left: 70,
        borderRadius: 6,
        position: "absolute"
      },
      
      button1: {
        backgroundColor: "#575DD9",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        paddingVertical: 12,
        paddingHorizontal: 39,
        top: 250,
        marginTop: 190,
        marginHorizontal:60,
        borderRadius: 6,
        position: "absolute"
      }
})