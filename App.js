import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { theme } from "./src/infrastructure/theme/index";
import { AuthContextProvider } from './src/services/authentication/authentication.context';
import {
  useFonts as useRaleway, 
  Raleway_400Regular,
  Raleway_600SemiBold
} from '@expo-google-fonts/raleway';
import {
  useFonts as useHind, 
  Hind_400Regular
} from '@expo-google-fonts/hind';
import {
  useFonts as useNunito, 
  Nunito_900Black,
  Nunito_200ExtraLight
} from '@expo-google-fonts/nunito';

import { Navigation } from './src/infrastructure/navigations';

export default function App() {
  let [ralewayLoaded] = useRaleway({
    Raleway_400Regular,
    Raleway_600SemiBold
  });
  let [hindLoaded] = useHind({
    Hind_400Regular,
  });
  let [nunitoLoaded] = useNunito({
    Nunito_900Black,
    Nunito_200ExtraLight
  });

  if(!ralewayLoaded || !hindLoaded || !nunitoLoaded) {
    return null
  }


  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
      <AuthContextProvider>
      <Navigation />
      <StatusBar backgroundColor="white" />
      </AuthContextProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

