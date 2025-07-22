import React from 'react';
import { View, Text, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SecondaryAppBar } from '../../components/SecondaryAppBar/SecondaryAppBar';
import { styles } from './styles';
import { Theme } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../domain/navigation/navigation';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export const SettingsScreen = () => {
  const navigation = useNavigation<Navigation>();

  // Заглушка переключателя
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <SecondaryAppBar
        appBarText="Настройки"
        onNavigateSettings={() => {}}
        onNavigateAbout={() => navigation.navigate('About')}
      />

      <View style={styles.section}>
        <Text style={styles.label}>Тёмная тема</Text>
        <Switch
          value={darkMode}
          onValueChange={(value) => setDarkMode(value)}
          trackColor={{ false: '#ccc', true: Theme.like }}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Уведомления</Text>
        <Switch value={true} onValueChange={() => {}} disabled />
      </View>
    </SafeAreaView>
  );
};