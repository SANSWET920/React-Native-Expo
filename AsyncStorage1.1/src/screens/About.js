import React from "react";
import {View, Text, StyleSheet } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={{
                       fontSize:15,
                       fontFamily:"Bold",
                       color:"#ffffff"}}>ABOUT ME</Text>
            <Text style={styles.about}>AsyncStorage gives you a new experience of 
            storing your confidential data in a very secured way.
            The data you saved will be stored in your mobile and it is totally 
            encrypted.User can feel safe to save their data here as it remains
             very safe within their mobile.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      margin: 32,
    },
    about: {
        fontSize: 13,
        color: "#888",
        marginTop: 8,
        lineHeight: 22,
        fontFamily:"Bold",
    }
})