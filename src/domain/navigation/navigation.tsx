import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GalleryScreen } from '../../presentation/screens/GalleryScreen';
import { ImageDetailScreen } from '../../presentation/screens/ImageScreen';
import { ImageModel } from '../models/image';

export type RootStackParamList = {
  Gallery: undefined;
  ImageDetail: { image: ImageModel };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown: false}}
      initialRouteName="Gallery">
        <Stack.Screen name="Gallery" component={GalleryScreen} options={{ title: 'Галерея' }} />
        <Stack.Screen name="ImageDetail" component={ImageDetailScreen} options={{ title: 'Детали изображения' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};