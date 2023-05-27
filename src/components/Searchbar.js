import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from "../../assets/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const getRecentSearches = async () => {
      try {
        const recentSearchesJson = await AsyncStorage.getItem("recentSearches");
        if (recentSearchesJson) {
          const parsedRecentSearches = JSON.parse(recentSearchesJson);
          setRecentSearches(parsedRecentSearches);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getRecentSearches();
  }, []);

  const handleSearch = () => {
    // Code to handle search
    // Add the search query to the recentSearches array
    setRecentSearches([...recentSearches, query]);
    // Save recent searches in AsyncStorage
    AsyncStorage.setItem(
      "recentSearches",
      JSON.stringify([...recentSearches, query])
    );
  };

  const clearRecentSearches = async () => {
    setRecentSearches([]);
    await AsyncStorage.removeItem("recentSearches");
  };

  return (
    <View>
      <View style={styles.bar}>
        <View style={styles.searchIcon}>
          <AntDesign name="search1" size={20} color={'#926CC8'} />
        </View>

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Search for Events"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          placeholderTextColor={Colors.Gray}
        />
      </View>
      {/* <View
        style={{
          flexDirection: "row",
          margin: 10,
          // backgroundColor: "pink",

          height: "100%",
          width: "100%",
        }}
      >
        <Text style={styles.recentSearchText}>{recentSearches}</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    backgroundColor: Colors.white,
    // backgroundColor: "pink",
    height: hp("6"),
    // borderRadius: 5,
    borderRadius: hp("10"),
    marginHorizontal: 15,
    flexDirection: "row",
    // marginTop: 15,
    width: "90%",
    alignItems: "center",
    borderColor: "black",
    // borderWidth: 0.3,
    // padding: 10,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    // borderColor: "black",
    flex: 1,
    // borderWidth: 0.3,
    fontSize: 18,
    // padding: 10,
    // backgroundColor:'red',
    color: Colors.white,
    fontWeight:'400'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    // height: '40%',
    width: "100%",
    backgroundColor: "white",
    // borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  background: {
    // flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // backgroundColor: Colors.white,
    justifyContent: "center",
    // marginTop: "45%",
    alignItems: "center",
  },
  searchIcon: {
    paddingHorizontal: hp("2"),
  },
});

export default Searchbar;
