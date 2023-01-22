import React, { useState } from "react";
import {  TextInput, Alert, ScrollView } from "react-native"
import styled from "styled-components/native";
import { Button as PaperButton } from 'react-native-paper';


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

const TextArea = styled(TextInput)`
width: 320px;
font-family: ${(props) => props.theme.fonts.paragraph}
margin: 12px;
background-color: ${(props) => props.theme.colors.ui.input};
font-size: 17px;
color: black;
border-radius: 6px;
padding: 6px;
border: 1px solid #000080;
`;

const Paragraph = styled.Text`
  font-size: 16px;
  color: #000080;
  padding-left: 12px;
  font-family: ${(props) => props.theme.fonts.intro}
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


export const SendSmsScreen = ({ navigation }) => {

    
    return (
       <Bakcground>
       <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: "center", paddingTop: 10}}>
      <Label>
        <Paragraph>Sender ID:</Paragraph>
       <Input
       placeholderTextColor="gray"
        placeholder="Optional"
        keyboardType="text"
      />
         </Label>
         <Label>
        <Paragraph>Reciepient(s):</Paragraph>
       <TextArea
       placeholderTextColor="gray"
        placeholder="Multiple reciepents should be separated with comma"
        keyboardType="text"
        multiline={true}
      />
         </Label>
         <Label>
        <Paragraph>Message:</Paragraph>
       <TextArea
       placeholderTextColor="gray"
        placeholder=""
        keyboardType="text"
        multiline={true}
      />
         </Label>
     
     <Button mode="contained" onPress={() => null}>
    Send
  </Button>

       </ScrollView>
       </Bakcground>
    )
}