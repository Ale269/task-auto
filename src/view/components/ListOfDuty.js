import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import getData from "../controller/GetData";

const Data = getData();

const Item = (props) => {
  const { name, timeStart, timeEnd } = props;

  return (
    <View style={style.listElementContainer}>
      <View style={style.elementTextNameContainer}>
        <Text style={style.elementTextName}>{name}</Text>
      </View>
      <View style={style.elementTextTimeContainer}>
        <Text style={style.elementTextTime}>
          {timeStart} - {timeEnd}
        </Text>
      </View>
    </View>
  );
};

const ListOfDuty = () => {
  // attenzione, questa funzione deve necessariamente prendere il parametro item dentro un oggett
  const renderItem = ({ item }) => {
    return (
      <Item
        name={item.name}
        timeStart={item.timeStart}
        timeEnd={item.timeEnd}
      ></Item>
    );
  };

  return (
    <View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const style = StyleSheet.create({
  listElementContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#101010",
    padding: 16,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 16,
    borderRadius: 16,
  },
  elementTextNameContainer: {
    flex: 1,
  },
  elementTextName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  elementTextTimeContainer: {
    flex: 0,
  },
  elementTextTime: {
    fontSize: 12,
    paddingTop: 4,
    paddingLeft: 16,
    fontWeight: "bold",
    color: "#858585",
  },
});

export default ListOfDuty;
