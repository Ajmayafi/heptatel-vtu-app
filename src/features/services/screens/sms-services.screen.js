import React from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import { List } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";


const Background = styled(SafeAreaView)`
flex: 1;
background-color: ${(props) => props.theme.colors.primary};
`;


export function SmsServicesScreen({ navigation }) {

    return (
         <Background>
           <List.Item
    onPress={() => navigation.navigate("send-sms")}
    title="Send SMS"
    titleStyle={{  fontFamily: "Raleway_600SemiBold"}}
    left={props => <Ionicons {...props} name="md-chatbubble-outline" color="#000080"  size={30} />}
       />
       <List.Item
    title="Sender ID"
    onPress={() => navigation.navigate("sender-id")}
    titleStyle={{ fontFamily: "Raleway_600SemiBold"}}
    left={props => <Ionicons {...props} name="people" color="#000080"  size={30} />}
       />
    </Background>
    )
}