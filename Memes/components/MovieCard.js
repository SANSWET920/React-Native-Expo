import React from "react";

import styled from "styled-components";

import { LinearGradient } from "expo-linear-gradient";

import {Ionicons } from "@expo/vector-icons"



class MovieCard extends React.Component{
    
    render(){

        return(

            <Container>

               <Image source={{ uri: this.props.image}} />

               
               <LinearGradient colors={["rgba(0,0,0,0)","rgba(0,0,0,0.8)"]}

           style={{

               position: "absolute",

               width: "100%",

               height: "50%",

               top: 90,


           }}

           />

           <TextContainer>

           <Ionicons name="ios-images" color="white" size={18}/>

           <Text>Recently Uploaded</Text>

           </TextContainer>

            </Container>
        );
    }
}


export default MovieCard ;



const Container = styled.View`

   width: 130px;

   height: 172px;

   background: white;

   border-radius: 4px;

   overflow: hidden;

   margin-left: 10px;

`;



const Image = styled.Image`

 width: 100%;

 height: 100%;

 z-index: -5;

`;



const Text = styled.Text`

  
 font-size: 10px;

 font-weight: 700;

 color: white;

 padding-left: 10px;
`;

const TextContainer = styled.View`

 position: absolute;

 top: 140;

 left: 10; 
 
 flex-direction: row;

 align-items: center;

`; 
