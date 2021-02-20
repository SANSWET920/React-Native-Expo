
import React  from 'react';
import { StyleSheet, View } from 'react-native';
import CameraEle from '../Components/CameraClick.js';

export default class App extends React.Component {

    constructor(props){
        super(props);
        process.nextTick = setImmediate;
    }

    render() {
        return (
            <View style={styles.container}>
                <CameraEle />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',   
    }
});