import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Card from "../components/Card";
import Colors from "../../assets/Colors";

const HorizontalList = () => {
  const data = [
    {
      id: 1,
      price: "10$",
      time: "10 Dec",
      name: "Oliver Concert",
      date: "10 am",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      price: "10$",
      time: "10 Dec",
      name: "Oliver Concert ",
      date: "10 am",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      price: "10$",
      time: "10 Dec",
      name: " Oliver Concert",
      date: "10 am",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreGfjPrsS1lqH0Q-iudydCETWFdB9apkPAw&usqp=CAU",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={{}}>
        <Card>
          <View
            style={{
              // flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                // paddingHorizontal:10,
                backgroundColor: "pink",
                height: hp("30"),
                borderRadius: hp("5"),
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: wp("90"),
                  height: hp("30"),
                  // width:73,
                  // height:73,
                  //   marginHorizontal: 10,
                  //   padding:2,
                  borderTopLeftRadius: hp("5"),
                  borderTopRightRadius: hp("5"),
                }}
                // resizeMode="contain"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: wp("75"),
                // width:347,
                height: hp("8"),
                marginVertical: hp("2"),
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={
                  {
                    //   backgroundColor: "spink",
                    //   width: wp("75"),
                    // width:347,
                    //   height: hp("8"),s
                    //   marginVertical: hp("2"),
                  }
                }
              >
                <Text
                  style={{
                    // sfontFamily: "PoppinsSemiBold",
                    fontSize: hp("2.8"),
                    color: Colors.black,
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    // fontFamily: "PoppinsRegular",
                    fontSize: hp("2.4"),
                    color: Colors.black,
                    fontWeight: "400",
                  }}
                >
                  {item.time} at {item.date}
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: '#3DC48B',
                //   backgroundColor: Colors.white,
                  borderRadius: hp("2"),
                  padding: hp("1"),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: hp("2.3"),
                    fontWeight: "700",
                    color: Colors.white,
                  }}
                >
                  {item.price}
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </View>
    );
  };
  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      // horizontal
      // showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 10, // Adjust the width to set the desired margin
  },
});

export default HorizontalList;
