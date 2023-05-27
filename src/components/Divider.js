import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const Divider = () => {
  return <View style={styles.divider}></View>;
};
const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: "0.3%",
    backgroundColor: Colors.background,
  },
});
export default Divider;
