import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Fire from './Fire';
import * as firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";

class Stats extends React.Component{
    
      
    state = {
        user: {},
        email: "",
        displayName: ""
    };
  
  componentDidMount() {
      const { email, displayName } = firebase.auth().currentUser;
  
      this.setState({ email, displayName });
  }
  
  
  
  signOutUser = () => {
    firebase.auth().signOut();
  };
  
  
  
    unsubscrible = null;
  
    componentDidMount() {
        const user = this.props.uid || Fire.shared.uid;
  
        this.unsubscrible = Fire.shared.firestore
            .collection("users")
            .doc(user)
            .onSnapshot(doc => {
                this.setState({ user: doc.data() });
            });
    }
  
    componentWillUnmount() {
        this.unsubscrible();
    }


    render() {
    return (
        <View style={styles.container}>
             <View style={styles.statContainer}>
             <Image source={require('../images/report.png')} 
            style={{width:25, height:25}}
             />
                  <Text style={styles.stat}>Report</Text>
             </View>
             <View style={[styles.statContainer, styles.divider]}>
             <TouchableOpacity  >
             <Image source={require('../images/feedback2.png')} 
            style={{width:30, height:25}}
             />
             </TouchableOpacity>
                  <Text style={styles.stat}>feedback</Text>
             </View>
             <View style={styles.statContainer}>
             <TouchableOpacity     onPress={this.signOutUser}>
             <Image source={require('../images/log.png')} 
            style={{width:25, height:25}}
             />
             </TouchableOpacity>
            
                  <Text style={styles.stat}>Logout</Text>
             </View>
        </View>
    );
}
}
export default Stats;

const styles = StyleSheet.create({
    container: {
       paddingVertical:20,
       paddingHorizontal:25,
       marginBottom: 1,
       backgroundColor: "#333",
       flexDirection: "row",
       justifyContent: "space-between",
       marginHorizontal: 16,
       borderRadius: 16,
       marginTop: -48
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
        textTransform: "uppercase",
        color: "#888",
        marginTop: 6
    },
    divider: {
        borderLeftWidth:1,
        borderRightWidth:1,
        borderColor: "#888"
    }
})