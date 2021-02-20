import React from 'react';

import { StatusBar, ScrollView, View, Image,  Text} from 'react-native';

import styled from 'styled-components';

import BigCard from "../components/BigCard";

import MedCard2 from "../components/MedCard2"

import MedCard3 from "../components/MedCard3";

import MedCard4 from "../components/MedCard4";

import MedCard5 from "../components/MedCard5";

import MedCard6 from "../components/MedCard6";

import MedCard7 from "../components/MedCard7";

import MedCard from '../components/MedCard';

import {Ionicons } from "@expo/vector-icons" 

import { TouchableOpacity,Animated,Dimensions} from "react-native";

import Menu from "../components/Menu";

import { connect } from "react-redux";

import MovieCard from '../components/MovieCard';

import firebaseApp from "./FirebaseConfig";

import Login from '../components/Login';

import App from "../App";

import LoginScreen from './LoginScreen';

import firebase from "firebase";



const screenHeight = Dimensions.get("window").height;


function mapStateToProps(state) {
  
  return { menu: state.menu, log: state.log };

}

function mapDispatchToProps(dispatch) {

   return { 

       openMenu: () =>

        dispatch({

          type: "OPENMENU"

       }),

       openLogin: () =>

       dispatch({

          type: "OPENLOGIN"

       })

   };

}


class HomeScreen extends React.Component {

  static navigationOptions = {

    header: null

  };

   

  
  state = {
    email: "",
    displayName: ""
}

componentDidMount() {
    const {email,displayName} = firebase.auth().currentUser;

    this.setState({ email, displayName });

}

signOutUser = () => {
    firebase.auth().signOut();
};



  state = {

    left:10,

    top: new Animated.Value(screenHeight),

    opacity: new Animated.Value(0),

    MedCardData: [],

    BigCardData: [],

    MovieCardData: [],

    Season1: [],

    MovieCardScreen1: [],

    MovieCardScreen2: [],

    MovieCardScreen3: [],

    MovieCardScreen4: [],

    MovieCardScreen5: [],

    MovieCardScreen6: [],

    MovieCardScreen7: [],

    Season2: [],

    Season3: [],

    Season4: [],

    Season5: [],

    Season6: [],

  };


 componentDidMount() {

  console.disableYellowBox = true;

  this.Bigdatabase = firebaseApp

  .database()

  .ref()

  .child("BigCardData");

  this.getBigCardData(this.Bigdatabase);

  this.Meddatabase = firebaseApp

  .database()

  .ref()

  .child("MedCardData");

  this.getMedCardData(this.Meddatabase);

  this.Moviedatabase = firebaseApp
  
  .database()

  .ref()

  .child("MovieCardData");

  this.getMovieCardData(this.Moviedatabase);

  this.Meddatabase2 = firebaseApp

  .database()

  .ref()

  .child("Season1");

  this.getSeason1(this.Meddatabase2);

  this.Moviedatabase1 = firebaseApp
  
  .database()

  .ref()

  .child("MovieCardScreen1");

  this.getMovieCardScreen1(this.Moviedatabase1);

  this.Moviedatabase2 = firebaseApp
  
  .database()

  .ref()

  .child("MovieCardScreen2");

  this.getMovieCardScreen2(this.Moviedatabase2);

  
  this.Moviedatabase3 = firebaseApp
  
  .database()

  .ref()

  .child("MovieCardScreen3");

  this.getMovieCardScreen3(this.Moviedatabase3);

  this.Moviedatabase4 = firebaseApp
  
  .database()

  .ref()

  .child("MovieCardScreen4");

  this.getMovieCardScreen4(this.Moviedatabase4);

  
  this.Moviedatabase5= firebaseApp
  
  .database()

  .ref()

  .child("MovieCardScreen5");

  this.getMovieCardScreen5(this.Moviedatabase5);


    
  this.Moviedatabase6= firebaseApp
  
  .database()

  .ref()

  .child("MovieCardScreen6");

  this.getMovieCardScreen6(this.Moviedatabase6);

  this.Moviedatabase7= firebaseApp
  
  .database()

  .ref()

  .child("MovieCardScreen7");

  this.getMovieCardScreen7(this.Moviedatabase7);

  

  this.Moviedatabase2 = firebaseApp
  
  .database()

  .ref()

  .child("Season2");

  this.getSeason2(this.Moviedatabase2);

  
  this.Moviedatabase3 = firebaseApp
  
  .database()

  .ref()

  .child("Season3");

  this.getSeason3(this.Moviedatabase3);

  
  this.Moviedatabase4 = firebaseApp
  
  .database()

  .ref()

  .child("Season4");

  this.getSeason4(this.Moviedatabase4);

  this.Moviedatabase5 = firebaseApp
  
  .database()

  .ref()

  .child("Season5");

  this.getSeason5(this.Moviedatabase5);

  this.Moviedatabase6 = firebaseApp
  
  .database()

  .ref()

  .child("Season6");

  this.getSeason6(this.Moviedatabase6);

 }


