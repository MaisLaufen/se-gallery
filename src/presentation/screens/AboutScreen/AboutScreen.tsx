import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SecondaryAppBar } from '../../components/SecondaryAppBar/SecondaryAppBar';
import { styles } from './styles';
import { Theme } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../domain/navigation/navigation';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export const AboutScreen = () => {
  const navigation = useNavigation<Navigation>();

  return (
    <SafeAreaView style={styles.container}>
      <SecondaryAppBar
        appBarText="О приложении"
        onNavigateSettings={() => navigation.navigate('Settings')}
        onNavigateAbout={() => {}}
      />

      <View style={styles.section}>
        <Text style={styles.text}>Приложение Pintretest</Text>
        <Text style={styles.text}>Версия: 1.0.0</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>
          Это демонстрационное приложение для просмотра изображений с фильтрами и избранным.
        </Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/your_repo')}>
          <Text style={[styles.link, styles.text]}>GitHub проекта</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};