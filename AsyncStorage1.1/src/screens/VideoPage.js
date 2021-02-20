import React from 'react';
import {View,ImageBackground, Image,Text,Linking} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class Detail extends React.Component {
    render(){
        return(
            <View style={{
                backgroundColor:"#f8f8f8",
                height:"100%",
                paddingHorizontal:20,
                bottom:10
            }}> 
            <ScrollView
   showsVerticalScrollIndicator ={false}
  showsHorizontalScrollIndicator={false}

  >

         
            <ImageBackground source={require('../images/dev2.png')} 
                  style={{marginLeft:50, width:"100%",height:250}}>
                      <View style={{
                          backgroundColor:"#000",
                          height: 35,
                          width: 35,
                          marginLeft:-50,
                          marginTop:50,
                          borderRadius:8,
                          alignItems:"center",
                          justifyContent:"center"
                      }} onPress={()=>this.props.navigation.goBack()}>
                          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                               <Image source={require("../images/back1.png")} style={{width:25,height:10}}/>
                            </TouchableOpacity>
                    
                      </View>
            </ImageBackground>
                    <View style={{
                        backgroundColor:"#FFF",
                        padding:10,
                        borderRadius:15
                        }}>
                            <View style={{
                                flexDirection:"row",
                                alignItems:"center",
                               
                            }}>
                                            <View>
                                                    <Text style={{
                                                        fontSize:18,
                                                        fontFamily:"Bold"
                                                        }}>            Terms and Conditions
                                                    </Text>

                                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                                        <Text style={{
                                                            fontFamily:"Bold",
                                                            color:"#000",
                                                            opacity:0.6,
                                                            fontSize:14
                                                        }}>                    Updated on 28-10-2020</Text>

                                                       
                                                    </View>
                                            </View>
                              
                              
                               
                            </View>
                                <View style={{
                                    flexDirection:"row",
                                    paddingTop:20,
                                    alignItems:"center"
                                }}>

                             
                                </View>
                    </View>

                    <View style={{
                        flexDirection:"row",
                        marginTop:20
                    }}>
                            <View style={{
                                backgroundColor:"#FFF",
                                paddingVertical:10,
                                paddingHorizontal:10,
                                borderRadius:8,
                                width:420
                                    }}>
                                        <Text style={{
                                            fontFamily:"Bold",
                                            left:20
                                    
                                        }}>Do visit our website for more details!</Text>


<Text
    style={{color: '#000080',fontFamily:"Bold",textDecorationLine: "underline",left: 50}}
    onPress={() => {Linking.openURL("http://asyncstorage.000webhostapp.com/")}}
  >
    WWW.AsyncStorage.com
  </Text>

                                       
                            </View>

                    </View>
                    <View style={{
                        backgroundColor:"#FFF",
                        borderRadius:15,
                        padding:20,
                        marginTop:20
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:20,
                            marginBottom:10
                        }}>Unrecovered</Text>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#B2B2B2",
                        }}> 
                            Please do not delete the text unless it is not necessary because it can never be retrieved even the user contact the developer.
                        </Text>
                    </View>
                    <View style={{
                        backgroundColor:"#FFF",
                        borderRadius:15,
                        padding:20,
                        marginTop:20
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:20,
                            marginBottom:10
                        }}>Save immediately</Text>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#B2B2B2",
                        }}> 
                            Users are requested to save your text before you exit otherwise the text will be disappeared automatically.
                        </Text>
                    </View>
                    <View style={{
                        backgroundColor:"#FFF",
                        borderRadius:15,
                        padding:20,
                        marginTop:20
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:20,
                            marginBottom:10
                        }}>Private storage</Text>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#B2B2B2",
                        }}> 
                            The text you save here will be stored in your device and it is no way connected to the application team.
                        </Text>
                    </View>
                    <View style={{
                        backgroundColor:"#FFF",
                        borderRadius:15,
                        padding:20,
                        marginTop:20
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:20,
                            marginBottom:10
                        }}>Unrecorded</Text>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#B2B2B2",
                        }}> 
                            The face recognition used here is only for the 
                            security purpose of the user and no details will be viewed or recorded by the developer team.
                        </Text>
                    </View>

                    <View style={{
                        backgroundColor:"#FFF",
                        borderRadius:15,
                        padding:20,
                        marginTop:20
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:20,
                            marginBottom:10
                        }}>Biometric detection</Text>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#B2B2B2",
                        }}> 
                            The face detector can even recognize all human face in dull and bright light and 
                            it is of the algorithm it recognize all human face not particularly.
                        </Text>
                    </View>

                    <View style={{
                        backgroundColor:"#FFF",
                        borderRadius:15,
                        padding:20,
                        marginTop:20
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:20,
                            marginBottom:10
                        }}>Face location</Text>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#B2B2B2",
                        }}> 
                           Kindly do not misplace you face out of camera angle if you do so the application stop its
                            function and black screen appears. Resumes only when you place you face in appropriate place.
                        </Text>
                    </View>
                    
                    </ScrollView>
            </View>
        )
    }
}