 getBigCardData = database =>{

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

      BigCardData: items

    });

  

   });


  };
  

 


  getMedCardData = database =>{

  database.on("value", (snap) => {

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


  getMovieCardData = database =>{

    database.on("value", (snap) => {
  
      let items = [];
  
      snap.forEach(child => {
  
        items.push({

          image: child.val().image,

          episodeImage: child.val().episodeImage,

          title: child.val().title
  
        });
  
      });
  
      this.setState({
  
        MovieCardData: items
  
      });
  
      console.log(items);
  
     });
  
  
    };

    

  getSeason1 = database =>{

    database.on("value", (snap) => {
  
      let items = [];
  
      snap.forEach(child => {
  
        items.push({
  
          title: child.val().title,
  
          image: child.val().image,
  
          video: child.val().video
  
        });
  
      });
  
      this.setState({
  
         Season1: items
  
      });
  
    
  
     });
  
  
    };

    
  getMovieCardScreen1 = database =>{

    database.on("value", (snap) => {
  
      let items = [];
  
      snap.forEach(child => {
  
        items.push({

          image: child.val().image,

          episodeImage: child.val().episodeImage,

          title: child.val().title
  
        });
  
      });
  
      this.setState({
  
        MovieCardScreen1: items
  
      });
  
      console.log(items);
  
     });
  
  
    };


        
  getMovieCardScreen2 = database =>{

    database.on("value", (snap) => {
  
      let items = [];
  
      snap.forEach(child => {
  
        items.push({

          image: child.val().image,

          episodeImage: child.val().episodeImage,

          title: child.val().title
  
        });
  
      });
  
      this.setState({
  
        MovieCardScreen2: items
  
      });
  
      console.log(items);
  
     });
  
  
    };

            
  getMovieCardScreen3 = database =>{

    database.on("value", (snap) => {
  
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
  
      console.log(items);
  
     });
  
  
    };

              
  getMovieCardScreen4 = database =>{

    database.on("value", (snap) => {
  
      let items = [];
  
      snap.forEach(child => {
  
        items.push({

          image: child.val().image,

          episodeImage: child.val().episodeImage,

          title: child.val().title
  
        });
  
      });
  
      this.setState({
  
        MovieCardScreen4: items
  
      });
  
      console.log(items);
  
     });
  
  
    };


                 
  getMovieCardScreen5 = database =>{

    database.on("value", (snap) => {
  
      let items = [];
  
      snap.forEach(child => {
  
        items.push({

          image: child.val().image,

          episodeImage: child.val().episodeImage,

          title: child.val().title
  
        });
  
      });
  
      this.setState({
  
        MovieCardScreen5: items
  
      });
  
      console.log(items);
  
     });
  
  
    };

                     
  getMovieCardScreen6 = database =>{

    database.on("value", (snap) => {
  
      let items = [];
  
      snap.forEach(child => {
  
        items.push({

          image: child.val().image,

          episodeImage: child.val().episodeImage,

          title: child.val().title
  
        });
  
      });
  
      this.setState({
  
        MovieCardScreen6: items
  
      });
  
      console.log(items);
  
     });
  
  
    };


                         
  getMovieCardScreen7 = database =>{

    database.on("value", (snap) => {
  
      let items = [];
  
      snap.forEach(child => {
  
        items.push({

          image: child.val().image,

          episodeImage: child.val().episodeImage,

          title: child.val().title
  
        });
  
      });
  
      this.setState({
  
        MovieCardScreen7: items
  
      });
  
      console.log(items);
  
     });
  
  
    };



        
  getSeason2 = database =>{

    database.on("value", (snap) => {
  
      let items = [];
  
      snap.forEach(child => {
  
        items.push({

          image: child.val().image,

          episodeImage: child.val().episodeImage,

          title: child.val().title
  
        });
  
      });
  
      this.setState({
  
        Season2: items
  
      });
  
      console.log(items);
  
     });
  
  
    };

            
  getSeason3 = database =>{

    database.on("value", (snap) => {
  
      let items = [];
  
      snap.forEach(child => {
  
        items.push({

          image: child.val().image,

          episodeImage: child.val().episodeImage,

          title: child.val().title
  
        });
  
      });
  
      this.setState({
  
        Season3: items
  
      });
  
      console.log(items);
  
     });
  
  
    };

                
  getSeason4 = database =>{

    database.on("value", (snap) => {
  
      let items = [];
  
      snap.forEach(child => {
  
        items.push({

          image: child.val().image,

          episodeImage: child.val().episodeImage,

          title: child.val().title
  
        });
  
      });
  
      this.setState({
  
        Season4: items
  
      });
  
      console.log(items);
  
     });
  
  
    };


                    
  getSeason5 = database =>{

    database.on("value", (snap) => {
  
      let items = [];
  
      snap.forEach(child => {
  
        items.push({

          image: child.val().image,

          episodeImage: child.val().episodeImage,

          title: child.val().title
  
        });
  
      });
  
      this.setState({
  
        Season5: items
  
      });
  
      console.log(items);
  
     });
  
  
    };

                        
  getSeason6 = database =>{

    database.on("value", (snap) => {
  
      let items = [];
  
      snap.forEach(child => {
  
        items.push({

          image: child.val().image,

          episodeImage: child.val().episodeImage,

          title: child.val().title
  
        });
  
      });
  
      this.setState({
  
        Season6: items
  
      });
  
      console.log(items);
  
     });
  
  
    };


  componentDidUpdate() {

   this.blackScreen()

  }

  blackScreen() {

   if (this.props.menu == "openMenu") {

    Animated.timing(this.state.top, { toValue: 0 ,duration: 10 }).start();

    Animated.timing(this.state.opacity, { 
      
      toValue: 0.6 ,
      
      duration: 500 
    
    }).start();

   }
  
    if (this.props.menu == "closeMenu") {

      Animated.timing(this.state.top, {
        
        toValue: screenHeight,
        
        duration: 10 
      
      }).start();

      Animated.spring(this.state.opacity, {
        
        toValue: 0

      }).start();

    }

  }

  handleLogin = () => {

    if (this.props.log) {

      this.props.openMenu();

    } else {

      this.props.openLogin();

    }

  }


  render() {

  return (

     <Root>

    <Main>

    <ScrollView showsVerticalScrollIndicator={false}>

         <StatusBar hidden />
  
         <Header>

         <TouchableOpacity 

         onPress={this.handleLogin} 

              style={{
               
                top:12,

                left: this.state.left,
                 
                position:"absolute",

                zIndex: 100
               
            }} 
        >

             <Ionicons

              name="ios-browsers"

              size={35}

              color="black"

                 />

         </TouchableOpacity>        
        
            <View>

            <Image 

                 source={require("../assets/logo1.png")}

                 style={{ width: 200, height:70, left:95,left:70,top:-10}}

            />

            </View>


            <TouchableOpacity
              style={{
               
                top:12,

                left: 317,
                 
                position:"absolute",

                zIndex: 100
              }}
            
            
             
                
                onPress={() => {

                this.props.navigation.push("Login", {

                });

              }} 
>

          <Ionicons

             name="ios-easel"

             size={35}

             color="black"

         />

          </TouchableOpacity>

          
            
         </Header>
          
        <BigCardContainer>

            <BigCard data={this.state.BigCardData} />

        </BigCardContainer>

        <Header1>

        <ContinueText>Continue Watching</ContinueText>

        <Bottomv> 

          <Ionicons

            name="ios-bicycle"

            size={30}

            color="grey"
  
          />      

        </Bottomv>      

      </Header1>
        
         <MedCardContainer> 

         <ScrollView  
         
         horizontal={true}  
         
         showsHorizontalScrollIndicator={false}
         
         >

           {this.state.MedCardData.map((data,index) => (

               <TouchableOpacity

                key={index}
                
                 onPress={() => {

                 this.props.navigation.push("Video", {

                   video: data,

                   datas: this.state.MedCardData,

                   movieData: this.state.MovieCardData

                 });

               }} 

            >

             <MedCard image={data.image} />

              </TouchableOpacity>

           ))}

           </ScrollView>

           </MedCardContainer>

           <Header1>

           <LikeText>You May Also Like</LikeText>  

           <Bottomv> 

              <Ionicons

                name="ios-bicycle"

                size={30}

                color="grey"

               />      

          </Bottomv>      

        </Header1>

           <MovieCardContainer> 

             <ScrollView  
         
               horizontal={true}  
         
               showsHorizontalScrollIndicator={false}
         
         >



           {this.state.MovieCardData.map((data,index) => (


               <TouchableOpacity

                key={index}
                
                 onPress={() => {

                 this.props.navigation.push("Trending_Memes", {

                   video: data,

                   datas: this.state.MedCardData,

                   movieData: this.state.MovieCardData

                 });

               }} 

            >

                <MovieCard image={data.image} />
        
              </TouchableOpacity>

           ))}

           </ScrollView>

           </MovieCardContainer>

        <Header2>

<ContinueText>Tamil Memes</ContinueText>

<Bottomv> 

  <Ionicons

    name="ios-bicycle"

    size={30}

    color="grey"

  />      

</Bottomv>      

</Header2>
   
   <MedCardContainer2> 

<ScrollView  

horizontal={true}  

showsHorizontalScrollIndicator={false}

>

  {this.state.Season1.map((data,index) => (

      <TouchableOpacity

       key={index}
       
        onPress={() => {

        this.props.navigation.push("Tamil_Memes", {

          video: data,

          datas: this.state.MedCardData,

          movieData: this.state.MovieCardData

        });

      }} 

   >

    <MedCard2 image={data.image} />

     </TouchableOpacity>

  ))}

  </ScrollView>

  </MedCardContainer2>

  <Header3>

<ContinueText1>ENGLISH Memes</ContinueText1>

<Bottomv1> 

  <Ionicons

    name="ios-bicycle"

    size={30}

    color="grey"

  />      

</Bottomv1>      

</Header3>
   
   <MedCardContainer2> 

<ScrollView  

horizontal={true}  

showsHorizontalScrollIndicator={false}

>

  {this.state.Season2.map((data,index) => (

      <TouchableOpacity

       key={index}
       
        onPress={() => {

        this.props.navigation.push("English_Memes", {

          video: data,

          datas: this.state.MedCardData,

          movieData: this.state.MovieCardData

        });

      }} 

   >

    <MedCard3 image={data.image} />

     </TouchableOpacity>

  ))}

  </ScrollView>

  </MedCardContainer2>

  <Header4>

<ContinueText2>COMEDY Memes</ContinueText2>

<Bottomv2> 

  <Ionicons

    name="ios-bicycle"

    size={30}

    color="grey"

  />      

</Bottomv2>      

</Header4>
   
   <MedCardContainer3> 

<ScrollView  

horizontal={true}  

showsHorizontalScrollIndicator={false}

>

  {this.state.Season3.map((data,index) => (

      <TouchableOpacity

       key={index}
       
        onPress={() => {

        this.props.navigation.push("Comedy_Memes", {

          video: data,

          datas: this.state.MedCardData,

          movieData: this.state.MovieCardData

        });

      }} 

   >

    <MedCard4 image={data.image} />

     </TouchableOpacity>

  ))}

  </ScrollView>

  </MedCardContainer3>

  
  <Header5>

<ContinueText3>romantic memes</ContinueText3>

<Bottomv3> 

  <Ionicons

    name="ios-bicycle"

    size={30}

    color="grey"

  />      

</Bottomv3>      

</Header5>
   
   <MedCardContainer4> 

<ScrollView  

horizontal={true}  

showsHorizontalScrollIndicator={false}

>

  {this.state.Season4.map((data,index) => (

      <TouchableOpacity

       key={index}
       
        onPress={() => {

        this.props.navigation.push("Romantic_Memes", {

          video: data,

          datas: this.state.MedCardData,

          movieData: this.state.MovieCardData

        });

      }} 

   >

    <MedCard5 image={data.image} />

     </TouchableOpacity>

  ))}

  </ScrollView>

  </MedCardContainer4>

    
  <Header6>

<ContinueText4>single pasanga memes</ContinueText4>

<Bottomv4> 

  <Ionicons

    name="ios-bicycle"

    size={30}

    color="grey"

  />      

</Bottomv4>      

</Header6>
   
   <MedCardContainer5> 

<ScrollView  

horizontal={true}  

showsHorizontalScrollIndicator={false}

>

  {this.state.Season5.map((data,index) => (

      <TouchableOpacity

       key={index}
       
        onPress={() => {

        this.props.navigation.push("Single_Pasanga_Memes", {

          video: data,

          datas: this.state.MedCardData,

          movieData: this.state.MovieCardData

        });

      }} 

   >

    <MedCard6 image={data.image} />

     </TouchableOpacity>

  ))}

  </ScrollView>

  </MedCardContainer5>

      
  <Header7>

<ContinueText5>adult memes</ContinueText5>

<Bottomv5> 

  <Ionicons

    name="ios-bicycle"

    size={30}

    color="grey"

  />      

</Bottomv5>      

</Header7>
   
   <MedCardContainer6> 

<ScrollView  

horizontal={true}  

showsHorizontalScrollIndicator={false}

>

  {this.state.Season6.map((data,index) => (

      <TouchableOpacity

       key={index}
       
        onPress={() => {

        this.props.navigation.push("ADULT_Memes", {

          video: data,

          datas: this.state.MedCardData,

          movieData: this.state.MovieCardData

        });

      }} 

   >

    <MedCard7 image={data.image} />

     </TouchableOpacity>

  ))}

  </ScrollView>

  </MedCardContainer6>
      
         </ScrollView>

        </Main>

        <AnimatedBlack 
        
        style={{ top: this.state.top, opacity: this.state.opacity}} 

        />


        <Menu />

      
        <Login />
    
       </Root>
       
    );

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


const Root = styled.View`

  flex: 1;

`;

const Main = styled.View`
  
  flex: 1;

  background-color: #eaeaea;

`;


const Black = styled.View`

  position: absolute;

  width: 100%;

  height: 100%;

  background-color:black;

  opacity: 0.6;
`;


const AnimatedBlack = Animated.createAnimatedComponent(Black);


const Header = styled.View`

 width: 100%;

 height: 56px;
 
 background:#FFFFFF;


`;

const Header1 = styled.View`

 width: 100%;

 height: 40px;
 
`;


const Header2 = styled.View`

 width: 100%;

 height: 40px;

 margin-top: -25px;
 
`;


const Header3 = styled.View`

 width: 100%;

 height: 40px;

 margin-top: -1px;
 
`;


const Header4 = styled.View`

 width: 100%;

 height: 40px;

 margin-top: -1px;
 
`;


const Header5 = styled.View`

 width: 100%;

 height: 40px;

 margin-top: -1px;
 
`;


const Header6 = styled.View`

 width: 100%;

 height: 40px;

 margin-top: -1px;
 
`;


const Header7 = styled.View`

 width: 100%;

 height: 40px;

 margin-top: -1px;
 
`;


const Logo = styled.Text`

 margin-top: 13px;

 margin-left: 50px;

 color: black;

 font-size: 29px;

 font-weight: bold;

`;



const BigCardContainer = styled.View`

 margin-top: 15px;

 `;


const ContinueText = styled.Text`

  margin-top: 20px;

  margin-left:10px;

  color: black;

  font-size: 15px;

  font-weight: bold;

  text-transform: uppercase;
 
 `;

 
const ContinueText1 = styled.Text`

margin-top: 20px;

margin-left:10px;

color: black;

font-size: 15px;

font-weight: bold;

text-transform: uppercase;

`;

 
const ContinueText2 = styled.Text`

margin-top: 20px;

margin-left:10px;

color: black;

font-size: 15px;

font-weight: bold;

text-transform: uppercase;

`;


const ContinueText3 = styled.Text`

margin-top: 20px;

margin-left:10px;

color: black;

font-size: 15px;

font-weight: bold;

text-transform: uppercase;

`;


const ContinueText4 = styled.Text`

margin-top: 20px;

margin-left:10px;

color: black;

font-size: 15px;

font-weight: bold;

text-transform: uppercase;

`;

const ContinueText5 = styled.Text`

margin-top: 20px;

margin-left:10px;

color: black;

font-size: 15px;

font-weight: bold;

text-transform: uppercase;

`;






const LikeText = styled.Text`
 
margin-top: 20px;

margin-left:10px;

color: black;

font-size: 15px;

font-weight: bold;

text-transform: uppercase;

`;


const Bottomv= styled.Text`
 
width: 100%;

height: 56px;

position: absolute;

 top: 12px;

 right: 5px;

 left: 310px;

`;


const Bottomv1= styled.Text`
 
width: 100%;

height: 56px;

position: absolute;

 top: 12px;

 right: 5px;

 left: 310px;

`;


const Bottomv2= styled.Text`
 
width: 100%;

height: 56px;

position: absolute;

 top: 12px;

 right: 5px;

 left: 310px;

`;


const Bottomv3= styled.Text`
 
width: 100%;

height: 56px;

position: absolute;

 top: 12px;

 right: 5px;

 left: 310px;

`;


const Bottomv4= styled.Text`
 
width: 100%;

height: 56px;

position: absolute;

 top: 12px;

 right: 5px;

 left: 310px;

`;


const Bottomv5= styled.Text`
 
width: 100%;

height: 56px;

position: absolute;

 top: 12px;

 right: 5px;

 left: 310px;

`;
 
 
 
 
 const MedCardContainer = styled.View`
 
  margin-top: 20px;

  margin-left: 5px;
 
 `;

 
const MedCardContainer2 = styled.View`

margin-top: 20px;

margin-left: 5px;

`;

 
const MedCardContainer3 = styled.View`

margin-top: 20px;

margin-left: 5px;

`;

 
const MedCardContainer4 = styled.View`

margin-top: 20px;

margin-left: 5px;

`;

 
const MedCardContainer5 = styled.View`

margin-top: 20px;

margin-left: 5px;

`;

 
const MedCardContainer6 = styled.View`

margin-top: 20px;

margin-bottom: 20px;

margin-left: 5px;

`;


 
const MovieCardContainer = styled.View`
 
margin-top: 20px;

margin-bottom: 20px;

margin-left: 5px;

`;

const View10 = styled.View`
  
    width: 100px;

    height: 100px;

    top: -60;

    left: 320;


`;






 const BigCardData = [
  {
    image: "https://upload.wikimedia.org/wikipedia/en/8/85/Bigg_Boss_Tamil_3.jpg",

    title: "1"

  },

 {
    image: "https://i1.ytimg.com/vi/-mLcC7nnfwE/maxresdefault.jpg",

    title:"2"
 },

 {
    image: "https://c.ndtvimg.com/2019-10/ra39il58_bigg-boss-tamil-3-grand-finale-_625x300_07_October_19.jpg",

    title:"3"
 },

 
 {
   image: "https://vignette.wikia.nocookie.net/bigbrother/images/e/eb/Tamil3_Cast.jpg/revision/latest?cb=20190628043611",

   title:"4"
 }
];
 


const Season1 = [
  {
    image: "https://t.wallpaperweb.org/wallpaper/nature/1600x900/Best_Real_World_Full_HD_0005_1600x900.jpg",

    title: "1"

  },

 {
    image: "https://t.wallpaperweb.org/wallpaper/nature/1600x900/Best_Real_World_Full_HD_0005_1600x900.jpg",

    title:"2"
 },

 {
    image: "https://c.ndtvimg.com/2019-10/ra39il58_bigg-boss-tamil-3-grand-finale-_625x300_07_October_19.jpg",

    title:"3"
 },

 
 {
   image: "https://vignette.wikia.nocookie.net/bigbrother/images/e/eb/Tamil3_Cast.jpg/revision/latest?cb=20190628043611",

   title:"4"
 }
];


const Season2 = [
  {
    image: "https://t.wallpaperweb.org/wallpaper/nature/1600x900/Best_Real_World_Full_HD_0005_1600x900.jpg",

    title: "1"

  },

 {
    image: "https://t.wallpaperweb.org/wallpaper/nature/1600x900/Best_Real_World_Full_HD_0005_1600x900.jpg",

    title:"2"
 },

 {
    image: "https://c.ndtvimg.com/2019-10/ra39il58_bigg-boss-tamil-3-grand-finale-_625x300_07_October_19.jpg",

    title:"3"
 },

 
 {
   image: "https://vignette.wikia.nocookie.net/bigbrother/images/e/eb/Tamil3_Cast.jpg/revision/latest?cb=20190628043611",

   title:"4"
 }
];

const Season3 = [
  {
    image: "https://t.wallpaperweb.org/wallpaper/nature/1600x900/Best_Real_World_Full_HD_0005_1600x900.jpg",

    title: "1"

  },

 {
    image: "https://t.wallpaperweb.org/wallpaper/nature/1600x900/Best_Real_World_Full_HD_0005_1600x900.jpg",

    title:"2"
 },

 {
    image: "https://c.ndtvimg.com/2019-10/ra39il58_bigg-boss-tamil-3-grand-finale-_625x300_07_October_19.jpg",

    title:"3"
 },

 
 {
   image: "https://vignette.wikia.nocookie.net/bigbrother/images/e/eb/Tamil3_Cast.jpg/revision/latest?cb=20190628043611",

   title:"4"
 }
];


const Season4 = [
  {
    image: "https://t.wallpaperweb.org/wallpaper/nature/1600x900/Best_Real_World_Full_HD_0005_1600x900.jpg",

    title: "1"

  },

 {
    image: "https://t.wallpaperweb.org/wallpaper/nature/1600x900/Best_Real_World_Full_HD_0005_1600x900.jpg",

    title:"2"
 },

 {
    image: "https://c.ndtvimg.com/2019-10/ra39il58_bigg-boss-tamil-3-grand-finale-_625x300_07_October_19.jpg",

    title:"3"
 },

 
 {
   image: "https://vignette.wikia.nocookie.net/bigbrother/images/e/eb/Tamil3_Cast.jpg/revision/latest?cb=20190628043611",

   title:"4"
 }
];


const Season5 = [
  {
    image: "https://t.wallpaperweb.org/wallpaper/nature/1600x900/Best_Real_World_Full_HD_0005_1600x900.jpg",

    title: "1"

  },

 {
    image: "https://t.wallpaperweb.org/wallpaper/nature/1600x900/Best_Real_World_Full_HD_0005_1600x900.jpg",

    title:"2"
 },

 {
    image: "https://c.ndtvimg.com/2019-10/ra39il58_bigg-boss-tamil-3-grand-finale-_625x300_07_October_19.jpg",

    title:"3"
 },

 
 {
   image: "https://vignette.wikia.nocookie.net/bigbrother/images/e/eb/Tamil3_Cast.jpg/revision/latest?cb=20190628043611",

   title:"4"
 }
];


const Season6 = [
  {
    image: "https://t.wallpaperweb.org/wallpaper/nature/1600x900/Best_Real_World_Full_HD_0005_1600x900.jpg",

    title: "1"

  },

 {
    image: "https://t.wallpaperweb.org/wallpaper/nature/1600x900/Best_Real_World_Full_HD_0005_1600x900.jpg",

    title:"2"
 },

 {
    image: "https://c.ndtvimg.com/2019-10/ra39il58_bigg-boss-tamil-3-grand-finale-_625x300_07_October_19.jpg",

    title:"3"
 },

 
 {
   image: "https://vignette.wikia.nocookie.net/bigbrother/images/e/eb/Tamil3_Cast.jpg/revision/latest?cb=20190628043611",

   title:"4"
 }
];


 
const  MedCardData = [
  {
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201909/Kavin-770x433.jpeg?d5zXVdXHxexqIcPQrRLck73jWM_FaJAP",

    title: "Bigg Boss Season 1"
  },

 {
    image: "https://s3.india.com/wp-content/uploads/2017/06/teaser-2-2.jpg",

    title: "2"
 },

 { 
    image: "https://wikibio.in/wp-content/uploads/2019/06/Tharshan-Thiyagarajah-.jpg",
    
    title: "3"
 },
 
 {
   image: "https://kalakkalcinema.com/wp-content/uploads/2019/10/bb-garbdevent-thums.jpg",

   title: "4"
 }
];



 
const  MovieCardData = [
  {
    image:"https://www.pixelstalk.net/wp-content/uploads/2016/06/Desktop-HD-Nature-Wallpapers-1-620x349.jpg",

    title: "Bigg Boss Season 1"
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
