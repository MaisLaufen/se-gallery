import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Image as ImageModel } from '../../domain/models/image';

export const ImageCard = ({ image }: { image: ImageModel }) => (
  <View style={styles.card}>
    <Image source={{ uri: image.imageUrl }} style={styles.img} resizeMode="cover" />
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  img: {
    width: '100%',
    aspectRatio: 1,
  },
});