import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { fetchPopularImages } from '../../domain/useCases/fetchPopularImages';
import { Image } from '../../domain/models/image';
import { ImageCard } from '../components/ImageCard';

export const GalleryScreen = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularImages()
      .then(setImages)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, padding: 8 }}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={images}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => <ImageCard image={item} />}
          contentContainerStyle={{ gap: 8 }}
        />
      )}
    </SafeAreaView>
  );
};