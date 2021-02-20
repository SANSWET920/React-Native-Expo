
import React from 'react';
import { Dimensions, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CaptureButton from './CaptureButton.js'
import { Camera } from 'expo-camera';

export default class CameraEle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            identifedAs: '',
            loading: false,
            index: 0,
        }
        // let index = props.navigation.getParam('data');
        console.warn(props);
    }

    takePicture = async function () {

        if (this.camera) {

            // Pause the camera's preview
            // this.camera.pausePreview();

            // Set the activity indicator
            this.setState((previousState, props) => ({
                loading: true
            }));

            // Set options
            const options = {
                base64: true
            };

            // Get the base64 version of the image
            const data = await this.camera.takePictureAsync(options)

            // Get the identified image
            this.identifyImage(data.base64);
        }
    }

    identifyImage(imageData) {
        console.warn('access api' ,  this.state.index)
        // Initialise Clarifai api
        const Clarifai = require('clarifai');

        const app = new Clarifai.App({
            apiKey:  this.state.index === 0 ?'43e9f49e64e841acbada05463e3ef6df'
             : 'cefa657d25434e7eaf536b7a363a94b6'
        });

        // Identify the image
        app.models.predict(Clarifai.GENERAL_MODEL, { base64: imageData })
            .then((response) => {
                console.warn(response.rawData.outputs[0].data.concepts[0].name);
                this.displayAnswer(response.rawData.outputs[0].data.concepts[0].name + ' / ' +
                    response.rawData.outputs[0].data.concepts[0].name + ' / ' +
                    response.rawData.outputs[0].data.concepts[1].name + ' / ' +
                    response.rawData.outputs[0].data.concepts[2].name + ' / ' +
                    response.rawData.outputs[0].data.concepts[3].name
                    + ' / ' + response.rawData.outputs[0].data.concepts[4].name
                    + ' / ' + response.rawData.outputs[0].data.concepts[5].name
                );


            })
            .catch((err) => alert(err))
            ;
    }

    displayAnswer(identifiedImage) {
        console.warn('result came');
        // Dismiss the acitivty indicator
        this.setState((prevState, props) => ({
            identifedAs: identifiedImage,
            loading: false
        }));

        // Show an alert with the answer on
        Alert.alert(
            'Predicted output',
            this.state.identifedAs, [
            { text: 'ok', onPress: () => { } }
        ],
            { cancelable: false }
        )

        // Resume the preview
        // this.camera.resumePreview();
    }

    render() {
        return (
            <Camera ref={ref => { this.camera = ref; }} style={styles.preview} type={Camera.Constants.Type.back}>
                {/* <RNCamera ref={ref => {this.camera = ref;}} style={styles.preview}> */}
                <ActivityIndicator size="large" style={styles.loadingIndicator} color="#fff" animating={this.state.loading} />
                <CaptureButton buttonDisabled={this.state.loading} onClick={this.takePicture.bind(this)} />
                <CaptureButton isNotCap = {true} buttonDisabled={this.state.loading} onClick={() => {
                    let newIndex =this.state.index === 0?1 : 0 ;
                    this.setState((prevState, props) => ({
                        index: newIndex
                    }));
                }} />
                {/* </RNCamera> */}
            </Camera>
        );
    }
}

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    loadingIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})