import React from 'react';

import styled from 'styled-components';

import { View,Image,Dimensions,Text } from "react-native";

import Carousel from "react-native-snap-carousel";


const screenWidth = Dimensions.get("window").width;


export default class BigCard extends React.Component {


  _renderItem({ item, index }) {

    return (

       <View style={{ borderRadius: 10, overflow: "hidden" }}>

         <Image 

            source={{

            uri: item.image

         }}

         style={{

            width: "100%",

            height: 220 

         }}

   
      />

       </View>

    );

  }


  componentDidMount() {

    console.log(this.props.data);

  }
     
   render() {

    return(

     <Container>

    <Carousel 

   ref={c => this.carousel = c}

   data={this.props.data}

   renderItem={this._renderItem}

   sliderWidth={screenWidth}

   itemWidth={340}

   inactiveSlideScale={0.95}

   inactiveSlideOpacity={1}

   enableMomentum={true}

   activeSlideAlignment={"start"}

   loop={true}

   autoplay={true}

   autoplayDelay={3000}

   autoplayInterval={2000}

   contentContainerCustomStyle={{

       height: 220,

       marginLeft: 4

      
   }}

/>



              </Container>

        );
    }
}

const Container = styled.View`
  
  width: ${screenWidth};

  height: 220px;

`;










