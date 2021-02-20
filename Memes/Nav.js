import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";

import { createBottomTabNavigator } from "react-navigation-tabs"

import HomeScreen from "./screens/HomeScreen";

import VideoScreen from "./screens/VideoScreen";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import EpisodeScreen from "./screens/EpisodeScreen";

import LoginScreen from "./screens/LoginScreen";

import {Ionicons } from "@expo/vector-icons";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import ChatScreen from "./screens/ChatScreen";

import MovieCard1 from "./screens/MovieCard1";

import MovieCard2 from "./screens/MovieCard2";

import MovieCard3 from "./screens/MovieCard3";

import MovieCard4 from "./screens/MovieCard4";

import MovieCard5 from "./screens/MovieCard5";

import MovieCard6 from "./screens/MovieCard6";

import MovieCard7 from "./screens/MovieCard7";

import CourseScreen1 from "./screens/CourseScreen1";

import CourseScreen2 from "./screens/CourseScreen2";

import LoadingScreen from "./screens/LoadingScreen";

import LoginScreen1 from "./screens/LoginScreen1";

import RegisterScreen from "./screens/RegisterScreen";

import Settings from "./screens/Settings";

import firebase from "firebase";

const HomeStack = createStackNavigator({

  Home: HomeScreen,

  Video: VideoScreen,

  Trending_Memes: MovieCard1,

  Tamil_Memes: MovieCard2,

  English_Memes: MovieCard3,

  Comedy_Memes: MovieCard4,

  Romantic_Memes: MovieCard5,

  Single_Pasanga_Memes: MovieCard6,

  ADULT_Memes: MovieCard7,

  Episode: EpisodeScreen,

  Videos: VideoScreen,

  Login: LoginScreen,

  Chat:ChatScreen,

  Logins: LoginScreen1,

  Register: RegisterScreen,


});

HomeStack.navigationOptions = {

    tabBarLabel: "HOME",

    tabBarIcon: ({ focused }) => (

    <Icon name="home-city" size={25} color={focused ? "#20B2AA" : "#eae9e9"}/>

    )

};



const CourseStack= createStackNavigator({

    Course: CourseScreen1

});

CourseStack.navigationOptions = {

    tabBarLabel: "SHORTFILM",

    tabBarIcon: ({ focused }) => ( 
        
    <Ionicons name="ios-tv" size={25} color={focused ? "#20B2AA" : "#eae9e9"}/>

  )

};

const VideoStack= createStackNavigator({

    Course: CourseScreen2

});

VideoStack.navigationOptions = {

    tabBarLabel: "MOVIES",

    tabBarIcon: ({ focused }) => ( <Icon name="filmstrip" size={25} color={

        focused ? "#20B2AA" : "#eae9e9"}/>

    )

};

const SavedStack= createStackNavigator({
 
    Course: Settings
  

});

SavedStack.navigationOptions = {

    tabBarLabel: "SETTING",

    tabBarIcon: ({ focused }) => ( <Ionicons name="ios-today" size={25} color={

        focused ? "#20B2AA" : "#eae9e9"}/>

    )

};

const AppStack = createStackNavigator({
    Home: HomeScreen
});

const AuthStack = createStackNavigator({
    Login: LoginScreen1,
    Register: RegisterScreen
});



const BottomTab = createBottomTabNavigator(

    
    {
        HomeStack,
        
        CourseStack,

        VideoStack,

        SavedStack,

    },
    );

export default createAppContainer( 
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: BottomTab,
            Auth: AuthStack
        }
        
    )
);



