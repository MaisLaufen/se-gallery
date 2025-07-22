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
      <Icon.Search width={20} style={styles.icon}/>
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
        <Icon.Filter width={20} style={styles.icon} />
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
    height: 40,
  },
  icon: {
    marginHorizontal: 4,
    color: 'black'
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 40,
    color: '#000',
    paddingVertical: 0, // убираем внутренние отступы, которые мешают
  },
});