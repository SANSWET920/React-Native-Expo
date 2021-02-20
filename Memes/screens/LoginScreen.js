import React, { Component } from 'react';

import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

import {Ionicons} from "@expo/vector-icons";



export default class LoginScreen extends React.Component {

    static navigationOptions = {

        header: null
    
      };

    state = {

       name: "",

    };

    
   

    continue = () => {

        this.props.navigation.navigate("Chat", {name: this.state.name})

    };

   

    render() {

        return (

            <View style={styles.container}>

                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>

                     <Ionicons name="ios-arrow-round-back" size={50} color="#FFF" ></Ionicons>

                 </TouchableOpacity>

                <View style={styles.circle} />

                <View style={{marginTop: 79}}>

                   <Image 

                   source={require("../assets/chat.png")}
                   
                   style={{ width: 220, height: 160, alignSelf: "center"}}
                   
                    />

                </View>

                <View style={{ marginHorizontal: 45, marginTop: -20 }} >

                    <Text style={styles.header}>Trending Hashtag...
                    Breaking News...
                    Q&A...
                    </Text>

                    <TextInput 

                        style={styles.input}

                        placeholder="Enter Your UserName"

                        onChangeText={name => {

                            this.setState({ name });

                        }}

                        value={this.state.name}

                    />

                    <View style={{alignItems: "flex-end", marginTop: 60}} >

                        <TouchableOpacity style={styles.continue} onPress={this.continue}>

                             <Ionicons name="md-arrow-round-forward" size={25} color="#FFF" />

                        </TouchableOpacity>


                    </View>

                </View>

            </View>

        );

    }

}


const styles = StyleSheet.create({

    container: {

        flex: 1,

        backgroundColor: "#3B9C9C"

   },

   circle: {

        width: 330,

        height: 450,

        borderRadius: 100 / 1,

        backgroundColor: "#FFF",

        position: "absolute",

        left: 15,

        top: 50

   },

   header: {
 
        fontWeight: "800",

        fontSize: 30,

        color: "#514E5A",

        marginTop: 32,

        fontWeight: "bold"

   },

    input: {

        marginTop: 32,

        height: 50,

        borderWidth: StyleSheet.hairlineWidth,

        borderColor: "#BAB7C3",

        borderRadius: 30,

        paddingHorizontal: 16,

        color: "#514E5A",

        fontWeight: "600"

    },

    continue: {
 
        width: 70,

        height: 70,

        borderRadius: 70 / 2,

        backgroundColor: "#9075E3",

        alignItems: "center",

        justifyContent: "center"

    },
    back: {
        position: "absolute",
        top: 20,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(146, 199, 199, 0)",
        alignItems: "center",
        justifyContent: "center"
   }

});
