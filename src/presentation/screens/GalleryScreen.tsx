import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet
}
from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { fetchFilteredImages } from '../../domain/useCases/fetchPopularImages';
import { ImageModel } from '../../domain/models/image';
import { ImageGrid } from '../components/ImageGrid';
import { AppBar } from '../components/AppBar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../domain/navigation/navigation';
import { FilterModal } from '../modals/FilterModal';
import { ErrorModal } from '../modals/ErrorModal';
import { PaginationBar } from '../components/NavigationBar';
import { Theme } from '../theme';

const IMAGES_PER_PAGE = 30;

export const GalleryScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [images, setImages] = useState<ImageModel[]>([]);
  const [currentPage, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [query, setQuery] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<'popular' | 'latest'>('popular');

const toggleColor = (color: string) => {
      setPage(1);
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const toggleSortOrder = () => {
    setPage(1);
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
        page: currentPage,
        limit: IMAGES_PER_PAGE,
      });

      setImages((prev) => (reset ? newImages : [...prev, ...newImages]));
    } catch (e: any) {
      console.error(e);
      if (e?.response?.status === 400 || e?.status === 400) {
        setError('Кажется, у вас отсутствует интернет или сервис не доступен в вашей стране. Если так - попробуйте включить VPN.');
      } else if (e?.message) {
        setError(e.message);
      } else {
        setError('Произошла неизвестная ошибка.');
      }
    } finally {
      setLoading(false);
    }
  };

    const onSearchSubmit = () => {
    setPage(1);
    loadImages(true);
    };

  useEffect(() => {
    loadImages(true);
  }, [selectedColors, sortOrder, currentPage ]);

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
        <ImageGrid images={images} loadingMore={loading} onImagePress={(image) => navigation.navigate('ImageDetail', { image })}/>
        <PaginationBar currentPage={currentPage}
          onPageChange={(newPage) => {setPage(newPage)}}>
        </PaginationBar>
      </View>
      <ErrorModal
        visible={!!error}
        message={error}
        onClose={() => setError(null)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor
  },
  flex: {
    flex: 1,
  },
});