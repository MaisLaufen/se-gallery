import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SearchBar } from '../SearchBar/SearchBar';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import * as Icon from "react-native-feather";
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { styles } from './styles';
import { Theme } from '../../theme';

export const MainAppBar = ({
  onRefresh,
  searchValue,
  onSearchChange,
  onSearchSubmit,
  onFilterPress,
  onNavigateSettings,
  onNavigateAbout,
}: {
  onRefresh: () => void;
  searchValue: string;
  onSearchChange: (text: string) => void;
  onSearchSubmit: () => void;
  onFilterPress: () => void;
  onNavigateSettings: () => void;
  onNavigateAbout: () => void;
}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <HeaderLogo/>
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
      <BurgerMenu visible={menuVisible}
       onClose={() => setMenuVisible(false)}
       onNavigateSettings={onNavigateSettings}
       onNavigateAbout={onNavigateAbout}/>
    </>
  );
};