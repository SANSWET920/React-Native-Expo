import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";


export default Sidebar = props => (
    <ScrollView>
        <ImageBackground 
           source={require("../assets/image1.jpg")}
           style={{ width: undefined, padding: 16, paddingTop: 30 }}
        >
            <Image source={require("../assets/image3.jpg")}
            style={styles.profile} />
            <Text style={styles.name}>Sanswet Santhanam</Text>

            <View style={{ flexDirection: "row" }}>
                <Text style={styles.followers}>Welcome To Bellivery</Text>
                <Ionicons name="md-people" size={16} color="rgba(255, 255, 255, 0.8)" />
            </View>
        </ImageBackground>

        <View style={styles.container}>
            <DrawerNavigatorItems {...props} />
        </View>
        
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 85,
        height: 85,
        borderRadius: 10,
        borderColor: "#FFF"
    },
    name: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 8
    },
    followers: {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 13,
        marginRight: 4,
        fontWeight: "bold"
    }
});