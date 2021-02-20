import React, { Component } from "react";
import {
     View,
     Text,
     StyleSheet
}  from "react-native";


class BooksScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>BooksScreen</Text>
            </View>
        );
    }
}

export default BooksScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})