
import React  from "react";
import { Keyboard, Text, View, TextInput, Image, TouchableWithoutFeedback, TouchableOpacity,Animated,Dimensions,StatusBar, BackHandler} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Button, Card } from 'react-native-elements';
import styled, { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../redux/themeActions";
import { lightTheme, darkTheme } from "../Theme";
import PsMPrivatePage from "./PsMPrivatePage"
import { connect } from "react-redux";
import {Ionicons } from "@expo/vector-icons"
import { setStatusBarHidden } from "expo-status-bar";
import LoginScreen from "../Screen.js/LoginScreen";
import RegisterScreen from "../Screen.js/RegisterScreen";
import Login from "../Screen.js/Login";
import Menu from "../Screen.js/Menu";
import App from "../App";
import { ScrollView } from "react-native-gesture-handler";
import name from "../src/PsMPrivatePage"
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
  
    }

  state = {
   email: "",
   displayName: ""
};

state ={
   top: new Animated.Value(screenHeight),
 
   opacity: new Animated.Value(0),
   }
 
componentDidMount() {
   const { email, displayName } = firebase.auth().currentUser;

   this.setState({ email, displayName });
   

};

signOutUser = () => {
   firebase.auth().signOut();
};


     render() {

        return (
    
             <Root>

        <Container>


<StatusBar hidden />

<BigCard style={{ shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24}} >

 <TouchableOpacity style={{top: 32, position: "absolute", zIndex: 100, left: 296}} onPress={this.signOutUser}>
 <Ionicons name="ios-log-out"  size={35}  color="black" />
   </TouchableOpacity>
   
<Image 

source={require("../assets/logo4.png")}

style={{ width: 300, height:300, left:20,top: -100, position: "absolute"}}

/>

<Text style={{top: 65, left: 213, position: "absolute",fontSize: 11 }}>-The NotePad</Text>
          

<TouchableOpacity 

onPress={this.props.openLogin} 

     style={{
      
       top: 30,

       left: 20,
        
       position:"absolute",

       zIndex: 100
      
   }} 
>

    <Ionicons

     name="ios-menu"

     size={35}

     color="black"

        />

</TouchableOpacity>        





   </BigCard>


<ScrollView>


<BigCard2>
<Text style={{top: 30, left: 30,position: "absolute",
 fontSize: 28, color: "#800080", fontWeight: "bold"}}>Our Choice</Text>
 <Text style={{top: 60, left: 30,position: "absolute",
 fontSize: 20, color: "#800080", fontWeight: "bold"}}>Enjoy the Security</Text>
</BigCard2>
 

<TouchableWithoutFeedback    
                onPress={() => {

                this.props.navigation.push("Neptune", {

                });

              }} 
>

<BigCard3  
          style={{ shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24, }}

>

<Image 

source={require("../assets/Neptun.png")}

style={{ width: 95, height:95, left:30,top: -25, position: "absolute"}}

/>

<Ionicons  style={{top:10, left:10, position: "absolute"}}

name="ios-flash"

size={30}

color="#A9A9A9"

   />


<Text style={{fontSize: 20, left: 10, top: 80,position: "absolute"}}>Neptune</Text>


</BigCard3>

</TouchableWithoutFeedback>


<TouchableWithoutFeedback  onPress={() => {

this.props.navigation.push("Earth", {

});

}} >


<BigCard4  
          style={{ shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24, }}

>

<Image 

source={require("../assets/Earth.png")}

style={{ width: 90, height:90, left:30,top: -20, position:"absolute"}}

/>

<Ionicons  style={{top:10, left:10,position: "absolute"}}

name="ios-flash"

size={30}

color="#a9a9a9"

   />


<Text style={{fontSize: 20, left: 10, top: 80,position: "absolute"}}>Earth</Text>

</BigCard4>

</TouchableWithoutFeedback>




<TouchableWithoutFeedback  onPress={() => {

this.props.navigation.push("Mars", {

});

}} >

<BigCard5
          style={{ shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24, }}

>

<Image 

source={require("../assets/mars.png")}

style={{ width: 85, height:85, left:35,top: -20, position: "absolute"}}

/>

<Ionicons  style={{top:10, left:10, position: "absolute"}}

name="ios-flash"

size={30}

color="#a9a9a9"

   />


<Text style={{fontSize: 20, left: 10, top: 80,position: "absolute"}}>Mars</Text>

</BigCard5>

</TouchableWithoutFeedback>


<TouchableWithoutFeedback  onPress={() => {

this.props.navigation.push("Uranus", {

});

}} >

<BigCard6
          style={{ shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24, }}

>

<Image 

source={require("../assets/uranus.png")}

style={{ width: 110, height:110, left:30,top: -35, position: "absolute"}}

/>

<Ionicons  style={{top:10, left:10, position: "absolute"}}

name="ios-flash"

size={30}

color="#a9a9a9"

   />


<Text style={{fontSize: 20, left: 10, top: 80,position: "absolute"}}>Uranus</Text>

</BigCard6>

</TouchableWithoutFeedback>



<TouchableWithoutFeedback  onPress={() => {

this.props.navigation.push("Jupiter", {

});

}} >

<BigCard7
          style={{ shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24, }}

>

<Image 

source={require("../assets/jupiter.png")}

style={{ width: 155, height: 155, left: 5,top: -50, position: "absolute"}}

/>

<Ionicons  style={{top: 10, left:10 , position: "absolute"}}

name="ios-flash"

size={30}

color="#a9a9a9"

   />


<Text style={{fontSize: 20, left: 10, top: 80,position: "absolute"}}>Jupiter</Text>

</BigCard7>

</TouchableWithoutFeedback>



<TouchableWithoutFeedback  onPress={() => {

this.props.navigation.push("Venus", {

});

}} >

<BigCard8
          style={{ shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24, }}

>

<Image 

source={require("../assets/venus.png")}

style={{ width: 125, height:125, left:20,top: -38, position: "absolute"}}

/>

<Ionicons  style={{top: 10, left:10, position: "absolute"}}

name="ios-flash"

size={30}

color="#a9a9a9"

   />


<Text style={{fontSize: 20, left: 10, top: 80,position: "absolute"}}>Venus</Text>

</BigCard8>

</TouchableWithoutFeedback>




<TouchableWithoutFeedback  onPress={() => {

this.props.navigation.push("Sun", {

});

}} >

<BigCard9
          style={{ shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24, }}

>

<Image 

source={require("../assets/sun.png")}

style={{ width: 100, height:100, left:30,top: -30, position: "absolute"}}

/>

<Ionicons  style={{top: 10, left:10, position: "absolute"}}

name="ios-flash"

size={30}

color="#a9a9a9"

   />


<Text style={{fontSize: 20, left: 10, top: 80,position: "absolute"}}>Sun</Text>

</BigCard9>

</TouchableWithoutFeedback>



<TouchableWithoutFeedback  onPress={() => {

this.props.navigation.push("Mercury", {

});

}} >

<BigCard10
          style={{ shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24, }}

>

<Image 

source={require("../assets/mercury.png")}

style={{ width: 180, height:180, left: -5,top: -55, position: "absolute"}}

/>

<Ionicons  style={{top: 10, left:10, position: "absolute"}}

name="ios-flash"

size={30}

color="#a9a9a9"

   />


<Text style={{fontSize: 20, left: 10, top: 80,position: "absolute"}}>Mercury</Text>

</BigCard10>

</TouchableWithoutFeedback>



<TouchableWithoutFeedback  onPress={() => {

this.props.navigation.push("Saturn", {

});

}} >


<BigCard11
          style={{ shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24, }}

>

<Image 

source={require("../assets/saturn.png")}

style={{ width: 130, height:130, left:15,top: -45, position: "absolute"}}

/>

<Ionicons  style={{top: 10, left:10, position: "absolute"}}

name="ios-flash"

size={30}

color="#a9a9a9"

   />


<Text style={{fontSize: 20, left: 10, top: 80,position: "absolute"}}>Saturn</Text>

</BigCard11>

</TouchableWithoutFeedback>


<TouchableWithoutFeedback  onPress={() => {

this.props.navigation.push("Pluto", {

});

}} >

<BigCard12
          style={{ shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24, }}

>

<Image 

source={require("../assets/pluto.png")}

style={{ width: 160, height:160, left: 5,top: -55, position: "absolute"}}

/>

<Ionicons  style={{top: 10, left:10, position: "absolute"}}

name="ios-flash"

size={30}

color="#a9a9a9"

   />


<Text style={{fontSize: 20, left: 10, top: 80,position: "absolute"}}>Pluto</Text>

</BigCard12>

</TouchableWithoutFeedback>


</ScrollView>


<AnimatedBlack 
        
        style={{ top: this.state.top, opacity: this.state.opacity}} 

        />

       
              
        </Container>
<Menu />
        </Root>
          
    );

        }
    }
            

    export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


 const Root = styled.View`

    flex: 1;
  
  `;
  
