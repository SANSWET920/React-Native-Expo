import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";
import { Header, Left, Right, Icon } from "native-base";

class HomeScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render(){
        return (
        <ScrollView>
            <View style={styles.container}>
               <Header style={styles.Header}>
                    <Left style={{right:325, position: "absolute"}}>
                        <Icon name="menu" onPress={() => 
                        this.props.navigation.openDrawer()} />
                    </Left>
                    <Text style={{ fontSize: 20 , fontWeight: "bold", top: 15 }}>INDUSTRY OS</Text>
               </Header>
               <View style={{ flex: 1, alignItems: "center", justifyContent:"center"}}>
               <Image source={require("../assets/Dash1.jpg")}
                 style={{ width: 200, height:200, top: 1, position: "absolute"}}
               />
                </View>
            <Text style={{ fontSize: 20, fontWeight: "bold", top: 250, left: 12, position: "absolute"}}>User Information:</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", position: "absolute", top: 290, left: 20}}>Name:</Text>
            <Text style={{ fontSize: 15, position:"absolute", top: 290, left: 75}}>Santhana Kumar M</Text>
            <Text style={{ fontSize: 15, position: "absolute", position: "absolute", top: 320, left: 20, fontWeight: "bold"}}>Email:</Text>
            <Text style={{ fontSize: 15, position: "absolute", top: 299, left: 75, top: 320}}>ssanthanam242@gmail.com</Text>
            <Text style={{ fontSize: 15, position: "absolute", position: "absolute", top: 350, left: 20, fontWeight: "bold"}}>Employee code:</Text>
            <Text style={{ fontSize: 15, position: "absolute", top: 299, left: 140, top: 350}}>INDOS00222</Text>
            <Text style={{ fontSize: 15, position: "absolute", position: "absolute", top: 380, left: 20, fontWeight: "bold"}}>License type:</Text>
            <Text style={{ fontSize: 15, position: "absolute",  left: 120, top: 380}}>Basic</Text>
            <Text style={{ fontSize: 15, position: "absolute", position: "absolute", top: 409, left: 20, fontWeight: "bold"}}>User Id:</Text>
            <Text style={{ fontSize: 15, position: "absolute",  left: 80, top: 409}}>Student01</Text>
            <Text style={{ fontSize: 15, position: "absolute", position: "absolute", top: 438, left: 20, fontWeight: "bold"}}>Internal Id:</Text>
            <Text style={{ fontSize: 15, position: "absolute",  left: 99, top: 438}}>34c7c699-3bd0-4588-b1ed53e</Text>
            <Text style={{ fontSize: 15, position: "absolute", position: "absolute", top: 468, left: 20, fontWeight: "bold"}}>Created:</Text>
            <Text style={{ fontSize: 15, position: "absolute",  left: 85, top: 468}}>June 13/2020/2:19AM</Text>

            
               <Image source={require("../assets/graph.png")}
                 style={{ width: 160, height:159, top: 500, left: 190, position: "absolute"}}
               />
            
                <Text style={{ fontSize: 20, fontWeight: "bold", top: 655,left: 40, position: "absolute", color: "grey"}}>Information</Text>
            
               <Image source={require("../assets/info.png")}
                 style={{ width: 150, height:130, top: 510, left: 20, position: "absolute"}}
               />

               <Text style={{ fontSize: 20, fontWeight: "bold", top: 655, left: 240, position: "absolute", color: "grey"}}>Graphs</Text>
 
            
               <Image source={require("../assets/insights.png")}
                 style={{ width: 150, height: 130, top: 730, left: 20, position:"absolute"}}
               />
                
                <Text style={{ fontSize:20, fontWeight: "bold", top: 880, left: 55, position: "absolute",color: "grey"}}>Insights</Text>

                <Image source={require("../assets/data1.gif")}
                 style={{ width: 160, height:130, top: 730, left: 190, position: "absolute"}}
               />

               <Text style={{ fontSize: 20, fontWeight: "bold", top: 880, left: 220, position: "absolute", color: "grey"}}>Data tables</Text>

         </View>
         </ScrollView>
        );
    }
}

export default HomeScreen;

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        width: 359,
        height:  950,

    },
    Header: {
         backgroundColor: "#FFF"
    }
})