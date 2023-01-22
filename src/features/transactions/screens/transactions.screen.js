import React, { useState, useEffect } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { ActivityIndicator, SegmentedButtons, Dialog, Portal, Provider, Button, List } from "react-native-paper";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { TransactionsCardComponent } from "../components/transaction.card";

const Bakcground = styled(SafeAreaView)`
background-color: ${(props) => props.theme.colors.primary};
flex: 1;
`;

const TrsContainer = styled.View`
width: 100%;
height: 100%;
padding-bottom: 30px;
`;

const FilteredByContainer = styled(TouchableOpacity)`
flex-direction: row;
align-items: center;
padding: 13px;
`;

const FilteredByTitle = styled.Text`
font-size: 19px;
color: #000080;
padding-left: 15px;
font-family: ${(props) => props.theme.fonts.intro};
`;

const ListItem = styled(List.Item).attrs({

})`

`;


const NotFoundView = styled.View`

`;

const NotFoundText = styled.Text`
font-size: 20px;
text-align: center;
color: black;
font-family: ${(props) => props.theme.fonts.paragraph};
`;


const mockData = [
   {
      amount: 1000,
      title: "Wallet topup",
      date: "1-01-2023",
      type: "Money In",
      id: "1",
      type: "funding"
   },
   {
      amount: 449,
      title: "1gb MTN data purchased",
      date: "2-01-2023",
      type: "Money Out",
      id: "2",
      type: "data"
   },
   {
      amount: 449,
      title: "N40 Recharged 09061476488",
      date: "2-01-2023",
      type: "Money Out",
      id: "2",
      type: "airtime"
   },
   {
      amount: 1000,
      title: "Wallet topup",
      date: "1-01-2023",
      type: "Money In",
      id: "1",
      type: "funding"
   },
   {
      amount: 1000,
      title: "Wallet topup",
      date: "1-01-2023",
      type: "Money In",
      id: "1",
      type: "funding"
   },
   {
      amount: 1000,
      title: "Wallet topup",
      date: "1-01-2023",
      type: "Money In",
      id: "1",
      type: "funding"
   },
   {
      amount: 1000,
      title: "Wallet topup",
      date: "1-01-2023",
      type: "Money In",
      id: "1",
      type: "funding"
   },
   {
      amount: 1000,
      title: "Wallet topup",
      date: "1-01-2023",
      type: "Money In",
      id: "1",
      type: "funding"
   },
   {
      amount: 1000,
      title: "Wallet topup",
      date: "1-01-2023",
      type: "Money In",
      id: "1",
      type: "funding"
   },
   {
      amount: 1000,
      title: "Wallet topup",
      date: "1-01-2023",
      type: "Money In",
      id: "1",
      type: "funding"
   },
   {
      amount: 1000,
      title: "Wallet topup",
      date: "1-01-2023",
      type: "Money In",
      id: "1",
      type: "funding"
   },
   {
      amount: 1000,
      title: "Wallet topup",
      date: "1-01-2023",
      type: "Money In",
      id: "1",
      type: "funding"
   },
   {
      amount: 1000,
      title: "Wallet topup",
      date: "1-01-2023",
      type: "Money In",
      id: "1",
      type: "funding"
   },
   {
      amount: 1000,
      title: "Wallet topup",
      date: "1-01-2023",
      type: "Money In",
      id: "1",
      type: "funding"
   },
   
]


export const TransactionsScreen = () => {
      const [data, setData] = useState(mockData)
      const [loading, setLoading] = useState(false)
      const [filtBy, setFiltBy] = React.useState('funding')
      const [isVisible, setIsVisible] = useState(false)

      function filtData(data) {
          return data.type === filtBy
      }

      const filteredData = data.filter(filtData)

      useEffect(() => {
        setLoading(true)
        setTimeout(() => {
         setLoading(false)
        }, 4000)
      }, [filtBy])

    return (
      <Provider>
       <Bakcground>
      <FilteredByContainer onPress={() => setIsVisible(true)}>
      <FilteredByTitle>Filtered By: {filtBy.toUpperCase()}</FilteredByTitle>
      <Ionicons name="arrow-down-outline" color={"#000080"}  size={24} />
      </FilteredByContainer>
      <Portal>
      <Dialog visible={isVisible} onDismiss={() => setIsVisible(!isVisible)} style={{ backgroundColor: "#FFFAFA"}}>
        <Dialog.Content>
        <ListItem
    title="Funding"
    onPress={() => {
      setFiltBy("funding")
      setIsVisible(false)
    }}
      />
      <ListItem
      title="Transfer"
      onPress={() => { 
         setFiltBy("transfer")
         setIsVisible(false)
      }}
        />
        <ListItem
        title="Airtime"
        onPress={() => { 
         setFiltBy("airtime")
         setIsVisible(false)
      }}
          />
          <ListItem
          title="Data"
          onPress={() => { 
            setFiltBy("data") 
            setIsVisible(false)
         }}
            />
            <ListItem
            title="SMS"
            onPress={() => { 
               setFiltBy("sms") 
               setIsVisible(false)
            }}
              />
        </Dialog.Content>
      </Dialog>
    </Portal>
       <TrsContainer>
       {loading && <ActivityIndicator color="#000080" style={{ marginTop: 40}} size={45} />}
       {!loading && data && filteredData.length === 0 && <NotFoundView>
         <NotFoundText>No record found</NotFoundText>
         </NotFoundView>}
      {data && data.length >=1 && !loading && <TransactionsCardComponent transactions={data.filter(filtData)} /> }
       </TrsContainer>
       </Bakcground>
       </Provider>
    )
}