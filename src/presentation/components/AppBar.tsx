import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SearchBar } from './SearchBar';
import { MenuDrawer } from './MenuDrawer';
import * as Icon from "react-native-feather";
import { HeaderLogo } from './HeaderLogo';

export const AppBar = ({ onRefresh }: { onRefresh: () => void }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <>
        <HeaderLogo />
      <View style={styles.container}>
        <TouchableOpacity onPress={onRefresh}>
            <Icon.RefreshCw color="white" width={32} />
        </TouchableOpacity>
        <SearchBar />
        <TouchableOpacity onPress={toggleMenu}>
          <Icon.MoreVertical color="white" width={32} />
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
    backgroundColor: '#6200ee',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
});