import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import UserPermissions from "../utilities/UserPermission";
import * as ImagePicker from "expo-image-picker";
import Fire from "./Fire";


export default class RegisterScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

    state = {
       user: { 
        name: "",
        email: "",
        password: "",
        avatar: null
    },
    errorMessage: null
};


    handlePickAvatar = async () => {
        UserPermissions.getCamerPermission()

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3]
        });

        if (!result.cancelled) {
            this.setState({ user : { ...this.state.user, avatar: result.uri }});
        }
    };


    handleSignUp = () => {
        Fire.shared.createUser(this.state.user);
       
    };



    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>

                <Image source={require('../assets/icon.png')}
                    style={{ width: 500, height: 373, marginTop: -200, marginLeft: -50 }}></Image>

                <Image source={require('../assets/icon.png')}
                    style={{ position: "absolute", width: 500, height: 373, bottom: -270, right: -170, opacity: 0.3 }}></Image>

                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
                </TouchableOpacity>

                <View style={{ position: "absolute", top: 64, alignItems: "center", width: "100%" }}>
                    <Text style={styles.greeting}>
                        {'Olá!\n Cadastre-se para começar.'}
                    </Text>
                    <TouchableOpacity style={styles.avatarPlaceholder}  onPress={this.handlePickAvatar}>
                        <Image source={{ uri: this.state.user.avatar}} style={styles.avatar} />
                        <Ionicons
                            name="md-add" size={40} color="#FFF" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                    </TouchableOpacity>
                </View>

                <View style={styles.errorMessage}>
                    <View style={{ marginTop: 90 }}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                    </View>
                </View>

                <View style={styles.form}>
                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Nome completo: </Text>
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            onChangeText={name => this.setState({ user: { ...this.state.user , name} })}
                            value={this.state.user.name}></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Email: </Text>
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ user: { ...this.state.user, email } })}
                            value={this.state.user.email}></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <View>
                            <Text style={styles.inputTitle}>Senha: </Text>
                            <TextInput style={styles.input}
                                secureTextEntry
                                autoCapitalize="none"
                                onChangeText={password => this.setState({ user: { ...this.state.user, password} })}
                                value={this.state.user.password}
                            ></TextInput>
                        </View>

                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{ color: 'white', fontWeight: "500" }}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}>
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        Novo por aqui? <Text style={{ fontWeight: "500", color: "#E9446A" }}
                            onPress={() => this.props.navigation.navigate("Login")}>Entrar.</Text>
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
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
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
    },
    back: {
        position: "absolute",
        top: 48,
        left: 20,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(21, 22, 48, 0.1)",
        alignItems: "center",
        justifyContent: "center",
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        backgroundColor: "#E1E2E6",
        borderRadius: 50,
        marginTop: 48,
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        position: "absolute",
        width: 100,
        height: 100,
        borderRadius: 50 
    }
})