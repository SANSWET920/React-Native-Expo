import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput ,ScrollView} from "react-native";
import { Header, Left, Right, Icon } from "native-base";
import {Ionicons} from "@expo/vector-icons"; 

class SettingsScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="microphone" style={{ fontSize: 24, color: tintColor }} />
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
                <Text style={{ fontSize: 20, fontWeight: "bold", top: 24, right: 70, position: "absolute"}}>Safety meeting loggers</Text>
                </View>    

                <Text style={{position: "absolute", fontSize: 20, top: 125, left: 20, fontWeight: "bold", color: "black"}}>Field 1:</Text>
             <TextInput style={styles.TextInput} placeholder="Safety meeting logger" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 

                  <Text style={{position: "absolute", fontSize: 20, top: 190, left: 20, fontWeight: "bold"}}>Field 2:</Text>
                  <TextInput style={styles.TextInputs} placeholder="Safety meeting logger" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 

             <Text style={{position: "absolute", fontSize: 20, top: 255, left: 20, fontWeight: "bold"}}>Field 3:</Text>
                  <TextInput style={styles.TextInput1} placeholder="Safety meeting logger" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 


              <Text style={{position: "absolute", fontSize: 20, top: 320, left: 20, fontWeight: "bold"}}>Field 4:</Text>
                  <TextInput style={styles.TextInput2} placeholder="Safety meeting logger" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 

              <Text style={{position: "absolute", fontSize: 20, top: 383, left: 20, fontWeight: "bold"}}>Field 5:</Text>
                  <TextInput style={styles.TextInput3} placeholder="Safety meeting logger" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 
             
             <Text style={{position: "absolute", fontSize: 20, top: 453, left: 20, fontWeight: "bold"}}>Field 6:</Text>
                  <TextInput style={styles.TextInput4} placeholder="Safety meeting logger" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 
             
             <Text style={{position: "absolute", fontSize: 20, top: 523, left: 20, fontWeight: "bold"}}>Field 7:</Text>
                  <TextInput style={styles.TextInput5} placeholder="Safety meeting logger" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 
             
             <Text style={{position: "absolute", fontSize: 20, top: 593, left: 20, fontWeight: "bold"}}>Field 8:</Text>
                  <TextInput style={styles.TextInput6} placeholder="Safety meeting logger" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 
                           
             <Text style={{position: "absolute", fontSize: 20, top: 662, left: 20, fontWeight: "bold"}}>Field 9:</Text>
                  <TextInput style={styles.TextInput7} placeholder="Safety meeting logger" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} /> 
                           
             <Text style={{position: "absolute", fontSize: 20, top: 733, left: 20, fontWeight: "bold"}}>Field 10:</Text>
                  <TextInput style={styles.TextInput8} placeholder="Safety meeting logger" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} />
                                        
             <Text style={{position: "absolute", fontSize: 20, top: 799, left: 20, fontWeight: "bold"}}>Field 11:</Text>
                  <TextInput style={styles.TextInput9} placeholder="Safety meeting logger" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} />
                                                     
            <Text style={{position: "absolute", fontSize: 20, top: 869, left: 20, fontWeight: "bold"}}>Field 12:</Text>
                  <TextInput style={styles.TextInput10} placeholder="Safety meeting logger" keyBoardType="Text" 
             onChangeText={(email) => {this.setState({ email: email });
             }} />
                                                     
            <Text style={{position: "absolute", fontSize: 20, top: 939, left: 20, fontWeight: "bold"}}>Field 13:</Text>
                  <TextInput style={styles.TextInput11} placeholder="Safety meeting logger" keyBoardType="Text" 
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
        height: 990
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
    
  TextInput7: {
    top: 659,
    marginLeft: 90,
    paddingLeft: 10,
    borderRadius: 5,
    width: 250,
    height: 38,
    backgroundColor: "#E4E4E4",
    position: "absolute"
  },
    
  TextInput8: {
    top: 729,
    marginLeft: 99,
    paddingLeft: 10,
    borderRadius: 5,
    width: 250,
    height: 38,
    backgroundColor: "#E4E4E4",
    position: "absolute"
  },
      
  TextInput9: {
    top: 797,
    marginLeft: 99,
    paddingLeft: 10,
    borderRadius: 5,
    width: 250,
    height: 38,
    backgroundColor: "#E4E4E4",
    position: "absolute"
  },
      
  TextInput10: {
    top: 866,
    marginLeft: 99,
    paddingLeft: 10,
    borderRadius: 5,
    width: 250,
    height: 38,
    backgroundColor: "#E4E4E4",
    position: "absolute"
  },
      
  TextInput11: {
    top: 935,
    marginLeft: 99,
    paddingLeft: 10,
    borderRadius: 5,
    width: 250,
    height: 38,
    backgroundColor: "#E4E4E4",
    position: "absolute"
  },
   Latest: {
       position: "absolute",
       width: 250,
       height: 42,
       left: 60,
       top: 20,
       backgroundColor: "#93FFE8",
       justifyContent: "center",
       alignItems: "center",
       borderRadius: 10
   }

})