import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import * as Icon from "react-native-feather";
export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon.Search color="black" />
      <TextInput
        style={styles.input}
        placeholder="Поиск"
        placeholderTextColor="#666"
      />
      <Icon.Filter color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingHorizontal: 12,
    marginHorizontal: 8,
    height: 36,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#888',
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    color: '#000',
  },
});