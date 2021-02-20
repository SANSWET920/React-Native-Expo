import Rating from "../screens/Star";
import React from 'react';
import {View,ImageBackground, ScrollView,Image,Text, Button,Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Detail extends React.Component {
    render(){
        return(
            <View style={{
                backgroundColor:"#f8f8f8",
                height:"100%",
                paddingHorizontal:20,
            
                bottom:20
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
                          marginTop:60,
                          borderRadius:8,
                          alignItems:"center",
                          justifyContent:"center"
                      }} onPress={()=>this.props.navigation.goBack()}>
                          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                               <Image source={require("../images/back1.png")} style={{width:25,height:10,zIndex:1}}/>
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
                                                        fontSize:15,
                                                        fontFamily:"Bold"
                                                        }}>      We are waiting for your response
                                                    </Text>
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
                                            left:10
                                    
                                        }}>Give your feedback through this EmailID!</Text>



<Text
    style={{color: '#000080',fontFamily:"Bold",textDecorationLine: "underline",left: 50}}
    onPress={() => Linking.openURL('mailto:ssanthanam242@gmail.com?subject=AsyncStorage&body=feel free to give your feedback') }
      title="ssanthanam242@gmail.com"
  >
    ssanthanam242@gmail.com
  </Text>

                                       
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
                                            left:10
                                    
                                        }}>       You can also give your feedback {"\n"}               through this website!</Text>




<Text
    style={{color: '#000080',fontFamily:"Bold",textDecorationLine: "underline",left: 50}}
    onPress={() => {Linking.openURL("http://asyncstorage.000webhostapp.com/")}}
  >
     WWW.AsyncStorage.com
  </Text>


                                       
                            </View>

                          

                    </View>

                    <View style={{top:30, left:15}}>
               <Rating rating={4} numStars={7} starColor="orange" />
               </View>
                

                    <View style={{
                        backgroundColor:"#FFF",
                        borderRadius:15,
                        padding:20,
                        marginTop:70
                    }}>
                        <Text style={{
                                            fontFamily:"Bold",
                                            left:20,
                                            fontSize:15
                                    
                                        }}>  
                                                                            <Text style={{
                                            left:10,
                                            fontSize:15,
                                            color:"#696969"
                                    
                                        }}>Star 1: </Text>
   Was not upto your expectations!</Text>
                    </View>
                    <View style={{
                        backgroundColor:"#FFF",
                        borderRadius:15,
                        padding:20,
                        marginTop:20
                    }}>
                              <Text style={{
                                            fontFamily:"Bold",
                                            left:20,
                                            fontSize:15
                                    
                                        }}>  
                                                                            <Text style={{
                                            left:10,
                                            fontSize:15,
                                            color:"#696969"
                                    
                                        }}>Star 2: </Text>
 Can do even more attractive!</Text>
                    </View>
                    <View style={{
                        backgroundColor:"#FFF",
                        borderRadius:15,
                        padding:20,
                        marginTop:20
                    }}>
                          <Text style={{
                                            fontFamily:"Bold",
                                            left:20,
                                            fontSize:15
                                    
                                        }}>  
                                                                            <Text style={{
                                            left:10,
                                            fontSize:15,
                                            color:"#696969"
                                    
                                        }}>Star 3: </Text>
   Almost you are in right path!</Text>
                    </View>
                    <View style={{
                        backgroundColor:"#FFF",
                        borderRadius:15,
                        padding:20,
                        marginTop:20
                    }}>
                        
                        <Text style={{
                                            fontFamily:"Bold",
                                            left:20,
                                            fontSize:15
                                    
                                        }}>  
                                                                            <Text style={{
                                            left:10,
                                            fontSize:15,
                                            color:"#696969"
                                    
                                        }}>Star 4: </Text>
   satisfactory,But not great!</Text>
                    </View>

                    <View style={{
                        backgroundColor:"#FFF",
                        borderRadius:15,
                        padding:20,
                        marginTop:20
                    }}>
                       <Text style={{
                                            fontFamily:"Bold",
                                            left:20,
                                            fontSize:15
                                    
                                        }}>  
                                                                            <Text style={{
                                            left:10,
                                            fontSize:15,
                                            color:"#696969"
                                    
                                        }}>Star 5: </Text>
   That was the first class work!</Text>
                    </View>

                    <View style={{
                        backgroundColor:"#FFF",
                        borderRadius:15,
                        padding:20,
                        marginTop:20
                    }}>
                       
                       <Text style={{
                                            fontFamily:"Bold",
                                            left:20,
                                            fontSize:15
                                    
                                        }}>  
                                                                            <Text style={{
                                            left:10,
                                            fontSize:15,
                                            color:"#696969"
                                    
                                        }}>Star 6: </Text>
   Well done!it's classic!</Text>
                    </View>

                    <View style={{
                        backgroundColor:"#FFF",
                        borderRadius:15,
                        padding:20,
                        marginTop:20
                    }}>
                           <Text style={{
                                            fontFamily:"Bold",
                                            left:20,
                                            fontSize:15
                                    
                                        }}>  
                                                                            <Text style={{
                                            left:10,
                                            fontSize:15,
                                            color:"#696969"
                                    
                                        }}>Star 7: </Text>
   Extremely Good and Nailed it!</Text>
                    </View>

                   
                


</ScrollView>

            </View>

            
        )
    }
}