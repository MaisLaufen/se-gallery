import { enableScreens } from 'react-native-screens';

enableScreens();

import React, { useEffect } from 'react';
import { AppNavigator } from './domain/navigation/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { Theme } from './presentation/theme';
import SplashScreen from 'react-native-splash-screen';

export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={Theme.primaryColor} barStyle={'light-content'}></StatusBar>
        <AppNavigator/>
    </SafeAreaProvider>
  )
}