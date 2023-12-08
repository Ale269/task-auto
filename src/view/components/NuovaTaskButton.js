import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const NuovaTaskButton = () => {
  return (
    <View style={style.buttonRowContainer}>
      <TouchableOpacity style={style.buttonTextIconContainer}>
        <FontAwesome name={"plus"} size="16" color="#D103C6" />
        <Text style={style.textElement}>Nuova task</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  buttonRowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextIconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#250023",
    borderRadius: 16,
    gap: 8,
  },
  textElement: {
    color: "#D103C6",
    fontWeight: "bold",
  },
});

export default NuovaTaskButton;
