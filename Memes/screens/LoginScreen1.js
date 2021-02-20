import React from "react";
import { View, Text, StyleSheet, TextInput,TouchableOpacity, Image, StatusBar, LayoutAnimation } from "react-native";
import {Ionicons } from "@expo/vector-icons" 
import * as firebase from "firebase";


export default class LoginScreen1 extends React.Component {

     static navigationOptions = {

          header: null
  
      };
      
     state = {
          email: "",
          password: "",
          errorMessage: null
     };

     handleLogin = () => {
     const { email, password } = this.state;

     firebase
        .auth()
        .signInWithEmailAndPassword(email, password )
        .catch(error => this.setState({ errorMessage: error.message }));
     };


     render() {
        return (
             <View style={styles.container}>

                   <StatusBar barStyle="light-content"></StatusBar>

                   <Image 
                   source={require("../assets/Sign.png")} 
                   style={{ width: 
                   200,height: 200,marginTop:  10 , left: 85 }} 
                  ></Image>

                   <Text 
                   style={styles.greeting}
                   >{'Hello EveryOne\nWelcome You All'}</Text>
                    
                   <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                   </View>

                     <View style={styles.form}>
                  
                    <View  style={{ marginTop: 10}}>
                   
                   <Text style={styles.inputTitle}
               

                   >Email Address</Text>
                   <TextInput style={styles.input}
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    ></TextInput>
              </View>

                 <View style={{ marginTop: 32 }}>
                      <Text style={styles.inputTitle}>Password</Text>
                      <TextInput 
                      style={styles.input} 
                      secureTextEntry 
                      autoCapitalize="none"
                      onChangeText={password => this.setState({ password })}
                      value={this.state.password}
                      ></TextInput>
                 </View>

          </View>
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
               <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity 

          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={() => this.props.navigation.navigate("Register")}
          
          >
               <Text style={{ color: "#414959", fontSize: 13 }}>
                    New to AsyncStorage! <Text style={{ fontWeight: "500", color: "#E9446A" }}>Sign Up</Text>
               </Text>
          </TouchableOpacity>
      </View>
        );
     }
}


const styles = StyleSheet.create({
     container: {
         flex: 1,
     },
      greeting: {
           marginTop: 10,
           fontSize: 18,
           fontWeight: "400",
           textAlign: "center",
           fontWeight: "bold"
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
           backgroundColor: "#E9446A",
           borderRadius: 4,
           height: 52,
           alignItems: "center",
           justifyContent: "center"
      }
      
});