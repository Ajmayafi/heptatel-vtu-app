import React from "react";
import { ScrollView, TextInput } from "react-native";
import styled from "styled-components/native";
import { Button as PaperButton } from "react-native-paper";
import { useAuth } from "../../../services/hooks/useAuth";

const Bakcground = styled.View`
  background-color: ${(props) => props.theme.colors.primary};
  flex: 1;
  width: 100%;
  margin: auto;
`;

const FormContainer = styled.View`
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  font-size: 19px;
  color: black;
  font-family: ${(props) => props.theme.fonts.paragraph};
`;

const Input = styled(TextInput).attrs({
  editable: true,
})`
width: 320px;
height: 50px;
margin: 12px;
background-color: ${(props) => props.theme.colors.ui.input};
font-size: 18px;
color: black;
border-radius: 5px;
padding: 7px;
font-family: ${(props) => props.theme.fonts.paragraph};
border: 1px solid #000080;
`;

const DisabledInput = styled(TextInput).attrs({
  editable: false,
})`
  width: 320px;
  height: 66px;
  background-color: ${(props) => props.theme.colors.ui.input};
  font-size: 19px;
  color: black;
  font-family: ${(props) => props.theme.fonts.paragraph};
  border: 1px solid gray;
  padding: 6px;
  border-radius: 6px;
`;

const Button = styled(PaperButton)`
  width: 190px;
  margin-top: 18px;
  padding: 7px;
  background-color: ${(props) => props.theme.colors.ui.button};
`;

const InputWrapper = styled.View`
  align-items: flex-start;
  margin: 12px;
`;

const Label = styled.Text`
  font-size: 17px;
  text-align: left;
  padding-left: 10px;
  color: #000080;
  font-family: ${(props) => props.theme.fonts.intro};
`;

export const ProfileDetailsScreen = ({ navigation }) => {
  return (
    <Bakcground>
      <FormContainer>
        <ScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 50,
            paddingBottom: 50,
          }}
        >
          <Title>Update your account details</Title>
          <InputWrapper>
            <Label>Email:</Label>
            <DisabledInput
              value="test@gmail.com"
              keyboardType="email-address"
              placeholderTextColor="gray"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Name:</Label>
            <Input value="Tester User" disabled keyboardType="text" />
          </InputWrapper>
          <InputWrapper>
            <Label>State:</Label>
            <DisabledInput
              value="Kano"
              editable={false}
              placeholderTextColor="gray"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>City:</Label>
            <DisabledInput
              value="Kano"
              disabled={true}
              placeholderTextColor="gray"
              keyboardType="password"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Address:</Label>
            <DisabledInput
              value="Lorem ipsum was the best"
              disabled={true}
              placeholderTextColor="gray"
              keyboardType="password"
            />
          </InputWrapper>
          <Button mode="contained" onPress={() => null}>
            Update Profile
          </Button>
        </ScrollView>
      </FormContainer>
    </Bakcground>
  );
};
