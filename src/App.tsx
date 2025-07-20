import { enableScreens } from 'react-native-screens';

enableScreens();

import React from 'react';
import { AppNavigator } from './domain/navigation/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

export default function App() {

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'}></StatusBar>
        <AppNavigator/>
    </SafeAreaProvider>
  )
}