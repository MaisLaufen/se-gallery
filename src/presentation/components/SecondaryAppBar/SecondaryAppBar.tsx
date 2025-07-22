import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { styles } from './styles';
import { Theme } from '../../theme';

interface Props {
  appBarText: string;
}

export const SecondaryAppBar = ({ appBarText }: Props) => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft color={Theme.secondaryColor} width={32} />
        </TouchableOpacity>

        <Text style={styles.title}>{appBarText}</Text>

        <TouchableOpacity onPress={() => setMenuVisible((v) => !v)}>
          <Icon.MoreVertical color={Theme.tertiaryColor} width={32} />
        </TouchableOpacity>
      </View>

      <BurgerMenu visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </>
  );
};