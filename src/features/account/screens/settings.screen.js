import React from "react";
import { useAuth } from "../../../services/hooks/useAuth";
import {
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar, List, Switch, Surface } from "react-native-paper";
import styled from "styled-components/native";
import * as MailComposer from "expo-mail-composer";

const SettingsBackground = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  padding: 12px;
  padding-bottom: 13px;
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-top: 12px;
`;

const Title = styled.Text`
  padding-top: 20px;
  font-size: 28px;
  color: black;
  font-family: ${(props) => props.theme.fonts.title};
`;

const SetIBackground = styled(Surface)`
  margin: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.ui.input};
`;

const SettingsItem = styled(List.Item).attrs({
  titleStyle: {
    color: "#000080",
    fontFamily: "Raleway_600SemiBold",
  },
  descriptionStyle: {
    color: "black",
    fontFamily: "Raleway_400Regular",
  },
})``;

const VersionTitle = styled.Text`
  font-size: 16px;
  color: black;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.title};
`;

export const SettingsScreen = ({ navigation }) => {
  const { user, dispatch } = useAuth();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const str = user.name;

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const logout = async () => {};

  return (
    <SettingsBackground>
      <ScrollView>
        <AvatarContainer>
          <Avatar.Text elevation={3} size={120} label={str.substring(0, 1)} />
          <Title>{user.name}</Title>
        </AvatarContainer>
        <List.Section>
          <SetIBackground>
            <SettingsItem
              onPress={() => navigation.navigate("Profile Details")}
              title="Profile"
              description="Update your account details"
              left={(props) => (
                <List.Icon {...props} color="#000080" icon="account" />
              )}
            />
          </SetIBackground>

          <SetIBackground>
            <SettingsItem
              title="Support"
              description="Easily get in touch with us"
              onPress={() => {
                MailComposer.composeAsync({
                  recipients: ["test@gmail.com"],
                  subject: "I need help",
                  body: "Your issue here....",
                });
              }}
              left={(props) => (
                <List.Icon {...props} color="#000080" icon="phone" />
              )}
            />
          </SetIBackground>
          <SetIBackground>
            <SettingsItem
              onPress={() => logout()}
              title="Log out"
              description="Sign out your account"
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="arrow-right-bold-box-outline"
                  color="#000080"
                />
              )}
            />
          </SetIBackground>
        </List.Section>
        <VersionTitle>V1.0</VersionTitle>
      </ScrollView>
    </SettingsBackground>
  );
};


