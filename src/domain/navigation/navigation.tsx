import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../../presentation/screens/MainScreen/MainScreen';
import { ImageScreen } from '../../presentation/screens/ImageScreen/ImageScreen';
import { ImageModel } from '../models/image';

export type RootStackParamList = {
  Main: undefined;
  Image: { image: ImageModel };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown: false}}
      initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Галерея' }} />
        <Stack.Screen name="Image" component={ImageScreen} options={{ title: 'Изображение' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};