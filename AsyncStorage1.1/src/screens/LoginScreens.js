import React  from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as firebase from "firebase";
import LoadingScreen from "./LoadingScreens";

class SignInScreen extends React.Component {

     static navigationOptions = {
   
       header: null
   
     }

     
     state = {
          email: "",
          password: "",
          errorMessage: null
     };

     handleLogin = () => {
     const { email, password } = this.state;

     firebase
        .auth()
        .signInWithEmailAndPassword(email, password )
        .catch(error => this.setState({ errorMessage: error.message }));
     };



     render() {

          return (

   <View style={styles.container}>
      <StatusBar backgroundColor="#008080" barStyle= "light-content" />
     <View 
         animation="bounceIn"  
         style={styles.header}>
          
          <Text style={styles.text_header}>Login!</Text>
     </View>
     <Animatable.View 
         animation="fadeInUpBig"    
         style={styles.footer}>
     <Text style={styles.text_footer}>Email</Text>
          <View 
          style={styles.action}>
                <Feather
                  name="mail"
                  color="#05375a"
                  size={20}
               />
               <TextInput
                   placeholder="Your Email"
                   style={styles.textInput}
                   autoCapitalize="none"
                   onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <View>
                <Feather 
                   name="check-circle"
                   color="green"
                   size={20}
                />
                </View>
          </View>

          <Text style={[styles.text_footer, {
              marginTop: 35 }]}>Password</Text>
          <View style={styles.action}>
               <Feather
                  name="lock"
                  color="#05375a"
                  size={20}
               />
               <TextInput
                   placeholder="Your Password"
                   secureTextEntry={true}
                   style={styles.textInput}
                   autoCapitalize="none"
                   onChangeText={password => this.setState({ password })}
                      value={this.state.password}
                />
                <Feather 
                   name="check-circle"
                   color="green"
                   size={20}
                />
          </View>

          <View style={styles.errorMessage} >
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                   </View>


          <View style={styles.button}>
           

     
  <TouchableOpacity   onPress={this.handleLogin}
          style={[styles.signIn, {
       borderColor: "#009387",
    
       marginTop: -10,
    borderRadius: 100,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 24
     
  }]}>
      
      <LinearGradient

colors={['#08d4c4', '#01ab9d']}

style={[styles.signIn, {

  }]}
>
       <Text style={[styles.textSign, {
            color: "#FFFFFF"
       }]}>Sign In</Text>
       </LinearGradient>
  </TouchableOpacity>


  <TouchableOpacity   onPress={() => this.props.navigation.navigate("Register")}
          style={[styles.signIn, {
       borderColor: "#009387",
       borderWidth: 1,
       marginTop: 20,
       borderRadius: 15

  }]}>
       <Text style={[styles.textSign, {
            color: "#009387"
       }]}>Sign Up</Text>
  </TouchableOpacity>
          </View>

     </Animatable.View>

   </View>
                                 
    );

}
}
    


export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#008080'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontFamily: "Bold",
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    errorMessage: {
     marginTop: 40,
     alignItems: "center",
     justifyContent: "center",
     marginHorizontal: 30
},
  });