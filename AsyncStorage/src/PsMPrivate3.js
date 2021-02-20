import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground} from 'react-native'
import {Modalize} from 'react-native-modalize'
import CourseList from "../Components/Profiles"

export default class Cources extends React.Component{
	


	
    render(){
        return(
            <ImageBackground
                source={require('../assets/cat.png')}
                style={{width:"100%",height:"100%"}}
            >
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingHorizontal:20
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
                            source={require('../assets/a1.png')}
                            style={{width:20,height:15}}
                        />
                    </TouchableOpacity>
                    <View style={{
                        paddingHorizontal:10,
                        paddingVertical:13,
                        borderRadius:10,
                        marginTop:30,
                        backgroundColor:"#8bbcdb",
                        marginLeft:240
                    }}> 
                            <Image
                                source={require('../assets/icon.png')}
                                style={{height:15,width:20}}
                            />
                    </View>
                </View>
                <Text style={{
                    color:"#FFF",
                    fontSize:35,
            
                    width:200,
                    alignSelf:"center",
                    textAlign:"center",
                    marginTop:-40
                    
                    }}>
                    UI/UX Cources
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
                    alwaysOpen={200}
                    scrollViewProps={{showsVerticalScrollIndicator:false}}
                >
                    <View style={{marginTop:40}}>
                            <CourseList
                                onPress={()=>this.props.navigation.navigate("Xd")}
                                img={require('../assets/icon.png')}
                                title="Adobe XD Prototyping"
                                bg="#fdddf3"
                            />
                             <CourseList
                                img={require('../assets/icon.png')}
                                title="Sketch shortcuts and tricks"
                                bg="#fef8e3"
                            />
                             <CourseList
                                img={require('../assets/icon.png')}
                                title="UI Motion Design in After Effects"
                                bg="#fcf2ff"
                            />
                            
                    </View>
                </Modalize>
            </ImageBackground>
        )
    }
}