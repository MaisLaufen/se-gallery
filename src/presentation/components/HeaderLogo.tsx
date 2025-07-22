import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#000000',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  yellow: {
    color: 'yellow',
  },
  white: {
    color: 'white',
  }
});