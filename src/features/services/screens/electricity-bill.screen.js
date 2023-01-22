import React, { useState } from "react";
import { Text, TextInput, View, Alert, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Button as PaperButton } from "react-native-paper";
import SelectDropdown from "react-native-select-dropdown";
import { styles } from "../../../infrastructure/styles/styles";

const Bakcground = styled.View`
  background-color: ${(props) => props.theme.colors.primary};
  flex: 1;
`;

const Paragraph = styled.Text`
  font-size: 15px;
  color: #000080;
  font-family: ${(props) => props.theme.fonts.intro}
  padding-left: 12px;
`;

const Label = styled.View`
  align-items: flex-start;
  justify-content: center;
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

const Button = styled(PaperButton)`
  width: 190px;
  margin-top: 18px;
  padding: 7px;
  background-color: ${(props) => props.theme.colors.ui.button};
`;

export const ElectriciyBillScreen = ({ navigation }) => {
  const methods = ["Kedco", "Nepa", "Light So", "Arabsat"];
  const packages = ["Basic 7 days @N90"];

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
          <Paragraph>Service Provider:</Paragraph>
          <SelectDropdown
            data={methods}
            onSelect={(selectedItem, index) => {}}
            defaultButtonText={"Select Provider"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return (
                <View>
                  <Text>{item}</Text>
                </View>
              );
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            selectedRowStyle={styles.dropdown1SelectedRowStyle}
          />
        </Label>
        <View style={{ paddingTop: 10 }} />
        <Label>
          <Paragraph>Package:</Paragraph>
          <SelectDropdown
            data={packages}
            onSelect={(selectedItem, index) => {}}
            defaultButtonText={"Select Package"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return (
                <View>
                  <Text>{item}</Text>
                </View>
              );
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            selectedRowStyle={styles.dropdown1SelectedRowStyle}
          />
        </Label>
        <View style={{ paddingTop: 10 }} />
        <Label>
          <Paragraph>Meter Number:</Paragraph>
          <Input
            onChangeText={""}
            placeholderTextColor="gray"
            placeholder="Meter Number"
            keyboardType="decimal-pad"
          />
        </Label>

        <Label>
          <Paragraph>Amount:</Paragraph>
          <Input
            onChangeText={""}
            placeholderTextColor="gray"
            placeholder="₦0.00"
            keyboardType="decimal-pad"
          />
        </Label>
        <Button mode="contained" onPress={() => null}>
          Submit
        </Button>
      </ScrollView>
    </Bakcground>
  );
};
