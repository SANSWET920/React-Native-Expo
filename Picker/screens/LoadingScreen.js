import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import firebase from 'firebase'
import Fire from "./Fire"



export default class LoadingScreen extends React.Component {
    componentDidMount() {
        this.checkiIfLoggedIn();
    }

    checkiIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(function(user)
        {
            if (user) {
                this.props.navigation.navigate
                ("App");
            } else {
                this.props.navigation.navigate("Login");
            }
        }.bind(this)
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>LoadingScreen...</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})