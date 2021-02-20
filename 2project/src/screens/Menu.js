import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ImageBackground,TouchableOpacity, Image, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import Fire from "./Fire"
import * as ImagePicker from 'expo-image-picker'
import UserPermissions from "../screens/UserPermission"
import { ScrollView } from 'react-native-gesture-handler'

const firebase = require("firebase");
require("firebase/firestore");

export default class Detail extends React.Component {

    state = {
        text: "",
        image: '../images/edit1.png'
    }

    componentDidMount() {
        UserPermissions.getCamerPermission();
    }

    getPhotoPermission = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

            if (status != "granted") {
                alert("Precisamos de permissão para acessar suas fotos.")
            }
        }
    };

    handlePost = () => {
        Fire.shared
            .addPost({ text: this.state.text.trim(), localUri: this.state.image })
            .then(ref => {
                this.setState({ text: "", image: null });
                this.props.navigation.goBack();
            })
            .catch(error => {
                alert(error.message);
            });
    };

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        })

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    }


    state = {
      user: {},
      email: "",
      displayName: ""
  };

componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;

    this.setState({ email, displayName });
}



signOutUser = () => {
  firebase.auth().signOut();
};



  unsubscrible = null;

  componentDidMount() {
      const user = this.props.uid || Fire.shared.uid;

      this.unsubscrible = Fire.shared.firestore
          .collection("users")
          .doc(user)
          .onSnapshot(doc => {
              this.setState({ user: doc.data() });
          });
  }

  componentWillUnmount() {
      this.unsubscrible();
  }



    render(){
        return(
            <View style={{
                backgroundColor:"#ffffff",
                height:"100%",

            }}> 
            <ScrollView
   showsVerticalScrollIndicator ={false}
  showsHorizontalScrollIndicator={false}

  >


         
            <ImageBackground source={require('../images/edit.jpg')} 
                  style={{ width:"100%",height:250,marginTop:-20}}>
   <View style={{
                          backgroundColor:"#000000",
                          height: 35,
                          width: 35,
                          marginLeft:20,
                          marginTop:50,
                          borderRadius:8,
                          
                      }}>
                          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                               <Image source={require("../images/back1.png")} style={{width:25,height:10,top:11,left:5}}/>
                            </TouchableOpacity>
                    
                      </View>

            </ImageBackground>
  

           
             <TouchableOpacity onPress={this.handlePost} style={{
                                backgroundColor:"#dcdcdc",
                                paddingVertical:10,
                                paddingHorizontal:20,
                                borderRadius:8,
                                width:125,
                                left:220
                                    }}>
                                        <Text style={{
                                            fontFamily:"Bold",
                                            left:20,
                                            fontSize:15
                                    
                                        }}>Send</Text>
        
                            </TouchableOpacity>

                          

                    

            <View style={{
            
        
                        padding:20,
                        marginTop:-20
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:20,
                            marginBottom:10
                        }}>Report</Text>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#B2B2B2",
                        }}>The user can feel free to report
                             their complaints such as button dislocation,bug fixing,about
                              UI experience,unnecessary additional feature.
                               and suggestions towards the app here by texting their 
                               justified (Complaints with a SCREENSHOT of that particular issue)
                        </Text>
                    </View>



                                 
                    
                    <View style={styles.inputContainer}>

                    
<Image 
  style={ styles.avatar}
   source ={
      this.state.user.avatar
           ? { uri: this.state.user.avatar }
           : require("../images/profile.png")
  }
  />
       

           <TextInput
            
               multiline={true}
               numberOfLines={9}
               style={{fontSize:15, fontFamily: "Bold"}}
               placeholder="Type here your report!"
               onChangeText={text => this.setState({ text })}
               value={this.state.text}></TextInput>
       </View>


      <View style={{top:-90, left:110, flexDirection: "row"}}>

   
                               <Text style={{
                                   fontFamily:"Bold",
                                   
                               }}>Add here your Screenshot!      </Text>

<TouchableOpacity style={{top:-5}} onPress={this.pickImage}>
           <Ionicons name="md-camera" size={32} color="#696969"></Ionicons>
       </TouchableOpacity>
                              
       </View>
     

       <View style={{ marginHorizontal: 32, marginTop: -70, height: 150, bottom:10 }}>
           <Image source={{ uri: this.state.image }} style={{ width: "100%", height: "100%" }}></Image>
       </View>


      

                  
                    </ScrollView>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#FFF"
    },
    header: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB"
    },
    inputContainer: {
        margin:20,
        top:-50,
        flexDirection: "row"
    },
    avatar: {
        marginTop: 40,
        width: 60,
        height: 60,
        borderRadius: 24,
        marginRight: 16
    },
    photo: {
    

    }
})