import React from "react";
import styled from "styled-components/native";

const Bakcground = styled.View`
background-color: ${(props) => props.theme.colors.primary};
flex: 1;
`;

const Info = styled.Text`
padding: 15px;
font-family: ${(props) => props.theme.fonts.title};
font-size: 19px;
color: black;
`;


const Label = styled.Text`
font-size: 20px;
text-align: left;
font-family: ${(props) => props.theme.fonts.title};
color: #000080;
`;

const Paragraph = styled.Text`
font-size: 22px;
font-family: ${(props) => props.theme.fonts.title};
text-align: left;
color: black;
`;

const DetailsContainer = styled.View`
text-align: left;
margin-left: 12px;
`;

const DetailsCard = styled.View`
padding: 12px;
border-bottom: 3px black;
`;


export const AddMoneyScreen = ({ navigation }) => {
   
    
    return (
       <Bakcground>
         <Info>You can easily make a transfer to this account and get your funds deposited instantly</Info>
          <DetailsContainer>
       <DetailsCard>
       <Label>Name</Label>
       <Paragraph>Test Ayew</Paragraph>
       </DetailsCard>
       <DetailsCard>
        <Label>Account Number</Label>
       <Paragraph>48384882388</Paragraph>
       </DetailsCard>
        <DetailsCard>
        <Label>Bank Name</Label>
       <Paragraph>Ayo Bank</Paragraph>
       </DetailsCard>
      </DetailsContainer>
       </Bakcground>
    )
}