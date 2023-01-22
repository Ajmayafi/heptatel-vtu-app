import React from "react";
import styled from "styled-components/native";
import {
  Button as RNButton,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const CardsContainer = styled.View``;

const AmountTitle = styled.Text`
  font-size: 22px;
  text-align: right;
  padding-right: 15px;
  font-family: Nunito_200ExtraLight;
`;

export const TransactionsCardComponent = ({ transactions }) => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ justifyContent: "center" }}>
      {transactions.map((t) => (
        <TouchableOpacity
          key={t.id}
          onPress={() =>
            navigation.navigate("View Transaction Detail", {
              details: t,
            })
          }
        >
          <List.Item
            title={t.title}
            description={t.date}
            titleStyle={{ color: "black", fontFamily: "Raleway_600SemiBold" }}
            descriptionStyle={{
              color: "black",
              fontFamily: "Raleway_400Regular",
            }}
            left={(props) => (
              <Image
                style={{ width: 40, height: 40 }}
                source={
                  t.type === "Money In"
                    ? require("../../../assets/up-arrow.png")
                    : require("../../../assets/down.png")
                }
              />
            )}
            right={(props) => (
              <AmountTitle
                style={{ color: t.type === "Money In" ? "green" : "red" }}
              >
                ₦{t.amount.toString()}
              </AmountTitle>
            )}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
