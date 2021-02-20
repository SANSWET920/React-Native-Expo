
import React, { Component } from "react";
import { Keyboard, Text, View, TextInput, Image, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default function LoginScreen(props) {
    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <Image
                            style={styles.stretch}
                            source={require('../assets/icon.png')}
                        />
                        <Text style={styles.logoText}>Login</Text>
                        <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                        <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
                        <Button
                            buttonStyle={styles.loginButton}
                            onPress={() => props.navigation.navigate('PsMIndexing')}
                            title="Submit"
                        />
                       

                        {/* <Button
                            buttonStyle={styles.fbLoginButton}
                            onPress={() => this.onFbLoginPress()}
                            title="Login with Facebook"
                            color="#3897f1"
                        /> */}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    stretch: {
        alignSelf: 'center',
        width: 80,
        height: 80,
        resizeMode: 'stretch',
        marginTop: '50%',
    },
    containerView: {
        flex: 1,
        backgroundColor: '#cbf8fe'
    },
    loginScreenContainer: {
        flex: 1,
        // alignItems:'stretch'
    },
    logoText: {
        fontSize: 40,
        fontWeight: "800",
        // marginTop: '90%',
        marginBottom: 30,
        textAlign: 'center',
    },
    loginFormView: {
        flex: 1
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,

    },
    loginButton: {
        backgroundColor: '#59b5e4',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
    },
    fbLoginButton: {
        height: 45,
        marginTop: 10,
        backgroundColor: 'transparent',
    },
});