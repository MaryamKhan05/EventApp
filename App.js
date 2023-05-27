import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";

import BottomTab from "./src/navigation/tabNavigator";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (

    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:'center'
  },
});
