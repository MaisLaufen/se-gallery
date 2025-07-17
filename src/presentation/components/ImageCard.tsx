import React, { useState } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import { Image as ImageModel } from '../../domain/models/image';

export const ImageCard = ({ image }: { image: ImageModel }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <View style={styles.card}>
      {loading && !error && (
        <View style={styles.loader}>
          <ActivityIndicator size="small" color="#888" />
        </View>
      )}
      {!error ? (
        <Image
          source={{ uri: image.imageUrl }}
          style={styles.img}
          resizeMode="cover"
          onLoadEnd={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
        />
      ) : (
        <View style={styles.errorPlaceholder}>
          <Text style={styles.errorText}>Ошибка загрузки</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 1,
    margin: 4,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#eee',
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
  errorPlaceholder: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  errorText: {
    fontSize: 12,
    color: '#444',
  },
});