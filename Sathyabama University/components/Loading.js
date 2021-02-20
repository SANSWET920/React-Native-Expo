import React from "react";

import styled from "styled-components";

import LottieView from "lottie-react-native";

import { Animated,Dimensions} from "react-native";



const screenHeight = Dimensions.get("window").height;




class Loading extends React.Component {

   state = {

       top: new Animated.Value(0),

       opacity: new Animated.Value(0)

   }

    componentDidMount() {}


    

    componentDidUpdate() {
 
        if(this.props.isActive ) {

           Animated.timing(this.state.top, { toValue: 0, duration: 0 }).start(); 

           Animated.timing(this.state.opacity, { toValue: 1 }).start();

           this.animation.play();


        } else {

            Animated.timing(this.state.top, {
                
                toValue: screenHeight,
                
                duration: 0 
            
            }).start(); 

            Animated.timing(this.state.opacity, { toValue: 0 }).start();

        }  

    }

   render() {

      return (

         <AnimatedContainer 
         
          style={{ top: this.state.top, opacity: this.state.opacity }}
         
          >

           <LottieView 
           
           source={require("../assets/18985-loading.json")}
           
           autoPlay={false}

           loop

           ref={animation => {

               this.animation = animation;

           }}
           
         />

         </AnimatedContainer>

      );

   }

}


export default Loading;



const Container = styled.View`

  width: 100%;

  height: 100%;

  background: rgba(255,255,255, 0.9);  

  position: absolute;

  top: 0;

  left: 0;

  justify-content: center;

  align-items: center;

`;


const AnimatedContainer = Animated.createAnimatedComponent(Container);


