import React from 'react'
import { View, Text, StyleSheet ,Image} from 'react-native'
import Fire from "./Fire";

export default class ProfileScreen extends React.Component {
    state = {
        user: {}
    }

    unsubscrible = null

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
                 <View style={{ marginTop: 64, alignItems: "center" }}>
                     <View style={styles.avatarContainer}>
                         <Image style={styles.avatar} 
                                source={
                                    this.state.user.avatar
                                         ? { uri: this.state.user.avatar }
                                         : require("../assets/icon.png")
                                } 
                         />
                     </View>
                     <Text style={styles.name}>{this.state.user.name}</Text>
                 </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarContainer: {
        shadowColor: "#151734",
        shadowRadius: 15,
        shadowOpacity: 0.4
    },
    avatar: {
        width: 136,
        height: 136,
        borderRadius: 68
    },
    name: {
        marginTop: 24,
        fontSize: 16,
        fontWeight: "600"
    }
})