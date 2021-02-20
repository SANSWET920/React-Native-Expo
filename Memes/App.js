import React from "react";

import { createStore } from "redux";

import BottomTab from "./Nav";

import Loading from "./Nav"

import {Provider} from 'react-redux';

import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./screens/LoginScreen";

import ChatScreen from "./screens/ChatScreen";

import { connect} from "react-redux";

import { bindActionCreators } from 'redux'

import { ReactReduxContext } from 'react-redux'







const reducer = (state = { menu: "closeMenu", log: "" }, action) => {

  switch ( action.type) {

    case "OPENMENU":

      return { ...state, menu: "openMenu" };

   case "CLOSEMENU":

      return { ...state,menu: "closeMenu" };

  
   case "LOG":
     
     return { ...state, log: action.email };

   case "OPENLOGIN":

      return { ...state,menu: "openLogin" };

    case "CLOSELOGIN":

      return { ...state,menu: "closeLogin"};

    default:
           
     return state;

  }

};


const database = createStore(reducer);

const App = () => (

  <Provider store={database}>


  

    <BottomTab />

  </Provider>

)



export default App;