const Container = styled.View`
flex: 1;
background-color: #dcdcdc;
`;


const Black = styled.View`

  position: absolute;

  width: 100%;

  height: 100%;

  background-color: black;

  opacity: 0.6;
`;


const AnimatedBlack = Animated.createAnimatedComponent(Black);

const BigCard = styled.View`
 width: 340px;
 height: 100px;
 background-color: #F5F5F5;
 left: 10;
 top: 10;
 border-radius: 10;
`;


const BigCard2 = styled.View`
 width: 360px;
 height: 950px;
 background-color: #f5f5f5;
 left: 0;
 top: 60;
 border-radius: 50;
`;


const BigCard3 = styled.View`
 width: 100px;
 height: 120px;
 background-color: #f5f5f5;
 left: 40;
 top: 170;
 border-radius: 25;
 position: absolute;
 border-color: black;
`;


const BigCard4 = styled.View`
 width: 100px;
 height: 120px;
 background-color: #f5f5f5;
 left: 220;
 top: 170;
 border-radius: 25;
 position: absolute;

`;


const BigCard5 = styled.View`
 width: 100px;
 height: 120px;
 background-color: #f5f5f5;
 left: 220;
 top: 330;
 border-radius: 25;
 position: absolute;
`;


const BigCard6 = styled.View`
 width: 100px;
 height: 120px;
 background-color: #f5f5f5;
 left: 40;
 top: 330;
 border-radius: 25;
 position: absolute;
`;


