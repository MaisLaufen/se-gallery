import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SecondaryAppBar } from '../../components/SecondaryAppBar/SecondaryAppBar';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../domain/navigation/navigation';
import { HeaderLogo } from '../../components/HeaderLogo/HeaderLogo';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export const SettingsScreen = () => {
  const navigation = useNavigation<Navigation>();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderLogo />
      <SecondaryAppBar
        appBarText="Настройки"
        onNavigateSettings={() => {}}
        onNavigateAbout={() => navigation.navigate('About')}
      />

      <View style={styles.centerWrapper}>
        <Text style={styles.label}>Здесь пока ничего нет 0_0</Text>
      </View>
    </SafeAreaView>
  );
};