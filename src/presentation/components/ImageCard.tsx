import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { ImageModel as ImageModel } from '../../domain/models/image';
import { Theme } from '../theme';

interface Props {
  image: ImageModel;
  onPress: () => void;
}

export const ImageCard = ({ image, onPress }: Props) => {
  const [loading, setLoading] = useState(true);

  return (
    <Pressable style={styles.card} onPress={onPress}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="small" color={Theme.tertiaryColor} />
        </View>
      )}
      <Image
        source={{ uri: image.imageUrl }}
        style={styles.img}
        resizeMode="cover"
        onLoadEnd={() => setLoading(false)}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 1,
    margin: 2,
    overflow: 'hidden',
    backgroundColor: Theme.primaryColor,
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});