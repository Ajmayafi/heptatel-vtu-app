import React, { useEffect} from "react";
import { View, Text, StatusBar, Image, Pressable, SafeAreaView } from "react-native";
import { Surface, Button as PaperButton } from "react-native-paper";
import styled from "styled-components/native";
import { useAuth } from "../../../services/hooks/useAuth";

const Background = styled(SafeAreaView)`
background-color: ${(props) => props.theme.colors.primary};
flex: 1;
${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`};
`;


const WelcomeHeader = styled.View`
padding: 22px;
padding-left: 30px;
justify-content: center;
flex-direction: row;
`;

const WHTitle = styled.Text`
font-size: 19px;
color: black;
font-family: ${(props) => props.theme.fonts.paragraph}
`;

const WHEnd = styled.View`
margin-left: auto;
`;

const HeaderBG = styled.View`
height: 200px;
`;



const CustomButton = styled(Surface)`
width: 120px;
height: 30px;
background-color: ${(props) => props.theme.colors.ui.button};
border-radius: 4px;
`;

const CSText = styled.Text`
font-size: 14px;
padding-top: 6px;
color: white;
text-align: center;
font-family: ${(props) => props.theme.fonts.intro};
`;


const UserBalance = styled(Surface)`
width: 95%;
text-align: center;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme.colors.ui.button};
height: 120px;
border-radius: 10px;
max-width: 290px;
margin: auto;
`;

const UBTitle = styled.Text`
font-size: 23px;
font-family: ${(props) => props.theme.fonts.intro}
color: white;
`;

const QLinksTitle = styled.Text`
font-size: 26px;
color: black;
text-align: left;
padding-left: 37px;

font-family: ${(props) => props.theme.fonts.intro}
`;

const Paragraph = styled.Text`
font-size: 18px;
color: white;
`;

const Navigations = styled.View`
margin-top: 33px;
`;

const NVItem1 = styled(Surface)`
width: 120px;
padding: 20px;
height: 100px;
border-radius: 14px;
align-items: center;
justify-content: center;
background-color: white;
`;

const NVItem2 = styled(Surface)`
width: 120px;
background-color: white;
padding: 20px;
height: 100px;
color: white;
align-items: center;
justify-content: center;
border-radius: 14px;
`;

const Row = styled.View`
flex-direction: row;
justify-content: space-evenly;
margin-top: 18px;
`;


const NVItem3 = styled(Surface)`
width: 120px;
background-color: white;
padding: 20px;
height: 100px;
color: white;
align-items: center;
justify-content: center;
border-radius: 14px;
`;

const NVItem4 = styled(Surface)`
width: 120px;
background-color: white;
padding: 20px;
height: 100px;
color: white;
align-items: center;
justify-content: center;
border-radius: 14px;
`;

const NVITitle = styled.Text`
font-size: 20px;
text-align: center;
color: black;
font-family: ${(props) => props.theme.fonts.paragraph}
`;


export const DashboardScreen = ({ navigation }) => {
     const { user, dispatch } = useAuth()


    return (
        <Background>
      <HeaderBG>
        <WelcomeHeader>
       <WHTitle>Hi,{user.name}</WHTitle>
       <WHEnd>
      <Pressable onPress={() => navigation.navigate("Add Money")}>
       <CustomButton><CSText>Add Money</CSText></CustomButton>
       </Pressable>
       </WHEnd>
        </WelcomeHeader>
         <UserBalance>
        <Paragraph>Current Balance</Paragraph>
        <UBTitle>₦{user.balance}</UBTitle>
         </UserBalance>
         </HeaderBG>
          <Navigations>
        <QLinksTitle>Quick Links ⚡</QLinksTitle>
        <Row>
        <Pressable onPress={() => navigation.navigate("buy-airtime")}>
         <NVItem1>
         <Image style={{ width: 50, height: 50}} source={require("../../../assets/phone-ringing.png")}/>
         <NVITitle>Airtime</NVITitle>
         </NVItem1>
         </Pressable>
         <Pressable onPress={() => navigation.navigate("buy-data")}>
         <NVItem2>
         <Image style={{ width: 50, height: 50}} source={require("../../../assets/internet-addiction.png")}/>
            <NVITitle>Data</NVITitle>
         </NVItem2>
         </Pressable>
         </Row>
         <Row>
        <Pressable onPress={() => navigation.navigate("buy-cabletv")}>
         <NVItem3>
         <Image style={{ width: 50, height: 50}} source={require("../../../assets/smart-tv.png")}/>
         <NVITitle>Cable TV</NVITitle>
         </NVItem3>
         </Pressable>
         <Pressable onPress={() => navigation.navigate("Transactions")}>
         <NVItem4>
         <Image style={{ width: 50, height: 50}} source={require("../../../assets/transaction.png")}/>
            <NVITitle>History</NVITitle>
         </NVItem4>
         </Pressable>
         </Row>
          </Navigations>
        </Background>
    )
}
