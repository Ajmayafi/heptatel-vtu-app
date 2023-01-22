import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

// SCREENS
import { DashboardScreen } from "../../features/dashboard/screens/dashboard.screen";
import { AddMoneyScreen } from "../../features/deposit/screens/deposit.screen";
import { TransactionsScreen } from "../../features/transactions/screens/transactions.screen";
import { SettingsScreen } from "../../features/account/screens/settings.screen";
import { ViewTransactionDetailScreen } from "../../features/transactions/screens/view-transaction.screen";
import { ProfileDetailsScreen } from "../../features/account/screens/profile-details.screen";
import { BuyAirtimeScreen } from "../../features/services/screens/buy-airtime.screen";
import { BuyDataScreen } from "../../features/services/screens/buy-data.screen";
import { ElectriciyBillScreen } from "../../features/services/screens/electricity-bill.screen";
import { CableTVScreen } from "../../features/services/screens/cable-tv.screen";
import { SmsServicesScreen } from "../../features/services/screens/sms-services.screen";
import { SendSmsScreen } from "../../features/services/screens/send-sms.screen";
import { SenderIDScreen } from "../../features/services/screens/sender-id.screen";
import { FundTrasnferScreen } from "../../features/services/screens/fund-transfer.screen";

import { ServicesNavigator } from "./services.navigation";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const TAB_ICON = {
  Dashboard: "home-outline",
  Settings: "md-settings",
  ServicesTab: "apps",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "#000080",
    tabBarInactiveTintColor: "gray",
    tabBarStyle: { backgroundColor: "#FFFAFA" },
  };
};

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          header: () => null,
        }}
      />
      <Tab.Screen
        name="ServicesTab"
        component={ServicesNavigator}
        options={{
          title: "Services",
          headerBackTitleVisible: false,
          headerStyle: {
            height: 80, // Specify the height of your custom header
            backgroundColor: "#FFFAFA",
            borderBottomWidth: 1,
          },
          headerTitleAlign: "center",
          headerTintColor: "#000080",
          headerTitleStyle: {
            paddingTop: 15,
          },
        }}
      />

      <Tab.Screen
        name="Settings"
        options={{
          header: () => null,
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

export const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          header: () => null,
        }}
        component={HomeTabs}
      />
      <Stack.Screen
        name="Add Money"
        options={{        
          headerTintColor: "#000080",
        }}
        component={AddMoneyScreen}
      />
      <Stack.Screen
        name="buy-airtime"
        component={BuyAirtimeScreen}
        options={{
          headerTintColor: "#000080",
          headerStyle: { backgroundColor: "#FFFAFA" },
          title: "Buy Airtime",
        }}
      />
      <Stack.Screen
        name="buy-data"
        options={{
          title: "Buy Data",
          headerTintColor: "#000080",
          headerStyle: { backgroundColor: "#FFFAFA" },
        }}
        component={BuyDataScreen}
      />
      <Stack.Screen
        name="buy-cabletv"
        options={{
          headerTintColor: "#000080",
          headerStyle: { backgroundColor: "#FFFAFA" },
          title: "Pay Cable TV",
        }}
        component={CableTVScreen}
      />
      <Stack.Screen
        name="electricity-bill"
        options={{
          headerStyle: { backgroundColor: "#FFFAFA" },
          headerTintColor: "#000080",
          title: "Pay Electricity Bill",
        }}
        component={ElectriciyBillScreen}
      />
      <Stack.Screen
        name="Transactions"
        options={{
          title: "Transactions History",
          headerTintColor: "#000080",
          headerStyle: { backgroundColor: "#FFFAFA" },
        }}
        component={TransactionsScreen}
      />
      <Stack.Screen
        name="View Transaction Detail"
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#000080",
          headerStyle: { backgroundColor: "#FFFAFA" },
          title: "Transaction Details",
        }}
        component={ViewTransactionDetailScreen}
      />
      <Stack.Screen
        name="sms-services"
        options={{
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#FFFAFA" },
          headerTintColor: "#000080",
          title: "SMS Services",
        }}
        component={SmsServicesScreen}
      />
      <Stack.Screen
        name="send-sms"
        options={{
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#FFFAFA" },
          headerTintColor: "#000080",
          title: "Send SMS",
        }}
        component={SendSmsScreen}
      />
      <Stack.Screen
        name="sender-id"
        options={{
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#FFFAFA" },
          headerTintColor: "#000080",
          title: "Sender ID Registration",
        }}
        component={SenderIDScreen}
      />
      <Stack.Screen
        name="fund-transfer"
        options={{
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#FFFAFA" },
          headerTintColor: "#000080",
          title: "Fund Transfer",
        }}
        component={FundTrasnferScreen}
      />
      <Stack.Screen
        name="Profile Details"
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#000080",
          headerStyle: { backgroundColor: "#FFFAFA" },
          title: "Account Details",
        }}
        component={ProfileDetailsScreen}
      />
    </Stack.Navigator>
  );
};
