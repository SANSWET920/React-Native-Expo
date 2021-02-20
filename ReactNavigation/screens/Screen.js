import React from "react";
import {View, Text, StyleSheet,Image,SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';


export default class Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            
                <SafeAreaView style={{ flex: 1 }}> 
                  <View style={styles.Header}>
                    <Image source={require("../assets/logo1.png")}  
                    style={styles.logo1} style={{ width: 200, height: 200, left: 80, top: -50}} />
                  </View>
    
                    <TouchableOpacity 
                      style={{ alignItems: "flex-start", marginTop: -38, left: 10 }}
                      onPress={this.props.navigation.openDrawer}
                      >
                       <AntDesign name="appstore1" size={24} color="#438D80" />
                      </TouchableOpacity>
                      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
                          <Text style={styles.text}>{this.props.name} Screen </Text>
                      </View>

                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e5e5e5",
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    },
    Header: {
        width: "100%",
        height: 75,
        backgroundColor: "#FFF",
        borderBottomWidth: 0.3
    }
})