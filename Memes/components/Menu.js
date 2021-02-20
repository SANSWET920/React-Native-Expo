import React from "react";

import styled from "styled-components";

import {  Image, ScrollView} from 'react-native';

import { LinearGradient } from "expo-linear-gradient";

import {Ionicons } from "@expo/vector-icons" 

import { Animated, TouchableOpacity, Dimensions, AsyncStorage } from "react-native";

import { connect }  from "react-redux";

import MenuCard from "./MenuCard";
import MedCard from "./MedCard";

const screenHeight = Dimensions.get("window").height;


function mapStateToProps(state){

    return { menu: state.menu};
}


function mapDispatchToProps(dispatch) {

   return {

     closeMenu: () =>

      dispatch({

       type: "CLOSEMENU"

     }),

     Login: email =>

     dispatch({

        type: "LOG",

        email: email

     })

   };

  }


class Menu extends React.Component{

    state = {

        top: new Animated.Value(screenHeight)
    };

     componentDidMount() {

      this.menu();
      
    }


    componentDidUpdate() {

       this.menu();

    }

     menu = () => {

      if(this.props.menu == "openMenu"){

        Animated.spring(this.state.top, { toValue: 150 }).start();

    }

     if(this.props.menu == "closeMenu") {

       Animated.spring(this.state.top, { toValue: screenHeight}).start();

     }

     };


     logout = () => {

      this.props.Login();

      this.props.closeMenu();

      AsyncStorage.clear();

     };

    render() {

        return(

            <AnimatedContainer style={{ position:"absolute", top: this.state.top,zindex:100 }}>
             
             <Cover>
                  
               <LinearGradient

                 colors={[ "rgba(154,205,50,100)", "rgba(64,224,208,100)" ]}

                 style={{width: "100%", height: "100%"}} 

                 />

                <View>

                  <Image 

                         source={require("../assets/logo1.png")}

                         style={{ width: "100%", height: "100%"}}

               />

               </View>

             </Cover>

            <TouchableOpacity
            
             style={{

                position: "absolute",

                top: 120,

                left: "50%",

                marginLeft: -22,

             }}

             onPress={this.props.closeMenu}

            >
            
              <CloseView>

                  <Ionicons name="ios-close" size={35} color="black" />

              </CloseView>

            </TouchableOpacity>

            <Content>

            <ScrollView>
 
            <TouchableOpacity
             
             onPress={() => {

               this.logout();

            }}

            >

            <MenuCard text="Log-Out" icon="ios-hourglass" caption="See You Soon" />

            </TouchableOpacity>

            <MenuCard text="Feedback"  icon="ios-walk" caption="MAIL-ID:ssanthanam242@gmail.com" />


             <MenuCard text="Members" icon="ios-pricetags" caption="The Advantage of being a Member is that they can email
             us their Memes which will be displayed in the App in 
             the Corresponding Categories.A amount    
             will be Credited
              for them for each   
              Meme and Applied Terms and      
              Conditions" />
 
               <MenuCard text="Objective" icon="ios-gift" caption="The Main Objective of the Application is to entertain the people.At Present Memes are the Prime Source of Entertainment.Memes makes us 
               Laugh    
               as well as it acts as a
 Messenger 
 to inform News This app 
 ensures that it Consist of all Categories      
  of Memes.Yet,another great 
               Specification  here is the Hashtag       
                Messenger where the user will be informed every Trending Happenings Promptly.It makes the Members and the User to have a Comfort    
                 Conversation.
We also Update the most liked and watched Movies and Short films 
Regularly." />
             </ScrollView>

            </Content>

          

            </AnimatedContainer>  

            
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Menu);



const Container = styled.View`

  position: absolute;

  width: 100%;

  height: 100%;

  background: white;

  z-index:100;

  border-radius: 26;

  overflow: hidden;
 
 `;


const AnimatedContainer = Animated.createAnimatedComponent(Container);


const Cover = styled.View`

 width: 100%;

 height: 142px;

`;

const Content = styled.View`

    width: 100%;

    height: 330;

    padding:30px;


`;


const CloseView = styled.View`

  width:  44px;

  height: 44px;

  border-radius: 22px;

  background: #F0FFFF;

  justify-content: center;

  align-items: center;

`;

const View = styled.View`

  position: absolute;

  width: 260px;

  height: 150px;

  left: 40px;

  top:-20

`;
