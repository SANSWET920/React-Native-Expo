import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Left, Right, Icon } from "native-base";

class SettingsScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render(){
        return (
            <View style={styles.container}>
               <View style={{ flex: 1, alignItems: "center", justifyContent:"center"}}>
                <Text>HomeScreen123</Text>
                </View>
            </View>
        );
    }
}

export default SettingsScreen;

const styles =  StyleSheet.create({
    container: {
        flex: 1
    }
})