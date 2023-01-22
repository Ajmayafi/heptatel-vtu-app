import React, { useState, useRef } from "react";
import { Text, TextInput, View, Alert, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Button as PaperButton, ActivityIndicator } from "react-native-paper";
import SelectDropdown from "react-native-select-dropdown";
import { styles } from "../../../infrastructure/styles/styles";
import RBSheet from "react-native-raw-bottom-sheet";

const Bakcground = styled.View`
  background-color: ${(props) => props.theme.colors.primary};
  flex: 1;
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

export const BuyAirtimeScreen = ({ navigation }) => {
  const [amount, setAmount] = useState(null);
  const [method, setMethod] = useState(null);

  const refRBSheet = useRef();

  const methods = ["Mtn", "Airtel", "Glo", "9 Mobile"];

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
          <Paragraph>Network:</Paragraph>
          <View style={{ paddingBottom: 10 }} />
          <SelectDropdown
            data={methods}
            onSelect={(selectedItem, index) => {
              setMethod(selectedItem);
            }}
            defaultButtonText={"Select Network"}
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
        <View style={{ margin: 10 }} />
        <Label>
          <Paragraph>Phone Number:</Paragraph>
          <Input
            onChangeText={""}
            placeholderTextColor="gray"
            placeholder="Phone Number"
            keyboardType="decimal-pad"
            multiline={false}
            maxLength={11}
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
        <Button mode="contained" onPress={() => refRBSheet.current.open()}>
          Submit
        </Button>
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType="slide"
        height={300}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View>
          <ActivityIndicator color="#000080" size={44} style={{ margin: 'auto', padding: 39}} />
        </View>
      </RBSheet>
    </Bakcground>
  );
};
