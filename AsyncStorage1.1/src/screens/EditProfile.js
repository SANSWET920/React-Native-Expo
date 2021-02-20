import React  from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    ImageBackground,
    Image
} from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { Ionicons ,Entypo} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import UserPermissions from "./UserPermission";
import Fire from "./Fire";
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';


export default class RegisterScreen extends React.Component {


      
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
Fire.shared.createUser(this.state.user)
.then(ref => {
  this.props.navigation.goBack();
})
.catch(error => {
  alert(error.message);
});
};
    

     render() {
        return (

           
          <ImageBackground
          source={require('../images/cat.png')}
          style={{width:"100%",height:"100%"}}
         >

         <ScrollView>

             <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <View  style={{flexDirection: "row", justifyContent: "space-between", marginHorizontal: 32, paddingVertical: 20}}>

<TouchableOpacity    onPress={()=>this.props.navigation.navigate("Profile")}>
<Ionicons name="md-arrow-back" color={"#FFFFFF"} size={32} />
</TouchableOpacity>

<TouchableOpacity  onPress={()=>this.props.navigation.navigate("EditProfile")}>
<Entypo name="dots-three-vertical" color={"#FFFFFF"} size={24} />
</TouchableOpacity>

</View> 
                 <View style={{ position: "absolute", top: 30, alignItems: "center", width: "100%" }}>
                   <Text style={styles.greeting}>{'Edit Profile'}</Text>
                    </View>


                    <View  style={styles.avatarContainer}>
<TouchableOpacity style={styles.avatarPlaceholder}  onPress={this.handlePickAvatar}>
                        <Image source={{ uri: this.state.user.avatar}} style={styles.avatar} />
                        <Ionicons
                            name="md-add" size={40} color="#FFF" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                    </TouchableOpacity> 
</View>

                   <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                   </View>

                     <View style={styles.form}>
                  
                    <View style={{ marginTop: 30}}>

                
                   
                   <TextInput  style={{ paddingStart:10, marginHorizontal: 5,fontFamily: "Bold", fontSize:14, justifyContent: "center",alignItems: "center",
           backgroundColor: "#fff",
           borderRadius: 9,
           height: 45,}}
                   placeholder="User Name"
                    placeholderTextColor="#808080"
                   autoCapitalize="none"
                   onChangeText={name => this.setState({ user: { ...this.state.user , name} })}
                    value={this.state.user.name}
                />
              </View>

              <View>
                    <View style={{ marginTop: 30}}>
                 
                   <TextInput   style={{  paddingStart:10, marginHorizontal: 5, fontFamily: "Bold", fontSize:14, justifyContent: "center",alignItems: "center",
           backgroundColor: "#fff",
           borderRadius: 9,
           height: 45,}}
                   placeholder="Your Email"
                   placeholderTextColor="#808080"
                   autoCapitalize="none"
                   onChangeText={email => this.setState({  user: { ...this.state.user, email }  })}
                       value={this.state.user.email}
                />
                  </View>
                  </View>
                  
                 <View style={{ marginTop: 30 }}>
                 
                      <TextInput   style={{  paddingStart:10, marginHorizontal: 5, fontFamily: "Bold", fontSize:14, justifyContent: "center",alignItems: "center",
           backgroundColor: "#fff",
           borderRadius: 9,
           height: 45}}
                   placeholder="Your Password"
                   secureTextEntry={true}
                     autoCapitalize="none"
                     placeholderTextColor="#808080"
             secureTextEntry 
                      onChangeText={password => this.setState({ user: { ...this.state.user, password}})}
                      value={this.state.user.password}
                />
                 </View>

          </View>
          <TouchableOpacity style={styles.button}  onPress={this.handleSignUp}>
               <Text style={{ color: "#000", fontFamily: "Bold" ,fontSize:18}}>Update Now</Text>
          </TouchableOpacity>

          <Text style={{fontSize:15, fontFamily: 'Medium', paddingStart: 30, paddingEnd:30,marginTop:30 }}>Notice: Once you update your profile,close the application completely and reopen it.</Text>

      </View>
      
      </ScrollView>
      </ImageBackground>
        );
     }
}


const styles = StyleSheet.create({
     container: {
         flex: 1,
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
      color: '#000',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 30,
      color:"#fff"
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
  top:40,
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

      greeting: {
           marginTop: 32,
           fontSize: 25,
           color: "#fff",
           fontFamily: "Bold",
           textAlign: "center"
      },
      errorMessage: {
           height: 72,
           alignItems: "center",
           justifyContent: "center",
           marginHorizontal: 30
      },
      error: {
           color: "#E9446A",
           fontSize: 13,
           fontWeight: "600",
           textAlign: "center",
           top: 100
      },
      form: {
           marginBottom: 48,
           marginHorizontal: 40,
           
           

      },
      inputTitle: {
           color: "#000",
           fontSize: 10,
           textTransform: "uppercase"
      },
      input: {
           borderBottomColor: "#8A8F9E",
           borderBottomWidth: StyleSheet.hairlineWidth,
           height: 40,
           fontSize: 15,
           color: "#161F3D"
      },
      button: {
           marginHorizontal: 60,
           backgroundColor: "#fff",
           borderRadius: 10,
           height: 52,
           alignItems: "center",
           justifyContent: "center"
      },
     back: {
          position: "absolute",
          top: 20,
          left: 10,
          width: 32,
          height: 32,
          borderRadius: 16,
          backgroundColor: "rgba(255, 99, 71, 0)",
          alignItems: "center",
          justifyContent: "center"
     }
      
});