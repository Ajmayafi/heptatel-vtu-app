import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ServicesScreen } from '../../features/services/screens/services.screen';

const Stack = createStackNavigator();

export const ServicesNavigator = () => {

    const darkMode = true;

  return (
    <Stack.Navigator screenOptions={{
      headerMode: "screen",
    }}>
      <Stack.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          header: () => null
        }}
     />
    </Stack.Navigator>
  );
};
