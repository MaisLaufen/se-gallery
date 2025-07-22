import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from '../theme';

interface Props {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const PaginationBar = ({ currentPage, onPageChange }: Props) => {
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

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    backgroundColor: Theme.primaryColor,
  },
  page: {
    marginHorizontal: 8,
    fontSize: 18,
    color: Theme.secondaryColor,
  },
  current: {
    fontWeight: 'bold',
    color: Theme.tertiaryColor,
    textDecorationLine: 'underline',
  },
});
