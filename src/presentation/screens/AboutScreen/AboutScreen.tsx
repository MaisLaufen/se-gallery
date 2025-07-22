import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SecondaryAppBar } from '../../components/SecondaryAppBar/SecondaryAppBar';
import { styles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../domain/navigation/navigation';
import { HeaderLogo } from '../../components/HeaderLogo/HeaderLogo';

export const AboutScreen = () => {

    type Navigation = NativeStackNavigationProp<RootStackParamList>;
    const navigation = useNavigation<Navigation>();

    return (
    <SafeAreaView style={styles.container}>
        <HeaderLogo/>
      <SecondaryAppBar
        appBarText="О приложении"
        onNavigateSettings={() => navigation.navigate('Settings')}
        onNavigateAbout={() => {}}
      />

      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <Image
          source={require('../../../../assets/logo.png')}
          style={{height: 250, resizeMode: 'contain' }}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>Pintretest ver. 1.0.0</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>
          Это демонстрационное приложение для просмотра изображений с фильтрами и избранным.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.text, { fontWeight: 'bold', marginBottom: 8 }]}>
          Версии используемых технологий:
        </Text>
        <Text style={styles.text}>JDK - 17.0.12</Text>
        <Text style={styles.text}>SDK - 34</Text>
        <Text style={styles.text}>NDK - 29</Text>
        <Text style={styles.text}>React Native - 0.80.1</Text>
        <Text style={styles.text}>Metro - 0.82.5</Text>

      </View>

      <View style={[styles.section, { marginTop: 30 }]}>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/MaisLaufen/se-gallery')}>
          <Text style={[styles.link]}>Репозиторий</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', marginTop: 'auto', paddingVertical: 10 }}>
        <Text style={styles.text}>[SE] Gallery 1.0.0</Text>
      </View>
    </SafeAreaView>
  );
};