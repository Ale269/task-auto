import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./src/view/components/Navigation";
import ListOfDuty from "./src/view/components/ListOfDuty";
import NuovaTaskButton from "./src/view/components/NuovaTaskButton";
import Login from "./src/view/screens/Login";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          component={Login}
          name="Login"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
