import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet, Alert,TouchableOpacity,Image,ScrollView,Text} from 'react-native'
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
            return Alert.alert('Please enter your task!', () => {
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


                        <TouchableOpacity style={{

backgroundColor:"#fff2f2",
width:50,
height:50,
borderRadius:40,                      
}}   onPress={this._handlePressAdd}>

<Image  style={{height: 45, width: 45}}
    source={require('../images/save.png')}
/>
</TouchableOpacity>


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


})

FormCreate.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default FormCreate