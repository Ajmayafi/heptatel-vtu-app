import React, { useState } from "react";
import {
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  View,
  ImageBackground
} from "react-native";
import styled from "styled-components/native";
import {
  Button as PaperButton,
  ActivityIndicator,
  Surface,
} from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import { useAuth } from "../../../services/hooks/useAuth";

const Bakcground = styled(ImageBackground).attrs({
  source: require("../../../assets/cool-background.png")
})`
  background-color: white;;
  flex: 1;
  width: 100%;
  margin: auto;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`};
`;

const FormContainer = styled.View`
  width: 100%;
  height: 100%;
  margin-top: 30px;
`;

const Title = styled.Text`
  font-size: 25px;
  color: #ffffff;
  font-family: ${(props) => props.theme.fonts.intro};
`;

const Input = styled(TextInput)`
  width: 320px;
  height: 58px;
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



export const RegisterScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)



  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const registerUser = async () => {
    setError(null);
  };

  return (
    <Bakcground>
      <FormContainer>
        <ScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 50,
          }}
        >
          <Title>Register</Title>
          {currentIndex === 0 && (
            <>
              <Input
                onChangeText=""
                value=""
                placeholderTextColor="gray"
                placeholder="First Name"
                keyboardType="text"
              />
              <Input
                onChangeText=""
                value=""
                placeholderTextColor="gray"
                placeholder="Last Name"
                keyboardType="text"
              />
              <Input
                onChangeText=""
                value=""
                placeholder="Create password"
                secureTextEntry
                placeholderTextColor="gray"
                keyboardType="password"
              />
              <Input
                onChangeText=""
                value=""
                placeholder="Confirm password"
                secureTextEntry
                placeholderTextColor="gray"
                keyboardType="password"
              />
              <Button
                mode="contained"
                onPress={() => {
                  setCurrentIndex(1);
                }}
                style={{
                  backgroundColor: "#000080",
                }}
              >
                Next
              </Button>

              <Button
                mode="text"
                textColor="#000080"
                onPress={() => navigation.navigate("Login")}
              >
                Or login
              </Button>
            </>
          )}

          {currentIndex === 1 && (
            <>
              <Ionicons
                onPress={() => setCurrentIndex(0)}
                size={46}
                color={"white"}
                style={{
                  alignSelf: "flex-start",
                  paddingLeft: 22,
                  padding: 20,
                }}
                name="arrow-back-circle-sharp"
              />
              <Input
                value=""
                placeholderTextColor="gray"
                placeholder="Email"
                keyboardType="email"
              />
              <Input
                value=""
                placeholderTextColor="gray"
                placeholder="Username"
                keyboardType="text"
              />
              <Input
                onChangeText=""
                placeholderTextColor="gray"
                value=""
                placeholder="Phone Number"
                multiline={false}
                maxLength={11}
                keyboardType="decimal-pad"
              />

              <View style={{ padding: 20 }} />

              {loading && (
                <ActivityIndicator
                  style={{ marginTop: 10 }}
                  size={45}
                  color="white"
                />
              )}
              {!loading && (
                <Button
                  mode="contained"
                  style={{
                    backgroundColor: "#000080",
                  }}
                  onPress={() => registerUser()}
                >
                  Register
                </Button>
              )}

              <View style={{ padding: 70 }}></View>
            </>
          )}
        </ScrollView>
      </FormContainer>
    </Bakcground>
  );
};
