import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Theme } from '../theme';

interface Props {
  user: string;
  userUrl: string;
}

export const AuthorInfoOverlay = ({ user, userUrl }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: userUrl }} style={styles.avatar} />
      <Text style={styles.username}>{user}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 6,
    left: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: Theme.tertiaryColor,
  },
  username: {
    color: Theme.secondaryColor,
    fontWeight: '600',
    fontSize: 14,
  },
});