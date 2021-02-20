import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet, Alert,TouchableOpacity,Image,ScrollView,Text,Clipboard} from 'react-native'
import PropTypes from 'prop-types'
import { LinearGradient} from "expo-linear-gradient";
import InputScrollView from 'react-native-input-scroll-view';

class FormCreate extends Component {

    state = {
        text: '',
    };


    _handleChangeText = text => {
        this.setState({
            text,
        })
    }

    _handlePressAdd = () => {
        this._submit()
    }

    _handleSubmitText = () => {
        this._submit()
    }

    _submit = () => {
        const {text} = this.state

        if (!text) {
            return Alert.alert('Please enter your text!', () => {
                //Focus on input text
            })
        }

        this.props.onCreate(text)
        this.setState({
            text: ''
        })
    }

    render() {

        const { text } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.form}>

 
                <View
                        style={{
                        
                            flexDirection:"row",
                            paddingVertical:5,
                            backgroundColor:"#fff2f2",
                            marginHorizontal:5,
                            paddingVertical:10,
                            alignItems:"center",
                            borderRadius:10,
                            justifyContent:"center"
                        }}
                    >
                    <ScrollView style={{height: 290,width: 190, }}>
                    <InputScrollView>
            
            <TextInput   style={{ color:"#000000",
                            fontFamily:"Medium",
                            fontSize:15,
                            paddingLeft: 10, paddingRight: 10}} 
                            value={text}
                            onSubmitEditing={this._handleSubmitText}
                            onChangeText={this._handleChangeText}
                            multiline
                            placeholder=" Type here . . ."
                            placeholderTextColor="#000000"
                        />

                       
      	</InputScrollView>
       

         
                        </ScrollView>

                      

                    </View>

                   
                    <View style={styles.container1}>
            
            <View style={[styles.statContainer]}>
          
<TouchableOpacity style={{
                           alignItems:"center",
                           justifyContent:"center",
                           backgroundColor:"#fff2f2",
                           width:50,
                           height:50,
                           borderRadius:40,
                   
                       }}  onPress={ () =>  Clipboard.setString(text)}>
               
                           <Image  style={{height: 35, width: 35}}
                               source={require('../images/copy.png')}
                           />
                       </TouchableOpacity>


                 <Text style={styles.stat}>Copy</Text>
            </View>
            <View style={styles.statContainer}>
            <TouchableOpacity style={{
                           alignItems:"center",
                           justifyContent:"center",
                           backgroundColor:"#fff2f2",
                           width:50,
                           height:50,
                           borderRadius:40,
                   
                       }}   onPress={this._handlePressAdd}>
               
                           <Image  style={{height: 40, width: 40}}
                               source={require('../images/save.png')}
                           />
                       </TouchableOpacity>
                 <Text style={styles.stat}>Save</Text>
            </View>
       </View>
                     

                </View>
                
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
    },

    form: {
        

        // flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center'
    },
   
      statContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex:1
      },
      statNumber: {
        fontSize: 20,
        fontWeight: "600",
        color: "#FFFFFF"
      },
      stat: {
        fontSize:11,
        fontWeight: "600",
        letterSpacing: 1,
        fontFamily:"Medium",
        color: "#888",
        marginTop: 6
      },
      
      container1: {
        paddingVertical:20,
        paddingHorizontal:0,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 0,
        marginTop: 1
      },

})

FormCreate.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default FormCreate