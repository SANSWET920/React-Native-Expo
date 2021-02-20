import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageBackground} from 'react-native'
import {Modalize} from 'react-native-modalize'
import CourseList from '../screens/CourseList'
import { Ionicons, Entypo } from '@expo/vector-icons';
import firebase from "firebase";
import MenuDrawer from 'react-native-side-drawer'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Cources extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          open: false
        };
      }
     
      toggleOpen = () => {
        this.setState({ open: !this.state.open });
      };
     
      drawerContent = () => {
        return (
          <View style={styles.animatedBox}>
        
        <Text style={{
                    color:"#000000",
                    fontSize:20,
                    fontFamily:"Bold",
                    left:50,
                    
                    marginTop:20
                    
                    }}>Jump To
                </Text>



<TouchableOpacity style={{flexDirection: "row" , marginTop:30}}  onPress={()=>this.props.navigation.navigate('Home')}>
<Ionicons name="ios-home" color={"#000000"} size={19} />
<Text style={{
                    color:"#000000",
                    fontSize:15,
                    fontFamily:"Medium",
                    width:780,
                    left:10               
                    }}>Home
                </Text>


</TouchableOpacity>



<TouchableOpacity style={{flexDirection: "row" , marginTop:20}} onPress={()=>this.props.navigation.navigate('Profile')}>
<Ionicons name="ios-people" color={"#000000"} size={19} />
<Text style={{
                    color:"#000000",
                    fontSize:15,
                    fontFamily:"Medium",
                    width:780,
                    left:10               
                    }}>Profile
                </Text>


</TouchableOpacity>







<TouchableOpacity style={{flexDirection: "row" , marginTop:20, zIndex:1}} onPress={()=>this.props.navigation.navigate('Menu')}>
<Ionicons name="ios-construct" color={"#000000"} size={19} />
<Text style={{
                    color:"#000000",
                    fontSize:15,
                    fontFamily:"Medium",
                    width:780,
                    left:10               
                    }}>Report
                </Text>


</TouchableOpacity>


<TouchableOpacity style={{flexDirection: "row" , marginTop:20,zIndex:1}} onPress={()=>this.props.navigation.navigate('feedback')}>
<Ionicons name="ios-gift" color={"#000000"} size={19} />
<Text style={{
                    color:"#000000",
                    fontSize:15,
                    fontFamily:"Medium",
                    width:780,
                    left:10               
                    }}>Feedback
                </Text>

</TouchableOpacity>



<TouchableOpacity style={{flexDirection: "row" , marginTop:20}} onPress={()=>this.props.navigation.navigate('EditProfile')}>
<Ionicons name="ios-person-add" color={"#000000"} size={19} />
<Text style={{
                    color:"#000000",
                    fontSize:15,
                    fontFamily:"Medium",
                    width:780,
                    left:10               
                    }}>EditProfile
                </Text>


</TouchableOpacity>


<TouchableOpacity style={{flexDirection: "row" , marginTop:20}} onPress={()=>this.props.navigation.navigate('Home')}>
<Ionicons name="ios-bookmarks" color={"#000000"} size={19} />
<Text style={{
                    color:"#000000",
                    fontSize:15,
                    fontFamily:"Medium",
                    width:780,
                    left:10               
                    }}>Invite friends
                </Text>


</TouchableOpacity>


<TouchableOpacity style={{flexDirection: "row" , marginTop:20}} onPress={()=>this.props.navigation.navigate("Helpandsupport")}>
<Ionicons name="ios-today" color={"#000000"} size={19} />
<Text style={{
                    color:"#000000",
                    fontSize:15,
                    fontFamily:"Medium",
                    width:780,
                    left:10               
                    }}>Help and Support
                </Text>


</TouchableOpacity>



<TouchableOpacity style={{flexDirection: "row" , marginTop:20}} onPress={()=>this.props.navigation.navigate('Privacyandpolicy')}>
<Ionicons name="ios-journal" color={"#000000"} size={19} />
<Text style={{
                    color:"#000000",
                    fontSize:15,
                    fontFamily:"Medium",
                    width:780,
                    left:10               
                    }}>Privacy and Policy
                </Text>


</TouchableOpacity>



<TouchableOpacity style={{flexDirection: "row" , marginTop:20}} onPress={()=>this.props.navigation.navigate('VideoPage')}>
<Ionicons name="ios-browsers" color={"#000000"} size={19} />
<Text style={{
                    color:"#000000",
                    fontSize:15,
                    fontFamily:"Medium",
                    width:780,
                    left:10               
                    }}>Terms and Conditions
                </Text>


</TouchableOpacity>

    <TouchableOpacity style={{top:250, left:70}}   onPress={this.toggleOpen}>                 
                <Feather 
                   name="x"
                   color="black"
                   size={40}
                />

    </TouchableOpacity>  

        
           

     
          </View>
          
        );
      };
     
   

    render(){
        return(

            <MenuDrawer 
            open={this.state.open} 
            drawerContent={this.drawerContent()}
            drawerPercentage={60}
            animationTime={250}
            overlay={true}
            opacity={0.4}
          >

<TouchableOpacity  onPress={this.toggleOpen}>
            <ImageBackground
                source={require('../images/cat.png')}
                style={{width:"100%",height:"100%", zIndex: 1 }}
            >
 
<View style={{
                     flexDirection:"row",
                   justifyContent: "space-between",
                    width:"100%",
                    paddingHorizontal:20,
                    top:10
                }}>
                      

                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate("Home")}
                        style={{
                            paddingHorizontal:10,
                            paddingVertical:13,
                            borderRadius:10,
                            marginTop:30,
                            backgroundColor:"#8bbcdb"
                        }}
                    >
                        <Image
                            source={require('../images/a1.png')}
                            style={{width:20,height:15}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        paddingHorizontal:10,
                        paddingVertical:13,
                        borderRadius:10,
                        marginTop:30,
                        backgroundColor:"#8bbcdb",
                        marginLeft:240
                    }}  onPress={this.toggleOpen}> 
                            <Image
                                source={require('../images/hum.png')}
                                style={{height:15,width:20}}
                            />
                    </TouchableOpacity>
                </View>
                <Text style={{
                    color:"#FFF",
                    fontSize:35,
                    fontFamily:"Bold",
                    width:2780,
                    alignSelf:"center",
                    textAlign:"center",
                    marginTop:35
                    
                    }}>AsyncStorage!
                </Text>

                <Modalize
                    handleStyle={{
                        marginTop:30,
                        backgroundColor:"#e9e9e9",
                        width:80
                    }}
                    modalStyle={{
                        borderTopLeftRadius:60,
                        borderTopRightRadius:60
                    }}
                    alwaysOpen={500}
                    scrollViewProps={{showsVerticalScrollIndicator:false}}
                >
                    <View style={{marginTop:40}}>
                            <CourseList
                                onPress={()=>this.props.navigation.navigate("Xd")}
                                img={require('../images/MB.png')}
                                title="Monthly budget"
                                bg="#fdddf3"
                            />
                             <CourseList
                                  onPress={()=>this.props.navigation.navigate("PS4")}
                                img={require('../images/AN.png')}
                                title="Account Number"
                                bg="#fef8e3"
                            />
                             <CourseList
                                  onPress={()=>this.props.navigation.navigate("PS5")}
                                img={require('../images/T.png')}
                                title="Points to remember"
                                bg="#fcf2ff"
                            />
                             <CourseList 
                                  onPress={()=>this.props.navigation.navigate("PS6")}
                                img={require('../images/DTR.png')}
                                title="Days to remember"
                                bg="#fff0ee"
                            />
                             <CourseList
                                  onPress={()=>this.props.navigation.navigate("PS7")}
                                img={require('../images/BP.png')}
                                title="Bank Pins"
                                bg="#fdddf3"
                            />
                             <CourseList
                                  onPress={()=>this.props.navigation.navigate("PS8")}
                                img={require('../images/SL.png')}
                                title="Significant links"
                                bg="#fef8e3"
                            />
                             <CourseList
                                  onPress={()=>this.props.navigation.navigate("PS9")}
                                img={require('../images/SMP.png')}
                                title="Social Media Password"
                                bg="#fcf2ff"
                            />
                    </View>
                </Modalize>
            </ImageBackground>
          </TouchableOpacity>
            </MenuDrawer>

        )
    }
}


const styles = StyleSheet.create({
animatedBox: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,



    
  },
});