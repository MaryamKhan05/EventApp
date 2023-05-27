import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../assets/Colors";

const Continue = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: Colors.white,
            fontWeight: "700",
            fontSize: hp("2.2"),
            lineHeight: 23,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.blue,
    alignItems: "center",
    padding: hp("2"),
    borderRadius: 3,
  },
});

export default Continue;
