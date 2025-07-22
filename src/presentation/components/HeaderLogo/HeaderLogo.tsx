import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const HeaderLogo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        <Text style={styles.yellow}>[</Text>
        <Text style={styles.white}>SE</Text>
        <Text style={styles.yellow}>]</Text>
        <Text style={styles.white}>  Gallery</Text>
      </Text>
    </View>
  );
};