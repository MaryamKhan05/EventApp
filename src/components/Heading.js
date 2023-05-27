import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Heading = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'pink',
        paddingVertical:10
      
    },
    title:{
        fontWeight:'700',
        fontSize:18
    }
});

export default Heading;
