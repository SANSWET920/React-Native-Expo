import React from "react";

import styled from "styled-components";

import Carousel from "react-native-snap-carousel";

import { View, Image, Dimensions, StatusBar, Text, TouchableOpacity } from "react-native";

import firebaseApp from "./FirebaseConfig";

import {Ionicons } from "@expo/vector-icons" 



const screenWidth = Dimensions.get("window").width;

class MovieCard3 extends React.Component {

  
  static navigationOptions = {

    header: null

  };

  
  state = {

    MovieCardScreen3: []
 
  }
 
 
   componentDidMount() {
 
     console.disableYellowBox = true;
   
     this.Moviedatabase3 = firebaseApp
   
     .database()
   
     .ref()
   
     .child("MovieCardScreen3");
   
     this.getMovieCardScreen3(this.Moviedatabase3);

   }

     getMovieCardScreen3 = database =>{

      database.on("value", snap => {
    
        let items = [];
    
        snap.forEach(child => {
    
          items.push({
    
            image: child.val().image,
    
            episodeImage: child.val().episodeImage,
    
            title: child.val().title
    
          });
    
        });
    
        this.setState({
    
          MovieCardScreen3: items
    
        });
    
       });

      };

       _renderItem = ({ item, index }) => {

        return( 

            <View style={{ borderRadius: 10, overflow: "hidden" }}>

                <Image 
                
                source={{ uri: item.image }} 
                
                style={{ width: "100%", height: 300}} />

            </View>
          

        )

    }

    render(){
 
      return (

             <Container>

             <StatusBar hidden />

              <Circle1 />

              <Circle2 />

              <Circle3 />

              
              <Back>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                     <Ionicons name="ios-arrow-round-back" size={35} color="black"></Ionicons>
                 </TouchableOpacity>
              </Back>

              <Latest>

           <Text style={{

                fontSize: 15,

                fontWeight: "bold"

          }}
    
    >

         ENGLISH MEMES

          </Text>

      </Latest>
      

              <SlideContainer>

                 <Carousel 

                      ref={c => this.Carousel = c}

                      data={this.state.MovieCardScreen3}

                      renderItem={this._renderItem}

                      sliderWidth={screenWidth}

                      itemWidth={300}

                      inactiveSlideScale={0.8}

                      inactiveSlideShift={40}

                      enableMomentum={true}

                      activeSlideAlignment={"start"}

                      loop={true}

                      contentContainerCustomStyle={{
                      
                      marginLeft: 30

                      }}

                 />

               </SlideContainer>

               <IconContainer>
               
               <Ionicons

                  name="ios-arrow-back"

                  size={40}

                  color="black"

              /> 

              </IconContainer>

              <IconContainer1>
               
               <Ionicons

                  name="ios-arrow-forward"

                  size={40}

                  color="black"

              /> 

              </IconContainer1>
                 
              
             </Container>

             

      )

    }

}

export default MovieCard3;


const Container = styled.View`

  flex: 1;

  justify-content: center;

  align-items: center;

  background:#e2e5ef;

`;



const SlideContainer = styled.View`

  margin-top: 130px;

  width: ${screenWidth};

  height: 400px;

`;


const Circle1 = styled.View`

  position: absolute;
   
  width: 682px;

  height: 682px;

  left: -135px;

  top: -119px;

  background: #eff1f7;

  border-radius: 341px;

`;



const Circle2 = styled.View`

  position: absolute;
   
  width: 606px;

  height: 606px;

  left: -18px;

  top: -221px;

  background: #EBEBF6;

  border-radius: 341px;

`;


const Circle3 = styled.View`

  position: absolute;
   
  width: 323px;

  height: 323px;

  left: 206px;

  top: -119px;

  background: #F4F6FA;

  border-radius: 161.5px;

`;




const Latest = styled.View`

  position: absolute;
   
  width: 150px;

  height: 42px;

  left: 110px;

  top: 28px;

  background: #FFFFFF;

  border-radius: 8px;

  justify-content: center;

  align-items: center;

`;

const IconContainer = styled.View`

  position: absolute;

  height: 10px;

  width:250px;

  top: 520px;
`;


const IconContainer1 = styled.View`

  position: absolute;

  height: 10px;

  width:60px;

  top: 520px;

  right: 10px;
  
`;


const Back =  styled.View`
   
  left: -150px;

  top: 15px;
`;

 
const MovieCardScreen3 = [
    {
      image:"https://cdn.pinkvilla.com/files/styles/contentpreview/public/kamal_haasan.jpg?itok=CCgXgTDy",
  
      title: "Bigg Boss Season 1"
    },
  
   {
      image: "https://content-images.jilljuck.com/medium/a042cf6b-b912-4bc1-8ebb-1a23f2eba60a.jpg",
  
      title: "2"
   },
  
   { 
      image: "https://static.toiimg.com/photo/msid-71358606/71358606.jpg?215080",
      
      title: "3"
   },
   
   {
     image: "https://i.pinimg.com/736x/99/16/24/991624828ac61c8d9bf359e0474c339a.jpg",
  
     title: "4"
   }
  ]