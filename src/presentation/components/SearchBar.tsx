import React from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Icon from "react-native-feather";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  onFilterPress: () => void;
}

export const SearchBar = ({ value, onChangeText, onSubmit, onFilterPress }: Props) => {
  return (
    <View style={styles.container}>
      <Icon.Search color="black" width={20} />
      <TextInput
        style={styles.input}
        placeholder="Поиск"
        placeholderTextColor="#666"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        returnKeyType="search"
      />
      <TouchableOpacity onPress={onFilterPress}>
        <Icon.Filter color="black" width={20} />
      </TouchableOpacity>
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