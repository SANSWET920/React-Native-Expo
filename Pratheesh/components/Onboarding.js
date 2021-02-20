import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default Onboarding = () => {
  return (
    <View style={styles.container}>
      <Text>Onboazu</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: "center"
  },
});