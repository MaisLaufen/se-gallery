import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
interface Props {
  user: string;
  userUrl: string;
}

export const AuthorOverlay = ({ user, userUrl }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: userUrl }} style={styles.avatar} />
      <Text style={styles.username}>{user}</Text>
    </View>
  );
};