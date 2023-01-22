import React, { useState } from "react";
import {  StatusBar, ImageBackground, Button as RNB, TouchableOpacity } from "react-native"
import styled from "styled-components/native";
import {  Surface } from 'react-native-paper';
import { Typewriter } from "../components/Typewriter"
import { Typewriter2 } from "../components/Typewriter2";

const Bakcground = styled(ImageBackground).attrs({
  source: require("../../../assets/bg1.jpg"),
})`
opacity: 0.9
flex: 1;
${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`};
`;

const FormContainer = styled.View`
flex: 1;
align-items: center;
justify-content: flex-end;
padding-bottom: 13px;
`;

const Title = styled.Text`
font-size: 44px;
`;

const Typing = styled.View`
top: 40%;

`;


const Button = styled(Surface)`
height: 60px;
border-radius: 90px;
background-color: white;
margin-bottom: 12px;
margin-top: 12px;
`;

const ButtonFont = styled.Text`
font-size: 17px;
text-align: center;
color: black;
font-family: ${(props) => props.theme.fonts.paragraph};
`;



export const MainScreen = ({ navigation }) => {
   const [index, setCurrentIndex] = useState(1)
   const [is1Stopped, setIs1Stopped] = useState(false)
   const [is2Stopped, seIs2Stopped] = useState(true)



   const onEnd = () => {
    if(index === 2) {
      seIs2Stopped(true)
      setIs1Stopped(false)
      setCurrentIndex(1)
    }else {
      setIs1Stopped(true)
      seIs2Stopped(false)
      setCurrentIndex(2)
    }
  
   }

    return (
       <Bakcground>
        <Typing>
              <Typewriter text="All Financial Solutions!" delay={100} variant="small" onEnd={onEnd} isStopped={is1Stopped} />
             <Typewriter2 text="IN ONE APP" delay={200} variant="big" onEnd={onEnd} isStopped={is2Stopped}  /> 
          </Typing>
       <FormContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Register")} style={{ width: "90%"}}>
      <Button style={{  alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 14,
    elevation: 3,
    opacity: 0.9,
    backgroundColor: 'white'}}>
       <ButtonFont style={{
         fontSize: 23,
         letterSpacing: 0.25,
         color: 'black',
       }}>Register an account</ButtonFont>
      </Button>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: "90%"}} onPress={() => navigation.navigate("Login")}>
      <Button style={{  alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 14,
    elevation: 3,
    opacity: 0.9,
    backgroundColor: '#1E90FF'}}>
       <ButtonFont style={{ 
         fontSize: 23,
         letterSpacing: 0.25,
         color: 'white',
       }}>Login to your account</ButtonFont>
      </Button>
      </TouchableOpacity>
       </FormContainer>
       </Bakcground>
    )
}