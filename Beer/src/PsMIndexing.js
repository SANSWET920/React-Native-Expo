
import React, { Component } from "react";
import { Keyboard, Text, View, TextInput, Image, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';

export default function IndexingScreen(props) {
    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">

            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
            <View style={styles.loginScreenContainer}>
                {/* <View style={styles.loginFormView}> */}
                <Card style={{
                    shadowOffset: { width: 0, height: 20 },
                    shadowOpacity: 7,
                    shadowRadius: 20,
                    elevation: 20,
                }}
                    title='You are in safe zone'
                    image={require('../assets/icon.png')}>
                    <Text style={{ marginBottom: 10, height: 100, marginTop: 30 }}>
                        If you plan to use a mobile app to conduct sensitive transactions — like filing your taxes,
                         shopping with a credit card, or accessing your bank account — use this
                             PsM mode                           </Text>
                    <Button style={styles.enterButton}
                                                onPress={() => props.navigation.navigate('PsMPrivatePage')}
                        title='ENTER NOW' />
                        <Button style={styles.enterButton1}
                                                onPress={() => props.navigation.navigate('objectDetection', {data: 1})}
                        title='OBJECT DETECTION 1' />
                </Card>
            </View>
            {/* </View> */}
            {/* </TouchableWithoutFeedback> */}
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: '#cbf8fe',
        alignItems: 'center',
        elevation: 10
    },
    loginScreenContainer: {
        flex: 1,
        marginTop: '50%',
        height: '90%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
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
    enterButton1: {
        backgroundColor: '#59b5e4',
        borderRadius: 5,
        height: 45,
        marginTop: 20,
    },
});