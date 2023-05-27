import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../assets/Colors";

const Input = ({ placeholder }) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.placeholder}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.white,
    borderWidth: 0.3,
    borderColor: Colors.blue,
    borderRadius: 3,
    padding: hp("1.3"),
    color: Colors.placeholder,
    fontSize: hp(1.2),
    fontWeight: "400",
    lineHeight: 12,
    height:hp('5.2')
  },
});

export default Input;
