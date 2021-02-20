import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';


class SplashScreen extends React.Component {

     static navigationOptions = {
   
       header: null
   
     }

     
     render() {

          return (

                <View style={styles.container}>
                 <View style={styles.header}>
                      <Animatable.Image
                         animation="bounceIn"
                         direction="1500"
                       source={require("../assets/logo.png")}
                       style={styles.logo}
                       resizeMode="stretch"
                      />
                 </View> 
                <Animatable.View 
                     style={styles.footer}
                     animation="fadeInUpBig"
                >
                     <Text style={styles.title}>Stay connected with us!</Text>
                     <Text style={styles.text}> Sign in with your Account </Text>
                     <View style={styles.button}>

                     
                     <Image 

source={require("../assets/solar.jpg")}

style={{ width: 400, height:190, left: -30,top: -30, position:"absolute"}}

/>
                     <TouchableOpacity    style={{marginTop: 10,borderRadius: 6,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 20,}}  onPress={() => this.props.navigation.navigate("Login")} >
                     <LinearGradient style={styles.signIn}

colors={[ "rgba(63, 191, 174,100)", "rgba(49,82,84,100)" ]}

>
  <Text style={styles.textSign}>Get Started</Text>
  <MaterialIcons 
       name="navigate-next"
       color="#FFFFFF"
       size={20}
  />

</LinearGradient>
                        
                     </TouchableOpacity>

                     </View>
                </Animatable.View>
                     
                </View>
                       
    );

}
}
    

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
      backgroundColor: '#008080'

  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#Ffffff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      borderRadius: 30
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold',
      top: -20
  },
  text: {
      color: 'grey',
      marginTop: 5,
      top: -20
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});