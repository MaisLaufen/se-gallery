import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Props {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const NavigationBar = ({ currentPage, onPageChange }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPageChange(Math.max(currentPage - 1, 1))}>
        <Text style={styles.page}>←</Text>
      </TouchableOpacity>

      {currentPage > 2 && <Text style={styles.page}>...</Text>}
      {currentPage > 1 && (
        <Text style={styles.page}>{currentPage - 1}</Text>
      )}

        <Text style={[styles.page, styles.current]}>{currentPage}</Text>

      <Text style={styles.page}>{currentPage + 1}</Text>
      <Text style={styles.page}>...</Text>

      <TouchableOpacity onPress={() => onPageChange(currentPage + 1)}>
        <Text style={styles.page}>→</Text>
      </TouchableOpacity>
    </View>
  );
};