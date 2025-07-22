import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { MenuDrawer } from './MenuDrawer';
import { Theme } from '../theme';

interface Props {
  imageId: string;
}

export const ImageDetailAppBar = ({ imageId }: Props) => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft color={Theme.secondaryColor} width={32} />
        </TouchableOpacity>

        <Text style={styles.title}>Photo №{imageId}</Text>

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
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: Theme.primaryColor,
  },
  title: {
    fontSize: 18,
    color: Theme.secondaryColor,
    fontWeight: '600',
  },
});