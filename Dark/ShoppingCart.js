import React, { Component } from "react";

import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';


import { createDrawerNavigator, DrawerItems} from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import ElectronicsScreen from "./containers/ElectronsScreen";
import BooksScreen from "./containers/BooksScreen";


export default class ShoppingCart extends React.Component {
    render() {
        return (
            <AppDrawerNavigator />
        );
    }
}


const AppDrawerNavigator = createDrawerNavigator({
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})