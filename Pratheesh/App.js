import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import slides from "./slides";
import Onboarding from "./OnboardingItem";

export default App = () => {
  return (
    <View style={styles.container}>
      <FlatList 
      data={slides}
      renderItem={({ item }) => <OnboardingItem item={item} />} 
      horizontal
      showsHorizontalScrollIndicator
      pagingEnabled 
      

      />
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