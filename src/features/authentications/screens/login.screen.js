import React, { useState } from "react";
import { StatusBar, TextInput, ImageBackground } from "react-native";
import styled from "styled-components/native";
import { Button as PaperButton, ActivityIndicator } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Bakcground = styled(ImageBackground).attrs({
  source: require("../../../assets/cool-background.png")
})`
  background-color: white;
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`};
`;

const FormContainer = styled.View`
margin: auto;
align-items: center
justify-content: center;
`;

const Title = styled.Text`
  font-size: 25px;
  color: #ffffff;
  font-family: ${(props) => props.theme.fonts.intro};
`;

const Input = styled(TextInput)`
  width: 320px;
  height: 66px;
  margin: 12px;
  background-color: ${(props) => props.theme.colors.ui.input};
  font-size: 19px;
  color: black;
  padding: 6px;
  border-radius: 6px;
  font-family: ${(props) => props.theme.fonts.paragraph};
`;

const Button = styled(PaperButton)`
  width: 190px;
  margin-top: 18px;
  padding: 7px;
`;

export const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const loginUser = async () => {};

  return (
    <Bakcground>
      <FormContainer>
        <Title>Login Now</Title>
        <Input
          value=""
          placeholder="Username"
          placeholderTextColor="gray"
          keyboardType="text"
        />
        <Input
          onChangeText=""
          value=""
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="gray"
          keyboardType="password"
        />
        {loading && <ActivityIndicator size={45} color="white" />}
        {!loading && (
          <Button
            mode="contained"
            style={{
              backgroundColor: "#000080",
            }}
            onPress={() => loginUser()}
          >
            Login
          </Button>
        )}
        <Button
          mode="text"
          textColor="#000080"
          onPress={() => navigation.navigate("Register")}
        >
          Or register
        </Button>
      </FormContainer>
    </Bakcground>
  );
};
