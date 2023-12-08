import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Navigation from "./../components/Navigation";
import NuovaTaskButton from "./../components/NuovaTaskButton";

// Questa pagina serve come template standard da utilizzare nelle altre pagine dell'applicazione
const BasePageLayout = ({ children }) => {
  return (
    <SafeAreaView style={style.safeArea}>
      <StatusBar></StatusBar>
      <View style={style.appContainer}>
        <Navigation></Navigation>
        <View style={style.contentContainer}>{children}</View>
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

export default BasePageLayout;
