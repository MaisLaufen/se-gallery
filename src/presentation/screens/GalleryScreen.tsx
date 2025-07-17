import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { fetchPopularImages } from '../../domain/useCases/fetchPopularImages';
import { Image } from '../../domain/models/image';
import { ImageCard } from '../components/ImageCard';
import { AppBar } from '../components/AppBar';

export const GalleryScreen = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPopularImages()
      .then(setImages)
      .catch((e) => {
        console.error(e);
        setError('Ошибка загрузки изображений');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppBar/>
      <FlatList
      style={styles.flatlist}
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => <ImageCard image={item} />}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Нет изображений</Text>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
    padding: 15,
    paddingTop: 20,
  },
  list: {
    gap: 8,
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});