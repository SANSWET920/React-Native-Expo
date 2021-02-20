import React from "react"

import styled from "styled-components";

import { Text,ScrollView,TouchableOpacity,Dimensions,View,Image} from "react-native";

import MedCard from '../components/MedCard';

import Carousel from "react-native-snap-carousel";


const screenWidth = Dimensions.get("window").width;


class EpisodeScreen extends React.Component {

    static navigationOptions = {

        header: null

    };

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

      render(){

        const { navigation } = this.props;

        const data = navigation.getParam("episode");

        const MedCardData = navigation.getParam("datas");

        const MovieCardData = navigation.getParam("movieData");

         return (

            <Container>

            <ScrollView>

              <CoverImage>

                 <EpisodeImage source={{ uri: data.episodeImage }} /> 

              </CoverImage>

              <Text style={{ 
                 
                 color: "Black", 

                 fontSize: 20,

                 marginTop: 10,

                 marginLeft: 10,

                 marginBottom: 10,

                 fontWeight: "bold"

                  }}

               >

                  {data.title}

               </Text>

               <ContinueText>Continue Watching</ContinueText>

  <MedCardContainer> 

    <ScrollView  

     horizontal={true}  

     showsHorizontalScrollIndicator={false}

    >
       
 {MedCardData.map((data,index) => (

    <TouchableOpacity

      key={index}

      onPress={() => {

      this.props.navigation.push("Video", {

       video: data,

       datas: MedCardData,

       movieData: MovieCardData

});

}} 

>

 <MedCard image={data.image} />

   </TouchableOpacity>

))}

 </ScrollView>

     </MedCardContainer>

  <LikeText>Recently Uploaded</LikeText>

  <Carousel 

ref={c => this.carousel = c}

data={MedCardData}

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

    marginLeft: 15,

    marginTop: 10

}}

  layout={"stack"}

  layoutCardOffset={9}

/>

              </ScrollView>

            </Container>

         )

      } 

}




export default EpisodeScreen;




const Container = styled.View`

   flex: 1;

`;

const CoverImage = styled.View`

   width: 100%;

   height: 229px;

`;

const EpisodeImage= styled.Image`

   width: 100%;

   height: 100%;
   
`;



const ContinueText = styled.Text`

  margin-top: 20px;

  margin-left:10px;

  color: black;

  font-size: 15px;

  font-weight: 600;

  text-transform: uppercase;
 
 `;



const LikeText = styled.Text`
 
margin-top: 20px;

margin-left:10px;

color: black;

font-size: 15px;

font-weight: 600;

text-transform: uppercase;

`;


const MedCardContainer = styled.View`
 
margin-top: 20px;

margin-left: 5px;

`;

