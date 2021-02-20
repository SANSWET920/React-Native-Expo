import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBa, LayoutAnimation, StatusBar, Button } from 'react-native'
import firebase from 'firebase';
import Fire from "./Fire";
import * as Google from "expo-google-app-auth";



export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

   


    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({ errorMessage: error.message }))

    };

    render() {
        LayoutAnimation.easeInEaseOut();

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <Image source={require("../assets/icon.png")}
                    style={{ width: 500, height: 373, marginTop: -200, marginLeft: -50 }}></Image>

                <Image source={require('../assets/icon.png')}
                    style={{ position: "absolute", width: 500, height: 373, bottom: -270, right: -170, opacity: 0.3 }}></Image>

                <Image source={require('../assets/icon.png')}
                    style={{ width: 120, height: 120, marginTop: -110, alignSelf: "center" }}></Image>

                <Text style={styles.greeting}>
                    {'Olá! Seja bem-vindo!'}
                </Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email: </Text>
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <View>
                            <Text style={styles.inputTitle}>Senha: </Text>
                            <TextInput style={styles.input}
                                secureTextEntry
                                autoCapitalize="none"
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                            ></TextInput>
                        </View>

                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{ color: 'white', fontWeight: "500" }}>Enter</Text>
                </TouchableOpacity>

            <Button
                title="Sign in With Google"
                onPress={() => this.signInWithGoogleAsync() }/>





                <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 32 }}
                    onPress={() => this.props.navigation.navigate("Register")}
                >
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        Novo por aqui? <Text style={{ fontWeight: "500", color: "#f14a52" }}>Cadastre-se.</Text>
                    </Text>
                </TouchableOpacity>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#ff787f",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
})