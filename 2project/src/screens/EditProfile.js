import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions,TextInput,TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import UserPermissions from "./UserPermission";
import Svg, { Image,Circle, ClipPath } from "react-native-svg";
import Fire from "./Fire";
import * as ImagePicker from "expo-image-picker";
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');

const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
  concat
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position
  ]);
}
class MusicApp extends Component {
   
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

  
  constructor() {
    super();

    this.buttonOpacity = new Value(1);

    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            )
          ])
      }
    ]);

   this.onCloseState =  event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(this.buttonOpacity, runTiming(new Clock(), 0,1))
          )
        ])
    }
  ]);


    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3-20, 0],
      extrapolate: Extrapolate.CLAMP
    });

     this.textInputZindex = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1,-1],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [0,100],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputOpacity = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1,0],
      extrapolate: Extrapolate.CLAMP
    });

    this.rotateCross =  interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [180,360],
      extrapolate: Extrapolate.CLAMP
    });

  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'flex-end'
        }}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            transform: [{ translateY: this.bgY }]
          }}
        >
        <Svg height={height + 50} width={width}>
        <ClipPath id="clip">
            <Circle r={height + 50} cx={width /2}/>
        </ClipPath>

        <Image
            href={require("../images/cat.png")}
            width={width}
            height={height + 50}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clip)"
          />

        </Svg>
         
        </Animated.View>
        <View style={{ height: height / 3, justifyContent: 'center' }}>

        <TouchableOpacity  style={{top:-690, left:25}}  onPress={()=>this.props.navigation.navigate("Profile")}>
              <Ionicons name="md-arrow-back" color={"#FFFFFF"} size={32} />
              </TouchableOpacity>
    
    <View  style={{
        top:-700,
        justifyContent: "center",
        alignItems: "center"
    
    }}>
       <Text style={{color: "#ffffff",fontSize: 25, fontFamily:"Bold",}}>Edit Profile</Text>
    </View>
        
<View  style={styles.avatarContainer}>
<TouchableOpacity style={styles.avatarPlaceholder}  onPress={this.handlePickAvatar}>
                        <Image source={{ uri: this.state.user.avatar}} style={styles.avatar} />
                        <Ionicons
                            name="md-add" size={40} color="#FFF" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                    </TouchableOpacity> 
</View>

<View style={{
                                        flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:50,
                    borderWidth:3,
                    marginTop:-630,
                    paddingHorizontal:20,
                    borderColor:"#fff",
                    borderRadius:35,
                    paddingVertical:10
                }}>

                    <TextInput 
                        placeholder="Username     "
                        placeholderTextColor="#FFFFFF"
                        onChangeText={name => this.setState({ user: { ...this.state.user , name} })}
                    value={this.state.user.name}
                        style={{fontSize:17,   fontFamily:"Medium",}}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:50,
                    borderWidth:3,
                    marginTop:30,
                    paddingHorizontal:20,
                    borderColor:"#fff",
                    borderRadius:35,
                    paddingVertical:10
                }}>
                   
                   <TextInput 
                    
                        placeholder="Email      "
                        placeholderTextColor="#fff"
                        onChangeText={email => this.setState({  user: { ...this.state.user, email }  })}
                       value={this.state.user.email}
                        style={{fontSize:17, fontFamily:"Medium"}}
                    />


                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:50,
                    borderWidth:3,
                    marginTop:30,
                    paddingHorizontal:10,
                    borderColor:"#FFFFFF",
                    borderRadius:35,
                    paddingVertical:10
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="New Password"
                        placeholderTextColor="#FFFFFF"
                        onChangeText={password => this.setState({ user: { ...this.state.user, password}})}
                      value={this.state.user.password}
                        style={{paddingHorizontal:10, fontFamily:"Medium",fontSize:17}}
                    />
                    

                </View>
                <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                   </View>




          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }]
              }}
            >
              <Text style={{ fontSize: 15,   fontFamily:"Medium",}}>Check here</Text>
            </Animated.View>
          </TapGestureHandler>
          
          <Animated.View  style={{
            zIndex: this.textInputZindex,
            opacity: this.textInputOpacity,
            transform: [{translateY: this.textInputY}],
            height:height/3,
          ...StyleSheet.absoluteFill,top:null,justifyContent: "center"}}>

        <TapGestureHandler onHandlerStateChange={this.onCloseState}>
          <Animated.View style={styles.closeButton}>
            <Animated.Text style={{ fontFamily:"Bold",fontSize: 15,transform: [{
              rotate: concat(this.rotateCross, 'deg')}]
              }}>X</Animated.Text>
          </Animated.View>
        </TapGestureHandler>



<TouchableOpacity style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:60,
                    backgroundColor:"#800080",
                    paddingVertical:15,
                    borderRadius:23
                }}  onPress={this.handleSignUp} >
                    <Text style={{
                        color:"white",
                        fontFamily:"Bold"
                    }}>Update Now</Text>
                </TouchableOpacity>


          </Animated.View>
        </View>
      </View>
    );
  }
}
export default MusicApp;

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    top:90,
    backgroundColor: 'white',
    height: 40,
    marginHorizontal: 120,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    shadowOffset: { width: 2, height:2},
    shadowColor: "#000000",
    shadowOpacity: 0.2
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)"
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -20,
    left: width / 2 - 20,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 10,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
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
    top:-670
    
},


});