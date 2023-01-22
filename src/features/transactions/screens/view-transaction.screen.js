import React from "react";
import { ScrollView, View } from "react-native";
import { useAuth } from "../../../services/hooks/useAuth";
import styled from "styled-components/native";

const TransactionBackground = styled.View`
flex: 1;
background-color: ${(props) => props.theme.colors.primary};
`;


const DetailsCard = styled.View`
padding: 12px;
border-bottom: 3px black;
`;


const Label = styled.Text`
font-family: ${(props) => props.theme.fonts.intro};
font-size: 20px;
text-align: left;
color: #000080;

`;

const Paragraph = styled.Text`
font-size: 22px;
text-align: left;
color: black;
font-family: ${(props) => props.theme.fonts.paragraph};
`;



export const ViewTransactionDetailScreen = ({ route }) => {

   const { details } = route.params;

   

  return (
     <TransactionBackground>
         <ScrollView contentContainerStyle={{  paddingBottom: 40 }}  >    
       <DetailsCard>
       <Label>Type:</Label>
       <Paragraph>Data Purchased</Paragraph>
       </DetailsCard>
       <View style={{ borderBottomWidth: 1, borderBottomColor: "grey"}} />
       <DetailsCard>
       <Label>Description:</Label>
       <Paragraph>1gb Data Purchased 09023939392</Paragraph>
       </DetailsCard>
       <View style={{ borderBottomWidth: 1, borderBottomColor: "grey"}} />
       <DetailsCard>
        <Label>Amount:</Label>
       <Paragraph>₦{details.amount}</Paragraph>
       </DetailsCard>
       <View style={{ borderBottomWidth: 1, borderBottomColor: "grey"}} />
       <DetailsCard>
        <Label>Status:</Label>
       <Paragraph>Successful</Paragraph>
       </DetailsCard>
       <View style={{ borderBottomWidth: 1, borderBottomColor: "grey"}} />
        <DetailsCard>
        <Label>Date:</Label>
       <Paragraph>{details.date}</Paragraph>
       </DetailsCard>
       <View style={{ borderBottomWidth: 1, borderBottomColor: "grey"}} />
        <DetailsCard>
        <Label>Reference</Label>
       <Paragraph>jd4u489s39d9</Paragraph>
       </DetailsCard> 
       
      </ScrollView>
     </TransactionBackground>
  )
}