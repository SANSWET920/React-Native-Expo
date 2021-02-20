import React from "react";

import { createStackNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation";


import HomeScreen from "./screens/HomeScreen";


const HomeStack = createStackNavigator({


    Home: HomeScreen

})

const BottomTab = createBottomTabNavigator({  HomeStack })


export default createAppContainer(BottomTab);