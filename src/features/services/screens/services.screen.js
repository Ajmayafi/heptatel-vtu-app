import React from "react";
import styled from "styled-components/native";
import {  List } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import {  SafeAreaView, TouchableOpacity } from "react-native";


const Background = styled(SafeAreaView)`
flex: 1;
background-color: ${(props) => props.theme.colors.primary};
`;




export const ServicesScreen = ({ navigation }) => {
  

    const darkMode = true;
  

  return (
    <Background>
    
            <TouchableOpacity onPress={() => navigation.navigate("buy-airtime")}>
        <List.Item
    title="Buy Airtime"
    description="Easily top up your sim"
    titleStyle={{  fontFamily: "Raleway_600SemiBold"}}
    descriptionStyle={{  fontFamily: "Raleway_400Regular"}}
    left={props => <Ionicons {...props} name="call" color={"#000080"}  size={30} />}
  />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate("buy-data")}>
        <List.Item
    title="Buy Data"
    description="Stay connected to the internet"
    titleStyle={{  fontFamily: "Raleway_600SemiBold"}}
    descriptionStyle={{ fontFamily: "Raleway_400Regular"}}
    left={props => <Ionicons {...props} name="earth" color={"#000080"}  size={30} />}
  />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate("buy-cabletv")}>
        <List.Item
    title="Cable TV"
    description="Easily renew your tv subscription"
    titleStyle={{ fontFamily: "Raleway_600SemiBold"}}
    descriptionStyle={{ fontFamily: "Raleway_400Regular"}}
    left={props => <Ionicons {...props} name="tv" color={"#000080"}  size={30} />}
  />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate("electricity-bill")}>
        <List.Item
    title="Electricity"
    description="Never get out of light"
    titleStyle={{ fontFamily: "Raleway_600SemiBold"}}
    descriptionStyle={{ fontFamily: "Raleway_400Regular"}}
    left={props => <Ionicons {...props} name="logo-electron" color={"#000080"}  size={30} />}
  />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate("sms-services")}>
        <List.Item
    title="SMS"
    description="Easily send and manage sms"
    titleStyle={{ fontFamily: "Raleway_600SemiBold"}}
    descriptionStyle={{ fontFamily: "Raleway_400Regular"}}
    left={props => <Ionicons {...props} name="chatbox-ellipses-outline" color={"#000080"}  size={30} />}
  />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate("fund-transfer")}>
        <List.Item
    title="Fund Transfer"
    description="Easily send funds to other Heptatel users"
    titleStyle={{  fontFamily: "Raleway_600SemiBold"}}
    descriptionStyle={{ fontFamily: "Raleway_400Regular"}}
    left={props => <Ionicons {...props} name="md-send" color={"#000080"}  size={30} />}
  />
  </TouchableOpacity>
        <List.Item
    title="Caller Validation"
    description="Comming soon....."
    titleStyle={{ fontFamily: "Raleway_600SemiBold"}}
    descriptionStyle={{ fontFamily: "Raleway_400Regular"}}
    left={props => <Ionicons {...props} name="aperture" color={"#000080"}  size={30} />}
  />  
  
  </Background>
  )
}

//

