
import React, { useEffect, useState } from "react";
import { Keyboard, Text, View, TextInput, Image, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Textarea from 'react-native-textarea';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import * as Permissions from 'expo-permissions';

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
        <View style={styles.containerView}>
            {hasPermission ?
                <View>
                    <Camera style={{ width: 10, height: 10, marginTop: 0, marginLeft: 0 }} type={type}
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
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                <View style={styles.loginScreenContainer}>
                    {/* <View style={styles.loginFormView}> */}
                    <Card
                        title='Leave your words'>
                        {/* <TextInput style={{ marginBottom: 10, height: 100, marginTop: 30 }}>
                    </TextInput> */}
                        <Textarea
                            containerStyle={styles.textareaContainer}
                            style={styles.textarea}
                            onChangeText={data => { }}
                            defaultValue={{}}
                            maxLength={120}
                            placeholder={'Type here..'}
                            placeholderTextColor={'#c7c7c7'}
                            underlineColorAndroid={'transparent'}
                        />
                        <Button style={styles.enterButton}
                            title='SHARE' />
                    </Card>
                </View>
            </KeyboardAvoidingView>
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
        flex: 1,
        backgroundColor: '#cbf8fe',
        // alignItems: 'center',
    },
    textareaContainer: {
        height: 180,
        padding: 5,
        backgroundColor: '#F5FCFF',
    },
    loginScreenContainer: {
        flex: 1,
        marginTop: '50%',
        height: '90%',
        zIndex: 10
    },
    loginFormView: {
        flex: 1
    },
    enterButton: {
        backgroundColor: '#59b5e4',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
    },
});