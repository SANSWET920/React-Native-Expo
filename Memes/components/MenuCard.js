import React from "react";

import styled from "styled-components";

import {Ionicons } from "@expo/vector-icons";


const MenuCard = props => (

   <Container>

    <IconView>

    <Ionicons name={props.icon} size={25}  color="#546bfb" />

    </IconView>

      <Content>

       <MenuButton>{props.text}</MenuButton>

       <MenuText>{props.caption}</MenuText>
       
      </Content>
               
   </Container>

)


export default MenuCard;



const Container = styled.View`

  flex-direction: row;

  margin: 15px 0;

`;


const IconView = styled.View`

   width: 32px;

   height: 32px;

   justify-content: center;

   align-items: center;

`;




const Content = styled.View`

   padding-left: 20px;

`;


const MenuButton = styled.Text`
   
  font-size: 25px;

  font-weight: 600;

  color: #3c4560;

`;

const MenuText = styled.Text`

 font-size: 15px;

 color: #3c4560;

 margin-top: 5px;

 opacity: 0.6;
`;