import React  from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Image
} from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import UserPermissions from "./UserPermission";
import Fire from "./Fire";
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';

class SignInScreen extends React.Component {

    static navigationOptions = {
        header: null
    };


      
    state = {
        user: { 
         name: "",
         email: "",
         password: "",
         avatar: null
     },
     errorMessage: null
 };
 


handlePickAvatar = async () => {
    UserPermissions.getCamerPermission()

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4,3]
    });

    if (!result.cancelled) {
        this.setState({ user : { ...this.state.user, avatar: result.uri }});
    }
};


handleSignUp = () => {
    Fire.shared.createUser(this.state.user);
   
};


     render() {

          return (

   <View style={styles.container}>
      <StatusBar backgroundColor="#008080" barStyle= "light-content" />
     <Animatable.View 
         animation="bounceIn"  
         style={styles.header}>

<View  style={styles.avatarContainer}>
<TouchableOpacity style={styles.avatarPlaceholder}  onPress={this.handlePickAvatar}>
                        <Image source={{ uri: this.state.user.avatar}} style={styles.avatar} />
                        <Ionicons
                            name="md-add" size={40} color="#FFF" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                    </TouchableOpacity> 
</View>


     
          <Text style={styles.text_header}>Register Now!</Text>

     </Animatable.View>

  
     <Animatable.View 
         animation="fadeInUpBig"    
         style={styles.footer}>
            <ScrollView>
     <Text style={styles.text_footer}>Name</Text>
          <View 
          style={styles.action}>
               <FontAwesome
                  name="user-o"
                  color="#05375a"
                  size={20}
               />
               <TextInput
                   placeholder="User Name"
                   style={styles.textInput}
                   autoCapitalize="none"
                   onChangeText={name => this.setState({ user: { ...this.state.user , name} })}
                    value={this.state.user.name}
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
              marginTop: 35 }]}>Email</Text>
          <View style={styles.action}>
               <Feather
                  name="mail"
                  color="#05375a"
                  size={20}
               />
               <TextInput
                   placeholder="Your Email"
                   style={styles.textInput}
                   autoCapitalize="none"
                   onChangeText={email => this.setState({  user: { ...this.state.user, email }  })}
                       value={this.state.user.email}
                />
                <Feather 
                   name="check-circle"
                   color="green"
                   size={20}
                />
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
                     autoCapitalize="none"
                       style={styles.textInput}
             secureTextEntry 
                      onChangeText={password => this.setState({ user: { ...this.state.user, password}})}
                      value={this.state.user.password}
                />
                <Feather 
                   name="check-circle"
                   color="green"
                   size={20}
                />
          </View>


          <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                   </View>

          <View style={styles.button}>

          <TouchableOpacity           style={[styles.signIn, {
       borderColor: "#009387",
       marginTop: 15,
       borderRadius: 100,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 24
     
     
  }]} onPress={this.handleSignUp} >

          <LinearGradient style={styles.signIn}
 
 colors={['#08d4c4', '#01ab9d']}

>
         <Text style={[styles.textSign, { color: "#FFFFFF" }]}>Sign Up</Text>    

</LinearGradient>

</TouchableOpacity>

  <TouchableOpacity  onPress={() => this.props.navigation.goBack()}
          style={[styles.signIn, {
       borderColor: "#009387",
       borderWidth: 1,
       marginTop: 20,
       borderRadius: 15
  }]}>
       <Text style={[styles.textSign, {
            color: "#009387"
       }]}>Sign In</Text>
  </TouchableOpacity>
          </View>
          </ScrollView> 
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
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontFamily: "Bold",
        fontSize: 30,
        bottom:90,
        left:60
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
        marginTop: 20
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
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
   },
   avatarPlaceholder: {
    width: 100,
    height: 100,

    top:50,
    backgroundColor: "#E1E2E6",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
},
avatar: {
    
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50 ,
        
},
avatarContainer: {
        
    borderRadius: 32,
    shadowOffset: { height: 3, width: 1},
    shadowColor: "#222",
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
    top: 10,
    
},


  });