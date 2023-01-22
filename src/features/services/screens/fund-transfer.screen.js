import React, { useState } from "react";
import { TextInput, Alert, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Button as PaperButton } from "react-native-paper";

const Bakcground = styled.View`
  background-color: ${(props) => props.theme.colors.primary};
  flex: 1;
`;

const Input = styled(TextInput)`
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

const Paragraph = styled.Text`
  font-size: 15px;
  color: #000080;
  padding-left: 12px;
  font-family: ${(props) => props.theme.fonts.intro};
`;

const Label = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

const Button = styled(PaperButton)`
  width: 190px;
  margin-top: 18px;
  padding: 7px;
  background-color: ${(props) => props.theme.colors.ui.button};
`;

export const FundTrasnferScreen = ({ navigation }) => {
  return (
    <Bakcground>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 10,
        }}
      >
        <Label>
          <Paragraph>Reciepient Username:</Paragraph>
          <Input
            placeholderTextColor="gray"
            placeholder=""
            keyboardType="text"
          />
        </Label>
        <Label>
          <Paragraph>Amount:</Paragraph>
          <Input
            placeholderTextColor="gray"
            placeholder=""
            keyboardType="decimal-pad"
          />
        </Label>

        <Button mode="contained" onPress={() => null}>
          Send
        </Button>
      </ScrollView>
    </Bakcground>
  );
};
