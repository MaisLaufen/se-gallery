import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import * as Icon from "react-native-feather";
import { styles } from './styles'
import { Theme } from '../../theme';

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
        placeholderTextColor={Theme.placeholderColor}
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