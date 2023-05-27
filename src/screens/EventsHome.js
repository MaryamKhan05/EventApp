import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Entypo from "react-native-vector-icons/Entypo";
import BottomTab from "../navigation/tabNavigator";
import Search from "./seacrh";
import Searchbar from "../components/Searchbar";
import Card from "../components/Card";
import Spacer from "../components/Spacer";
import HorizontalList from "../Layouts/HorizontalList";
import Colors from "../../assets/Colors";
const Events = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View>
        <Text
          style={{
            textTransform: "uppercase",
            fontSize: hp(3),
            fontWeight: "700",
            textAlign: "center",
            padding: hp("2"),
          }}
        >
          {" "}
          eventpix
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          // backgroundColor: Colors.purple,
          backgroundColor: "#FFFFFF",
          alignItems: "center",
        }}
      >
        <Spacer />
        <Searchbar />
        <Spacer />
        <Spacer />

        <View
          style={{
            flexDirection: "row",
            //  marginHorizontal:10,
            //  backgroundColor:'pink',
            width: "90%",
            justifyContent: "",
          }}
        >
          <Spacer />
          <TouchableOpacity
            style={{
              backgroundColor: Colors.Purple,
              padding: hp("1.3"),
              paddingHorizontal: hp("2"),
              borderRadius: hp("3.5"),
              flexDirection: "row",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <View
              style={
                {
                  // backgroundColor:Colors.white
                }
              }
            >
              <SimpleLineIcons
                name="energy"
                size={hp(2.6)}
                color={Colors.white}
                style={{
                  paddingRight: hp("1"),
                }}
              />
            </View>
            <Text
              style={{
                color: Colors.white,
                fontSize: hp("2"),
                fontWeight: "600",
              }}
            >
              Events
            </Text>
          </TouchableOpacity>
          <Spacer />
          <TouchableOpacity
            style={{
              backgroundColor: Colors.white,
              padding: hp("1.3"),
              paddingHorizontal: hp("2"),
              borderRadius: hp("3.5"),
              flexDirection: "row",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <View
              style={
                {
                  // backgroundColor:Colors.white
                }
              }
            >
              <SimpleLineIcons
                name="energy"
                size={hp(2.6)}
                color={"#926CC8"}
                style={{
                  paddingRight: hp("1"),
                }}
              />
            </View>
            <Text
              style={{
                color: Colors.black,
                fontSize: hp("2"),
                fontWeight: "600",
              }}
            >
              Host
            </Text>
          </TouchableOpacity>
          <Spacer />
          <TouchableOpacity
            style={{
              backgroundColor: Colors.white,
              padding: hp("1.3"),
              paddingHorizontal: hp("2"),
              borderRadius: hp("3.5"),
              flexDirection: "row",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <View
              style={
                {
                  // backgroundColor:Colors.white
                }
              }
            >
              <Entypo
                name="location"
                size={hp(2.6)}
                color={Colors.Purple}
                style={{
                  paddingRight: hp("1"),
                }}
              />
            </View>
            <Text
              style={{
                color: Colors.black,
                fontSize: hp("2"),
                fontWeight: "600",
              }}
            >
              Venue
            </Text>
          </TouchableOpacity>
        </View>

        <Spacer />
        <View
          style={{
            width: wp("90"),
          }}
        >
          <Spacer />

          <HorizontalList />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Events;
