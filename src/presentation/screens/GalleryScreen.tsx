import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
}
from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { fetchPopularImages, fetchFilteredImages } from '../../domain/useCases/fetchPopularImages';
import { ImageModel } from '../../domain/models/image';
import { ImageGrid } from '../components/ImageGrid';
import { AppBar } from '../components/AppBar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../domain/navigation/navigation';
import { FilterModal } from '../modals/FilterModal';

const IMAGES_PER_PAGE = 30;

export const GalleryScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [images, setImages] = useState<ImageModel[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<'popular' | 'latest'>('popular');

const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'popular' ? 'latest' : 'popular'));
  };

  const loadImages = async (reset = false) => {
    if (loading) return;
    setLoading(true);
    try {
      const newImages = await fetchFilteredImages({
        query: query,
        colors: selectedColors,
        order: sortOrder,
        page: reset ? 1 : page,
        limit: IMAGES_PER_PAGE,
      });
      setImages((prev) => (reset ? newImages : [...prev, ...newImages]));
      setPage((prev) => (reset ? 2 : prev + 1));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

    const onSearchSubmit = () => {
    loadImages(true);

  useEffect(() => {
    loadImages(true);
  }, [selectedColors, sortOrder]);
  
};

  return (
    <SafeAreaView style={styles.container}>
      <AppBar
  onRefresh={() => loadImages(true)}
  searchValue={query}
  onSearchChange={setQuery}
  onSearchSubmit={onSearchSubmit}
  onFilterPress={() => setFilterVisible(true)}
/>
<FilterModal
  visible={filterVisible}
  onClose={() => setFilterVisible(false)}
  selectedColors={selectedColors}
  onToggleColor={toggleColor}
  sortOrder={sortOrder}
  onToggleSortOrder={toggleSortOrder}
/>
      <View style={styles.flex}>
        <ImageGrid images={images} loadingMore={loading} onEndReached={() => {}} navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  flex: {
    flex: 1,
  },
});