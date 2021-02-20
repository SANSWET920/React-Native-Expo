import React from "react";

import styled from "styled-components";

import Carousel from "react-native-snap-carousel";

import { View, Image, Dimensions,Text,StatusBar,TouchableOpacity } from "react-native";

import firebaseApp from "./FirebaseConfig";




const screenWidth = Dimensions.get("window").width;


class CourseScreen2 extends React.Component {

  static navigationOptions = {

    header: null

  };

  
  state = {

   MovieCardData2: [],

   MedCardData: []

  }



  componentDidMount() {

    console.disableYellowBox = true;
  
    this.Moviedatabase2 = firebaseApp
  
    .database()
  
    .ref()
  
    .child("MovieCardData2");
  
    this.getMovieCardData2(this.Moviedatabase2);

    this.Meddatabase = firebaseApp

   .database()

   .ref()

   .child("MedCardData");

   this.getMedCardData(this.Meddatabase);

   }

 getMovieCardData2 = database =>{

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

      MovieCardData2: items

    });

   });


  };


  getMedCardData = database =>{


    database.on("value", snap => {
  
      let items = [];
  
      snap.forEach(child => {
  
        items.push({
  
          title: child.val().title,
  
          image: child.val().image,
  
          video: child.val().video
  
        });
  
      });
  
      this.setState({
  
         MedCardData: items
  
      });
  
     });
  
  
    };
  
  




  _renderItem = ({ item, index }) => {

     return (

      <TouchableOpacity 

      onPress={() => {
      
      this.props.navigation.push("", {

         episode: item,

         datas: this.state.MedCardData,

         movieData: this.state.MovieCardData

  });
      
      }}
      
      >

        <View style={{ borderRadius: 10, overflow: "hidden" }}>

         <Image 

         source={{ uri: item.image }}  

         style={{ width: "100%", height: 350 }} />

        </View>

       </TouchableOpacity>

     )

  }


     render(){

          return (
                    
            <Container>

            <StatusBar hidden />

            <Circle1 />

            <Circle2 />

            <Circle3 />

            <Latest>

                <Text style={{

                  fontSize: 15,

                  fontWeight: "bold"

                }}
                
                >

               Trends Movies

                </Text>

            </Latest>
            
            <SlideContainer>

              <Carousel 

                 ref={c => this.carousel = c}

                 data={this.state.MovieCardData2}

                 renderItem={this._renderItem}

                 sliderWidth={screenWidth}

                 itemWidth={240}

                 inactiveSlideScale={0.65}

                 inactiveSlideOpacity={1}

                 inactiveSlideShift={20}

                 enableMomentum={true}

                 activeSlideAlignment={"start"}

                 loop={true}

                 autoplay={true}

                 autoplayDelay={3000}

                 autoplayInterval={2000}

                 contentContainerCustomStyle={{

                     marginLeft: 60,

                     height: 500

                 }}

              /> 

              </SlideContainer> 

            </Container>

          )
     
    }

}

export default CourseScreen2;


const Container = styled.View`

   flex: 1;

   justify-content: center;

   align-items: center;

   background:#e2e5ef;

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

  left: 120px;

  top: 28px;

  background: #FFFFFF;

  border-radius: 8px;

  justify-content: center;

  align-items: center;

`;


const SlideContainer = styled.View`

   margin-top: 200px;

   width: ${screenWidth};

   height: 500px;

`;






const  MovieCardData2 = [
  {
    image:"ht019/07/28/Kamal-Haasan-rocking-recent-Stills-from-Bigg-Boss-Tamil-1.png?quality=90&zoom=1&ssl=1",

    title: "Bigg Boss Season "
  },

 {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRO1LmkwOmNHD88v8OxK0sjxdgpj8yWRrIZqhP5hCy6FpdMkfd3&usqp=CAU",

    title: "2"
 },

 { 
    image: "https://static.toiimg.com/photo/msid-71358606/71358606.jpg?215080",
    
    title: "3"
 },
 
 {
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2Lnoh9BfwEimPwjOJ3faVrFHZIyOZLLPT5Ng7keoiYJVVICMF&usqp=CAU",

   title: "4"
 }
];

 

