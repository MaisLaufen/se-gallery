import React, { useState } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { ImageModel } from '../../../domain/models/image';
import { styles } from './styles';

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
          <ActivityIndicator size="small" color='yellow' />
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