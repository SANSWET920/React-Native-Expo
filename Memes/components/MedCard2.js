import React from "react";

import styled from "styled-components";

import { LinearGradient } from "expo-linear-gradient";

import {Ionicons } from "@expo/vector-icons" 



class MedCard2 extends React.Component{
    
    render(){

        return(

            <Container>

               <Image source={{ uri : this.props.image }} />

               <LinearGradient colors={["rgba(0,0,0,0)","rgba(0,0,0,0.8)"]}

           style={{

               position: "absolute",

               width: "100%",

               height: "50%",

               top: 55,


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


export default MedCard2;



const Container = styled.View`

   width: 197px;

   height: 110px;

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

  
 font-size: 15px;

 font-weight: 700;

 color: white;

 padding-left: 10px;
`;


const TextContainer = styled.View`

 position: absolute;

 top: 80;

 left: 10; 
 
 flex-direction: row;

 align-items: center;

`; 

 