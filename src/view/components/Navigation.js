import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Navigation = () => {
  const selectedDate = new Date();

  return (
    <View style={style.container}>
      <View style={style.buttonMenuContainer}>
        <TouchableOpacity style={style.buttonMenu}>
          <View style={style.menuBarTop}></View>
          <View style={style.menuBarBottom}></View>
        </TouchableOpacity>
      </View>
      <View style={style.dateContainer}>
        <Text style={style.selectedDate}>
          {selectedDate.getDate()}/{selectedDate.getMonth()}/
          {selectedDate.getFullYear()}
        </Text>
      </View>
      <View style={style.changeDateContainer}>
        <TouchableOpacity style={style.buttonChangeDate}>
          <FontAwesome name={"calendar"} fontSize="20" color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonMenuContainer: {
    width: "33%",
  },
  dateContainer: {
    width: "33%",
  },
  changeDateContainer: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttonChangeDate: {
    padding: 24,
  },
  menuBarTop: {
    height: 4,
    backgroundColor: "#fff",
    width: 24,
    marginBottom: 6,
    borderRadius: 16,
  },
  selectedDate: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    padding: 24,
  },
  buttonMenu: {
    padding: 24,
  },
  menuBarBottom: {
    height: 4,
    backgroundColor: "#fff",
    width: 16,
    borderRadius: 16,
  },
});

export default Navigation;
