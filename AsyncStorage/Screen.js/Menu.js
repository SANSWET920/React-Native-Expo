import React, { useCallback }  from "react";

import styled from "styled-components";

import {Alert, Button, Linking,TouchableWithoutFeedback, TouchableOpacity,Image} from "react-native";
import {Ionicons } from "@expo/vector-icons"
import {Dimensions, Animated} from "react-native";

import { connect } from "react-redux";
import { Icon } from "react-native-elements";



function mapStateToProps(state) {

  return { menu: state.menu };

  }

function mapDispatchToProps(dispatch) {

   return {

    closeLogin: () =>

     dispatch({

       type: "CLOSELOGIN"

     })

   };

}


const screenHeight = Dimensions.get("window").height;


const supportedURL = "https://mail.google.com/mail/mu/mp/793/#co";




const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};


class Menu extends React.Component {


  state = {
     
    top: new Animated.Value(screenHeight),

    scale: new Animated.Value(1.3),

    translateY: new Animated.Value(0)

  };


  componentDidUpdate() {

    if (this.props.menu == "openLogin") {

        Animated.timing(this.state.top, { toValue:0, duration: 0}).start();
    
        Animated.spring(this.state.scale, { toValue: 1 }).start();

        Animated.timing(this.state.translateY, { toValue: 0, duration: 0 }).start();
        
    }

    
    if (this.props.menu == "closeLogin") {

      setTimeout(() => {
       
        Animated.timing(this.state.top, { toValue:screenHeight, duration: 0}).start();

        Animated.spring(this.state.scale, { toValue: 1.3}).start();

      },500)

      Animated.timing(this.state.translateY, { toValue: 1000, duration: 500 }).start();

  }

  }

   tapBackground = () => {

     this.props.closeLogin();

   };


  render() {
    return (

      <AnimatedContainer style={{ top: this.state.top }}> 
 
    <TouchableWithoutFeedback onPress={this.tapBackground}
    
      style={{ position: "absolute", top: 0, left: 0 }}
    
    >

      <BlackScreen>
    <Text style={{ top: 550, left: 102, fontSize: 20, color: "grey"}} >Click here to close</Text>
      </BlackScreen>    

    </TouchableWithoutFeedback>
 
      <AnimatedBox style={{ transform: [ {scale: this.state.scale},
      
       {translateY: this.state.translateY} 

      ]}}>


<BigCard style={{ shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24}} >

  
<Image 

source={require("../assets/logo5.png")}

style={{ width: 200, height:200, left:0,top: -75, position: "absolute"}}

/>

   </BigCard>


   <Ionicons  style={{top: 100, left:15, position: "absolute"}}

name="ios-play"

size={20}

color="grey"

   />

<Text style={{ fontSize: 18, left: 40, top: 100, position: "absolute",right: 0,color: "grey"}}>User can request us if extra text 
boxs are required.</Text>



<Ionicons  style={{top: 150, left:15, position: "absolute"}}

name="ios-play"

size={20}
 
color="grey"

   />

<Text style={{ fontSize: 18, left: 40, top: 150, position: "absolute",right: 0,color: "grey"}}>Give you feedback and views  to this Email</Text>





<Text style={{ fontSize: 18, left: 30, top: 205, position: "absolute",color: "#708090"}}>ssanthanam242@gmail.com</Text>

<Text style={{ fontSize: 18, left: 30, top: 250, position: "absolute",color: "grey"}}>Click here to mail us</Text>

    
 <TouchableOpacity style={{top: 245, position: "absolute", zIndex: 100, left: 190}} onPress={() => Linking.openURL("https://mail.google.com/mail/mu/mp/793/#co") }>
 <Ionicons name="ios-mail-unread"  size={35}  color="grey" />
   </TouchableOpacity>



      
    </AnimatedBox>
      
      </AnimatedContainer>
    );
  }
}

const Container = styled.View`
   
position: absolute;

width: 100%;

height: 100%;

top: 0;

left: 0;

 justify-content: center;

 align-items: center;
`; 


const AnimatedContainer = Animated.createAnimatedComponent(Container);


const BlackScreen = styled.View`
  
position: absolute;

width: 100%;

height: 100%;

top: 0;

left: 0;

background-color: rgba(0,0,0,0.75);

`;

const Box = styled.View`
 
 width: 250px;

 height: 300px;

 margin-top: 40px;

 background-color: #FFFFFF;

 border-radius: 15px;

`;

const AnimatedBox = Animated.createAnimatedComponent(Box);

const Text = styled.Text``;




const BigCard = styled.View`
 width: 200px;
 height: 50px;
 background-color: #ffffff;
 left: 30;
 top: 10;
 border-radius: 10;
 position: absolute;
`;


export default connect(mapStateToProps,mapDispatchToProps)(Menu);