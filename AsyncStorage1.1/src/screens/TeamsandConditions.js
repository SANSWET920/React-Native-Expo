import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet , StatusBar} from 'react-native';
import createStackNavigator from "react-navigation"
import LottieView from "lottie-react-native";
import Onboarding from 'react-native-onboarding-swiper';


const Skip = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10, }}
      {...props}
  >
      <Text style={{fontSize:16, fontFamily: "Bold"}}>Skip</Text>

  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10,}}
      {...props}
  >
      <Text style={{fontSize:16, fontFamily: "Bold"}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16, fontFamily: "Bold"}}>Done</Text>
  </TouchableOpacity>
);

class SignInScreen extends React.Component {

  static navigationOptions = {

    header: null

  }

  componentDidMount() {
  StatusBar.setHidden(true);
  }

  render() {

       return (


    
        <Onboarding
            SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        titleStyles={{ fontFamily: "Bold", }} 
        subTitleStyles={{ fontFamily: "Medium"}} 
        onSkip={() => this.props.navigation.navigate("Splash")}
        onDone={() => this.props.navigation.navigate("Splash")}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: <Image source={require("../images/onboarding-img1.png")} />,
            title: 'Biometric detection',
            subtitle: 'Human Facial detection enhance security',
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../images/onboarding-img2.png')} />,
            title: 'Do not delete unless necessary',
            subtitle: 'Once the data is deleted it  can never be retrieved',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../images/onboarding-img3.png')} />,
            title: 'Encrypted Data',
            subtitle: "Text saved here is encrypted and stored in mobile and no way connected to the developer team",
        
          },
        ]}
      />
    );

      }
    }


    export default SignInScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});