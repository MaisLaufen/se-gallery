import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SearchBar } from './SearchBar';
import { MenuDrawer } from './MenuDrawer';
import * as Icon from "react-native-feather";
import { HeaderLogo } from './HeaderLogo';
import { Theme } from '../theme';

export const AppBar = ({
  onRefresh,
  searchValue,
  onSearchChange,
  onSearchSubmit,
  onFilterPress,
}: {
  onRefresh: () => void;
  searchValue: string;
  onSearchChange: (text: string) => void;
  onSearchSubmit: () => void;
  onFilterPress: () => void;
}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <HeaderLogo />
      <View style={styles.container}>
        <TouchableOpacity onPress={onRefresh}>
          <Icon.RotateCw color={Theme.secondaryColor} width={32} />
        </TouchableOpacity>
        <SearchBar
          value={searchValue}
          onChangeText={onSearchChange}
          onSubmit={onSearchSubmit}
          onFilterPress={onFilterPress}
        />
        <TouchableOpacity onPress={() => setMenuVisible((v) => !v)}>
          <Icon.MoreVertical color={Theme.tertiaryColor} width={32} />
        </TouchableOpacity>
      </View>
      <MenuDrawer visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: Theme.primaryColor
  }
});