import React, { Component } from "react";
import { Button } from "./components/Button"
import { Input } from "./components/Input"
import axios from "axios";
import {View} from "react-native"
import * as LocalAuthentication from 'expo-local-authentication';
const AUTH_KEY = "@AUTH_TOKEN_KEY";
const USER = "@USER";
export default class Login extends Component {
 constructor(props) {
        super(props);
        this.state = {
           username: "",
           password: "",  
           incorrect: false,
           sccaned:false};
    }
componentDidMount() {
       this.checkDeviceForHardware();
       this.checkForBiometrics();     
       if(!this.state.scanned)
       this.handleLoginPress();}
checkDeviceForHardware = async () => {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    if (compatible) {
    alert('Compatible Device!');}
    else alert('Current device does not have the necessary hardware!')
};
checkForBiometrics = async () => {
    let biometricRecords = await LocalAuthentication.isEnrolledAsync();
    if (!biometricRecords) {
    alert('No Biometrics Found')
    } 
    else {
    alert('Biometrics Found')
    }
};
handleLoginPress =async () => {
    this.handleAuthentication();
};
handleAuthentication= async() => {
    let result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
    this.setState({sccaned:true})
    const data = {
    username:"username", //login data for your account
    password:"password"}
    const headers = { 
         "Content-Type": "application/json",};
    var temp= this;
    axios.post("https://mywebsite.com/login", data,                      {headers:headers}).then(function (result) {
     if (result && result.data) {
     const AUTH_TOKEN = result.data.token; 
     const AUTH_USER = result.data.username;
     _storeUser(AUTH_USER);
     _storeToken(AUTH_TOKEN);
     if (AUTH_TOKEN){
        temp.props.navigation.navigate("HOME");}
     else {
        temp.setState({ incorrect: true });}}
}).catch(function (error) {
    temp.setState({ incorrect: true });
    console.log(error);});}
    else {
       alert('Error! Enter your username and password!');}};
_login = async () => {
     const { name, password } = this.state;
     const data = {name, password}; 
     const headers = {"Content-Type": "application/json"};
     var temp= this;
     axios.post("https://mywebsite.com/login", data,                 {headers:headers}).then(function (result) {
     if (result && result.data) {
     const AUTH_TOKEN = result.data.token;
     const AUTH_USER = result.data.username;
     _storeUser(AUTH_USER);
     _storeToken(AUTH_TOKEN); 
     if (AUTH_TOKEN){
        temp.props.navigation.navigate("HOME");
     }
    else {temp.setState({ incorrect: true });}}})
    .catch(function (error) {
    temp.setState({ incorrect: true });
    console.log(error);});
};
render() {
return (
     <View style={styles.container}>
     <Input placeholder="Username" autoCompleteType="username" onChangeText={(text) => this.setState({ username: text })}></Input>
     <Input placeholder="Password" autoCompleteType="password" secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })}></Input>
      {this.state.incorrect ? <Text>Inccorect username or password</Text> : null}
     <Button onPress={this._login}>Login</Button>
</View>
);}}
const styles = {
    container: {
       flex: 1, 
       backgroundColor: "white",
       justifyContent: "flex-start",
       alignItems: "center",
       padding: 10}
}