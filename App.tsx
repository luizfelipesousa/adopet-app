import React from 'react';

import 'react-native-gesture-handler';
import { Routes } from './src/routes';

import { BackGround } from './src/components/BackGround';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black
} from '@expo-google-fonts/lato';

export default function App() {

  let [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <BackGround>
      <Routes />
    </BackGround>
  );
}