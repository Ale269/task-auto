import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import BasePageLayout from "./BasePageLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState("");

  return (
    <BasePageLayout>
      <View>
        <Text style={style.Testo}>Hello world</Text>
      </View>
    </BasePageLayout>
  );
};

const style = StyleSheet.create({
  Testo: {
    color: "#fff",
  },
});

export default Login;
