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
            
                bottom:20
            }}> 
            <ScrollView
   showsVerticalScrollIndicator ={false}
  showsHorizontalScrollIndicator={false}

  >

         
            <ImageBackground source={require('../images/dev1.png')} 
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
                                                        fontSize:21,
                                                        fontFamily:"Bold"
                                                        }}>           Privacy and Policy
                                                    </Text>

                                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                                        <Text style={{
                                                            fontFamily:"Bold",
                                                            color:"#000",
                                                            opacity:0.6,
                                                            fontSize:12
                                                        }}>                         Updated on 28-10-2020</Text>

                                                       
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
    style={{color: '#000080',fontFamily:"Bold",  textDecorationLine: "underline",left: 50}}
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
                        }}>Privacy Policy</Text>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#B2B2B2",
                        }}> 
                            AsyncStorage application is a Free app. This SERVICE is provided by Santhana Kumar M at no cost and is intended for user security.This page is used to inform visitors regarding the policies , use, and disclosure of Personal Information if anyone decided to use my Service.
If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at AsyncStorage unless otherwise defined in this Privacy Policy.

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
                        }}>Google Play Services {"\n"}
Log Data</Text>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#B2B2B2",
                        }}> 
                            I want to inform you that whenever you use my Service,
                             in a case of an error in the app I collect data and information 
                             (through third party products) on your phone called Log Data.
                              This Log Data may include information such as your device Internet Protocol 
                              (“IP”) address, device name, operating system version,
                             the configuration of the app when utilizing my Service,
                              the time and date of your use of the Service, and other statistics.
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
                        }}>Cookies</Text>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#B2B2B2",
                        }}> 
                            Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. 
                            These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
                            {"\n"}
                            {"\n"}
                    
                            
This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device.
 If you choose to refuse our cookies, you may not be able to use some portions of this Service.
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
                        }}>Service Providers</Text>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#B2B2B2",
                        }}> 
                            I may employ third-party companies and individuals due to the following reasons:
                            {"\n"}
                            {"\n"}

To facilitate our Service; {"\n"}
To provide the Service on our behalf; {"\n"}
To perform Service-related services; or {"\n"}
To assist us in analyzing how our Service is used. {"\n"}
{"\n"}
I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
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
                        }}>Security</Text>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#B2B2B2",
                        }}> 
                            I value your trust in providing us your Personal Information,
                             thus we are striving to use commercially acceptable means of protecting it. 
                            Only login details will be collected by us and the rest of the notes you save will be saved in your mobile storage.
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
                        }}>Children’s Privacy</Text>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#B2B2B2",
                        }}> 
                           These Services do not address anyone under the age of 13.
                            I do not knowinglyw collect personally identifiable information from children under 13.
                             In the case I discover that a child under 13 has provided me with personal information, 
                             I immediately delete this from our servers.
                              If you are a parent or guardian and you are aware that your child has provided us with personal information, 
                           please contact me so that I will be able to do necessary actions.
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
                        }}>Changes to This Privacy Policy</Text>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#B2B2B2",
                        }}> 
                          I may update our Privacy Policy from time to time. 
                          Thus, you are advised to review this page periodically for any changes. 
                          I will notify you of any changes by posting the new Privacy Policy on this page.
             {"\n"}
             {"\n"}
This policy is effective as of (2020-10-28) posting date
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
                        }}>Contact Us!</Text>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#B2B2B2",
                        }}> 
                          If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at:
                        </Text>
                          
            
  <Text
    style={{color: '#000080',fontFamily:"Bold", textDecorationLine: "underline"}}
    onPress={() => Linking.openURL('mailto:ssanthanam242@gmail.com?subject=AsyncStorage&body=feel free to give your feedback') }
      title="ssanthanam242@gmail.com"
  >
    ssanthanam242@gmail.com.
  </Text>

                    </View>

                  
                    </ScrollView>
            </View>
        )
    }
}