import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Navigation from "./src/view/components/Navigation";
import ListOfDuty from "./src/view/components/ListOfDuty";
import NuovaTaskButton from "./src/view/components/NuovaTaskButton";

const App = () => {
  return (
    <SafeAreaView style={style.safeArea}>
      <StatusBar style={style.statusBar}></StatusBar>
      <View style={style.appContainer}>
        <Navigation></Navigation>
        <View style={style.contentContainer}>
          <ListOfDuty></ListOfDuty>
        </View>
        <View style={style.mainActionContainer}>
          <NuovaTaskButton></NuovaTaskButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeArea: {
    backgroundColor: "#000",
  },
  statusBar: {
    color: "#fff",
  },
  appContainer: {
    display: "flex",
    height: "100%",
  },
  contentContainer: {
    backgroundColor: "#000",
    paddingTop: 8,
    display: "flex",
    flexGrow: 1,
  },
  mainActionContainer: {
    backgroundColor: "#000",
    display: "flex",
    flex: 0,
    margin: 24,
    paddingTop: 32,
  },
});

export default App;
