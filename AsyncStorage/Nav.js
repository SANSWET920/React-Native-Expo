import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";

import { createBottomTabNavigator } from "react-navigation-tabs"

import {Ionicons } from "@expo/vector-icons";

import psMIndexing from "./src/psMIndexing";

import PsMPrivate from "./src/PsMPrivatePage";

import PsMPrivate3 from "./src/PsMPrivate3";

import LoadingScreen from "./Screen.js/LoadingScreen";

import LoginScreen from "./Screen.js/LoginScreen";

import PsMPrivate2 from "./src/PsMPrivate2";

import Menus from "./Screen.js/Menu";

import PsMPrivate4 from "./src/PsMPrivate4";

import PsMPrivate5 from "./src/PsMPrivate5";

import PsMPrivate6 from "./src/PsMPrivate6";

import PsMPrivate7 from "./src/PsMPrivate7";

import PsMPrivate8 from "./src/PsMPrivate8";

import PsMPrivate9 from "./src/PsMPrivate9";

import PsMPrivate10 from "./src/PsMPrivate10";

import TeamsandConditions from "./Screen.js/TeamsandConditions";

import RegisterScreen from "./Screen.js/RegisterScreen";

import Login from "./Screen.js/Login";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";



const HomeStack = createStackNavigator({

   Home: psMIndexing,

   Login: LoginScreen,

   Register: RegisterScreen,

   team: TeamsandConditions,

   Splash: Login,

   Neptune: PsMPrivate,

   Earth: PsMPrivate2,

   Mars: PsMPrivate3,

   Uranus: PsMPrivate4,

   Jupiter: PsMPrivate5,

   Venus: PsMPrivate6,

   Sun: PsMPrivate7,

   Mercury: PsMPrivate8,

   Saturn: PsMPrivate9,

   Pluto: PsMPrivate10,
   
   Menu: Menus,
 

});

HomeStack.navigationOptions = {

    tabBarLabel: "HOME",

    tabBarIcon: ({ focused }) => (

    <Icon name="home-city" size={25} color={focused ? "#20B2AA" : "#eae9e9"}/>

    )

};


const AppStack = createStackNavigator({
    Home: psMIndexing
});

const AuthStack = createStackNavigator({
    team: TeamsandConditions,
    Splash: Login,
    Login: LoginScreen,
    Register: RegisterScreen
});





export default createAppContainer( 
    createSwitchNavigator(
        {
         Loading: LoadingScreen,
         App: HomeStack,
         Auth: AuthStack
        }
        
    )
);



