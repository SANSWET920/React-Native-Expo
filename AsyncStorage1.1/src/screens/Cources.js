import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Share,
    ImageBackground} from 'react-native'
import {Modalize} from 'react-native-modalize'
import CourseList from '../screens/CourseList'
import { Ionicons, Entypo } from '@expo/vector-icons';
import firebase from "firebase";
import MenuDrawer from 'react-native-side-drawer'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
  
  


export default class Cources extends React.Component{

    
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'https://asyncstorage.000webhostapp.com/download.html',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


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


<TouchableOpacity style={{flexDirection: "row" , marginTop:20}} onPress={this.onShare}>
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

    <TouchableOpacity style={{top:150, left:80}}   onPress={this.toggleOpen}>                 
                <Feather 
                   name="x"
                   color="black"
                   size={40}
                />

    </TouchableOpacity>  

        
           

     
          </View>
          
        );
      };
     
   
  interstitialDidClose() {
    AdMobInterstitial.requestAdAsync((error) => error && log(error));
   }

  componentDidMount() {
   
    AdMobInterstitial.setTestDeviceID('EMULATOR');
    AdMobInterstitial.setAdUnitID('ca-app-pub-8598728716633931/7179035728');

    AdMobInterstitial.addEventListener('adLoaded', () =>
      console.log('AdMobInterstitial adLoaded'),
    );
    AdMobInterstitial.addEventListener('adFailedToLoad', error =>
      console.warn(error),
    );
    AdMobInterstitial.addEventListener('adOpened', () =>
      console.log('AdMobInterstitial => adOpened'),
    );
    AdMobInterstitial.addEventListener('adClosed', () => {
      console.log('AdMobInterstitial => adClosed');
      AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
    });
    AdMobInterstitial.addEventListener('adLeftApplication', () =>
      console.log('AdMobInterstitial => adLeftApplication'),
    );

    AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
  }

  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
  }


  showInterstitial() {
   AdMobInterstitial.showAdAsync().catch(error => console.warn(error))
  }
  

  
  interstitialDidClose() {
    AdMobInterstitial.requestAdAsync((error) => error && log(error));
   }

  componentDidMount() {
   
    AdMobInterstitial.setTestDeviceID('EMULATOR');
    AdMobInterstitial.setAdUnitID('ca-app-pub-8598728716633931/4603669815');

    AdMobInterstitial.addEventListener('adLoaded', () =>
      console.log('AdMobInterstitial adLoaded'),
    );
    AdMobInterstitial.addEventListener('adFailedToLoad', error =>
      console.warn(error),
    );
    AdMobInterstitial.addEventListener('adOpened', () =>
      console.log('AdMobInterstitial => adOpened'),
    );
    AdMobInterstitial.addEventListener('adClosed', () => {
      console.log('AdMobInterstitial => adClosed');
      AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
    });
    AdMobInterstitial.addEventListener('adLeftApplication', () =>
      console.log('AdMobInterstitial => adLeftApplication'),
    );

    AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
  }

  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
  }


  showInterstitial1() {
   AdMobInterstitial.showAdAsync().catch(error => console.warn(error))
  }
  


  
  
  interstitialDidClose() {
    AdMobInterstitial.requestAdAsync((error) => error && log(error));
   }

  componentDidMount() {
   
    AdMobInterstitial.setTestDeviceID('EMULATOR');
    AdMobInterstitial.setAdUnitID('ca-app-pub-8598728716633931/6247923979');

    AdMobInterstitial.addEventListener('adLoaded', () =>
      console.log('AdMobInterstitial adLoaded'),
    );
    AdMobInterstitial.addEventListener('adFailedToLoad', error =>
      console.warn(error),
    );
    AdMobInterstitial.addEventListener('adOpened', () =>
      console.log('AdMobInterstitial => adOpened'),
    );
    AdMobInterstitial.addEventListener('adClosed', () => {
      console.log('AdMobInterstitial => adClosed');
      AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
    });
    AdMobInterstitial.addEventListener('adLeftApplication', () =>
      console.log('AdMobInterstitial => adLeftApplication'),
    );

    AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
  }

  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
  }


  showInterstitial2() {
   AdMobInterstitial.showAdAsync().catch(error => console.warn(error))
  }
  



  
  
  interstitialDidClose() {
    AdMobInterstitial.requestAdAsync((error) => error && log(error));
   }

  componentDidMount() {
   
    AdMobInterstitial.setTestDeviceID('EMULATOR');
    AdMobInterstitial.setAdUnitID('ca-app-pub-8598728716633931/8351343131');

    AdMobInterstitial.addEventListener('adLoaded', () =>
      console.log('AdMobInterstitial adLoaded'),
    );
    AdMobInterstitial.addEventListener('adFailedToLoad', error =>
      console.warn(error),
    );
    AdMobInterstitial.addEventListener('adOpened', () =>
      console.log('AdMobInterstitial => adOpened'),
    );
    AdMobInterstitial.addEventListener('adClosed', () => {
      console.log('AdMobInterstitial => adClosed');
      AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
    });
    AdMobInterstitial.addEventListener('adLeftApplication', () =>
      console.log('AdMobInterstitial => adLeftApplication'),
    );

    AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
  }

  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
  }


  showInterstitial3() {
   AdMobInterstitial.showAdAsync().catch(error => console.warn(error))
  }
  



  
  
  interstitialDidClose() {
    AdMobInterstitial.requestAdAsync((error) => error && log(error));
   }

  componentDidMount() {
   
    AdMobInterstitial.setTestDeviceID('EMULATOR');
    AdMobInterstitial.setAdUnitID('ca-app-pub-8598728716633931/3973114424');

    AdMobInterstitial.addEventListener('adLoaded', () =>
      console.log('AdMobInterstitial adLoaded'),
    );
    AdMobInterstitial.addEventListener('adFailedToLoad', error =>
      console.warn(error),
    );
    AdMobInterstitial.addEventListener('adOpened', () =>
      console.log('AdMobInterstitial => adOpened'),
    );
    AdMobInterstitial.addEventListener('adClosed', () => {
      console.log('AdMobInterstitial => adClosed');
      AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
    });
    AdMobInterstitial.addEventListener('adLeftApplication', () =>
      console.log('AdMobInterstitial => adLeftApplication'),
    );

    AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
  }

  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
  }


  showInterstitial4() {
   AdMobInterstitial.showAdAsync().catch(error => console.warn(error))
  }
  



  
  
  interstitialDidClose() {
    AdMobInterstitial.requestAdAsync((error) => error && log(error));
   }

  componentDidMount() {
   
    AdMobInterstitial.setTestDeviceID('EMULATOR');
    AdMobInterstitial.setAdUnitID('ca-app-pub-8598728716633931/4743270618');

    AdMobInterstitial.addEventListener('adLoaded', () =>
      console.log('AdMobInterstitial adLoaded'),
    );
    AdMobInterstitial.addEventListener('adFailedToLoad', error =>
      console.warn(error),
    );
    AdMobInterstitial.addEventListener('adOpened', () =>
      console.log('AdMobInterstitial => adOpened'),
    );
    AdMobInterstitial.addEventListener('adClosed', () => {
      console.log('AdMobInterstitial => adClosed');
      AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
    });
    AdMobInterstitial.addEventListener('adLeftApplication', () =>
      console.log('AdMobInterstitial => adLeftApplication'),
    );

    AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
  }

  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
  }


  showInterstitial5() {
   AdMobInterstitial.showAdAsync().catch(error => console.warn(error))
  }
  



  
  
  interstitialDidClose() {
    AdMobInterstitial.requestAdAsync((error) => error && log(error));
   }

  componentDidMount() {
   
    AdMobInterstitial.setTestDeviceID('EMULATOR');
    AdMobInterstitial.setAdUnitID('ca-app-pub-8598728716633931/3430188945');

    AdMobInterstitial.addEventListener('adLoaded', () =>
      console.log('AdMobInterstitial adLoaded'),
    );
    AdMobInterstitial.addEventListener('adFailedToLoad', error =>
      console.warn(error),
    );
    AdMobInterstitial.addEventListener('adOpened', () =>
      console.log('AdMobInterstitial => adOpened'),
    );
    AdMobInterstitial.addEventListener('adClosed', () => {
      console.log('AdMobInterstitial => adClosed');
      AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
    });
    AdMobInterstitial.addEventListener('adLeftApplication', () =>
      console.log('AdMobInterstitial => adLeftApplication'),
    );

    AdMobInterstitial.requestAdAsync().catch(error => console.warn(error));
  }

  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
  }


  showInterstitial6() {
   AdMobInterstitial.showAdAsync().catch(error => console.warn(error))
  }
  


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
                                onPress={() => { this.showInterstitial(); this.props.navigation.navigate('Xd') }}
                            
                                img={require('../images/MB.png')}
                                title="Monthly budget"
                                bg="#fdddf3"
                            />
                             <CourseList
                              onPress={() => { this.showInterstitial1(); this.props.navigation.navigate('PS4') }}
                        
                                img={require('../images/AN.png')}
                                title="Account Number"
                                bg="#fef8e3"
                            />
                             <CourseList
                                 onPress={() => { this.showInterstitial2(); this.props.navigation.navigate('PS5') }}
                                img={require('../images/T.png')}
                                title="Points to remember"
                                bg="#fcf2ff"
                            />
                             <CourseList 
                                 onPress={() => { this.showInterstitial3(); this.props.navigation.navigate('PS6') }}
                                img={require('../images/DTR.png')}
                                title="Days to remember"
                                bg="#fff0ee"
                            />
                             <CourseList
                                 onPress={() => { this.showInterstitial4(); this.props.navigation.navigate('PS7') }}
                                img={require('../images/BP.png')}
                                title="Pin number"
                                bg="#fdddf3"
                            />
                             <CourseList
                                 onPress={() => { this.showInterstitial5(); this.props.navigation.navigate('PS8') }}
                                img={require('../images/SL.png')}
                                title="Significant links"
                                bg="#fef8e3"
                            />
                             <CourseList
                                 onPress={() => { this.showInterstitial6(); this.props.navigation.navigate('PS9') }}
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