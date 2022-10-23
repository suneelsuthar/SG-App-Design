import React from "react";
import { StatusBar } from "expo-status-bar";
import MainNavigation from "./src/routing";
import { useFonts } from 'expo-font';

import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Black': require('./src/assets/Fonts/Montserrat-Black.ttf'),
    'Montserrat-Bold': require('./src/assets/Fonts/Montserrat-Bold.ttf'),
    'Montserrat-Light': require('./src/assets/Fonts/Montserrat-Light.ttf'),
    'Montserrat-Medium': require('./src/assets/Fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./src/assets/Fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./src/assets/Fonts/Montserrat-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar  style="inverted" backgroundColor="#2F2F3E" />
      <MainNavigation />
    </>
  )
  
};

export default App;
