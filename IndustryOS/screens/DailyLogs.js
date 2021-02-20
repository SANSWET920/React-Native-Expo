import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput ,ScrollView} from "react-native";
import { Header, Left, Right, Icon } from "native-base";
import {Ionicons} from "@expo/vector-icons"; 

class SettingsScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="log-in" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render(){
        return (
            <ScrollView>
            <View style={styles.container}>
             <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
             <Ionicons name="ios-arrow-round-back" size={40} color="black" ></Ionicons>
             </TouchableOpacity>
               <View style={{ flex: 1, alignItems: "center", justifyContent:"center"}}>
               <View style={styles.Latest}></View>
                <Text style={{ fontSize: 25, fontWeight: "bold", top: 23, right: 115, position: "absolute"}}>Daily Logs</Text>
                </View>      

                <Text style={{position: "absolute", fontSize: 20, top: 125, left: 20, fontWeight: "bold", color: "black"}}>Field 1:</Text>
             <TextInput style={styles.TextInput} placeholder="Daily Log" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 

                  <Text style={{position: "absolute", fontSize: 20, top: 190, left: 20, fontWeight: "bold"}}>Field 2:</Text>
                  <TextInput style={styles.TextInputs} placeholder="Daily Log" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 

             <Text style={{position: "absolute", fontSize: 20, top: 255, left: 20, fontWeight: "bold"}}>Field 3:</Text>
                  <TextInput style={styles.TextInput1} placeholder="Daily Log" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 


              <Text style={{position: "absolute", fontSize: 20, top: 320, left: 20, fontWeight: "bold"}}>Field 4:</Text>
                  <TextInput style={styles.TextInput2} placeholder="Daily Log" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 

              <Text style={{position: "absolute", fontSize: 20, top: 383, left: 20, fontWeight: "bold"}}>Field 5:</Text>
                  <TextInput style={styles.TextInput3} placeholder="Daily Log" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 
             
             <Text style={{position: "absolute", fontSize: 20, top: 453, left: 20, fontWeight: "bold"}}>Field 6:</Text>
                  <TextInput style={styles.TextInput4} placeholder="Daily Log" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 
             
             <Text style={{position: "absolute", fontSize: 20, top: 523, left: 20, fontWeight: "bold"}}>Field 7:</Text>
                  <TextInput style={styles.TextInput5} placeholder="Daily Log" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 
             
             <Text style={{position: "absolute", fontSize: 20, top: 593, left: 20, fontWeight: "bold"}}>Field 8:</Text>
                  <TextInput style={styles.TextInput6} placeholder="Daily Log" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 
             
            </View>
            </ScrollView>
        );
    }
}

export default SettingsScreen;

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        width: 359,
        height: 650
    },
    back: {
        position: "absolute",
        top: 20,
        left: 12,
        width: 32,
        height: 32
   },
   TextInput: {
        top: 120,
        marginLeft: 90,
        paddingLeft: 10,
        borderRadius: 5,
        width: 250,
        height: 38,
        backgroundColor: "#E4E4E4",
        position: "absolute"
   },
   TextInputs: {
    top: 185,
    marginLeft: 90,
    paddingLeft: 10,
    borderRadius: 5,
    width: 250,
    height: 38,
    backgroundColor: "#E4E4E4",
    position: "absolute"
  },
  TextInput1: {
    top: 250,
    marginLeft: 90,
    paddingLeft: 10,
    borderRadius: 5,
    width: 250,
    height: 38,
    backgroundColor: "#E4E4E4",
    position: "absolute"
  },
  TextInput2: {
    top: 315,
    marginLeft: 90,
    paddingLeft: 10,
    borderRadius: 5,
    width: 250,
    height: 38,
    backgroundColor: "#E4E4E4",
    position: "absolute"
  },
  
  TextInput3: {
    top: 380,
    marginLeft: 90,
    paddingLeft: 10,
    borderRadius: 5,
    width: 250,
    height: 38,
    backgroundColor: "#E4E4E4",
    position: "absolute"
  },
  
  TextInput4: {
    top: 448,
    marginLeft: 90,
    paddingLeft: 10,
    borderRadius: 5,
    width: 250,
    height: 38,
    backgroundColor: "#E4E4E4",
    position: "absolute"
  },
  
  TextInput5: {
    top: 519,
    marginLeft: 90,
    paddingLeft: 10,
    borderRadius: 5,
    width: 250,
    height: 38,
    backgroundColor: "#E4E4E4",
    position: "absolute"
  },
  
  TextInput6: {
    top: 589,
    marginLeft: 90,
    paddingLeft: 10,
    borderRadius: 5,
    width: 250,
    height: 38,
    backgroundColor: "#E4E4E4",
    position: "absolute"
  },
   Latest: {
       position: "absolute",
       width: 150,
       height: 42,
       left: 110,
       top: 20,
       backgroundColor: "#93FFE8",
       justifyContent: "center",
       alignItems: "center",
       borderRadius: 10
   }

})