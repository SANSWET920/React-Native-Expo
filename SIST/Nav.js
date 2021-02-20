import React from "react";

import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";

import { createBottomTabNavigator } from "react-navigation-tabs";

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


const HomeStack = createStackNavigator({

  Home: HomeScreen,

  Video: VideoScreen,

  Go_Back: MovieCard1,

  Computer_Science_and_Engineering: MovieCard2,

  Electronics_and_Communication_Engineering: MovieCard3,

  Mechatronics_Engineering: MovieCard4,

  Bio_and_Chemical_Engineering: MovieCard5,

  Science: MovieCard6,

  Law: MovieCard7,

  Episode: EpisodeScreen,

  Videos: VideoScreen,

});

HomeStack.navigationOptions = {

    tabBarLabel: "Home",

    tabBarIcon: ({ focused }) => (

    <Icon name="home-city" size={25} color={focused ? "#4f81c7" : "#eae9e9"}/>

    )

};



const CourseStack= createStackNavigator({

    Course: CourseScreen1

});

CourseStack.navigationOptions = {

    tabBarLabel: "Clubs",

    tabBarIcon: ({ focused }) => ( 
    
    <Ionicons name="ios-color-palette" size={25} color={focused ? "#4f81c7" : "#eae9e9"}/>

  )

};

const VideoStack= createStackNavigator({

    Course: CourseScreen2

});

VideoStack.navigationOptions = {

    tabBarLabel: "Bus Routes",

    tabBarIcon: ({ focused }) => ( <Ionicons name="ios-bus" size={25} color={

        focused ? "#4f81c7" : "#eae9e9"}/>

    )

};

const TrendingStack= createStackNavigator({

    Login: LoginScreen,

    Chat:ChatScreen

});

TrendingStack.navigationOptions = {

    tabBarLabel: "Messages",

    tabBarIcon: ({ focused }) => ( <Icon name="forum" size={25} color={

        focused ? "#4f81c7" : "#eae9e9"}/>

    )

};


const BottomTab = createBottomTabNavigator(
    
    {
        HomeStack,
        
        CourseStack,

        VideoStack,

        TrendingStack
    
    }

    );




export default createAppContainer(BottomTab);