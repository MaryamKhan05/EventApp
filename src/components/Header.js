import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../../assets/Colors";
const Header = ({ headerTitle }) => {
  const size = 20;
  const color = Colors.black;
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back"
          size={size}
          color={color}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    // backgroundColor: Colors.fadedgray,
    padding: 10,
    backgroundColor:Colors.white
  },
  headerTitle: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 21,
    alignSelf:'center'
  },
  icon: {
    marginLeft: 5,
    marginRight:'35%'
  },
});

export default Header;
