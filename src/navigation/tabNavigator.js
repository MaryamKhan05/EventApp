import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import NotificationScreen from "../screens/NotificationScreen";
import Colors from "../../assets/Colors";
import Events from "../screens/EventsHome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Profile from "../screens/Profile";
import Play from "../screens/Play";
const blue = Colors.blue;
const black = Colors.black;
const Tab = createBottomTabNavigator();

const TabIcon = ({ icon, size, focused, color }) => {
  const iconStyle = focused ? styles.activeIcon : styles.inactiveIcon;

  return (
    <View style={[styles.iconContainer, iconStyle]}>
      {icon({ size, color })}
    </View>
  );
};
const BottomTab = () => {
  const size = hp('3.2');
  const tabBarOptions = {
    activeTintColor: Colors.Purple, // Set the active tab name color to purple
    tabStyle: { height: hp('25'), paddingBottom:hp('15'), alignItems:'center' },
    style: { marginBottom: hp('-4') },
    labelStyle: { margin: -5 },
  };
  return (
    // <View style={styles.container}>

   
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={(props) => <AntDesign name="home" {...props} />}
              size={size}
              focused={focused}
              color={focused ? Colors.white : black}
            />
          ),
          tabBarLabel: "",
        }}
        name="Home"
        component={Events}
      />
        <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={(props) => <Entypo name="controller-play" {...props} />}
              size={hp('4')}
              focused={focused}
              color={focused ? Colors.white : black}
            />
          ),
          tabBarLabel: "",
        }}
        name="Play"
        component={Play}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={(props) => <Feather name="bell" {...props} />}
              size={size}
              focused={focused}
              color={focused ? Colors.white : black}
            />
          ),
          tabBarLabel: "",
        }}
        name="Notifications"
        component={NotificationScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={(props) => <AntDesign name="user" {...props} />}
              size={size}
              focused={focused}
              color={focused ? Colors.white : black}
            />
          ),
          tabBarLabel: "",
        }}
        name="Profile"
        component={Profile}
      />
    
    </Tab.Navigator>
   
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: hp('3'), // Adjust the border radius as needed
    padding:hp('1.3'), // Adjust the padding as needed
  },
  activeIcon: {
    backgroundColor: Colors.Purple, // Set the background color for the active icon
  },
  inactiveIcon: {
    backgroundColor: "transparent", // Set the background color for the inactive icon
  },
  container: {
    // marginBottom: -10, // Adjust the negative margin to move the tab bar up
  },
});

export default BottomTab;