const BigCard7 = styled.View`
 width: 100px;
 height: 120px;
 background-color: #f5f5f5;
 left: 40;
 top: 490;
 border-radius: 25;
 position: absolute;
`;


const BigCard8 = styled.View`
 width: 100px;
 height: 120px;
 background-color: #f5f5f5;
 left: 220;
 top: 490;
 border-radius: 25;
 position: absolute;
`;


const BigCard9 = styled.View`
 width: 100px;
 height: 120px;
 background-color: #f5f5f5;
 left: 40;
 top: 650;
 border-radius: 25;
 position: absolute;
`;


const BigCard10 = styled.View`
 width: 100px;
 height: 120px;
 background-color: #f5f5f5;
 left: 220;
 top: 650;
 border-radius: 25;
 position: absolute;
`;


const BigCard11 = styled.View`
 width: 100px;
 height: 120px;
 background-color: #f5f5f5;
 left: 220;
 top: 810;
 border-radius: 25;
 position: absolute;
`;


const BigCard12 = styled.View`
 width: 100px;
 height: 120px;
 background-color: #f5f5f5;
 left: 40;
 top: 810;
 border-radius: 25;
 position: absolute;
`;

const Circle1 = styled.View`

  position: absolute;
   
  width: 100px;

  height: 70px;

  left: 0px;

  top: 50px;

  background: #8A2BE2;

  border-radius: 20px;

`;

