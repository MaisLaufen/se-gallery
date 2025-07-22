import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { fetchFilteredImages } from '../../../domain/useCases/fetchImages';
import { ImageModel } from '../../../domain/models/image';
import { ImageGrid } from '../../components/ImageGrid/ImageGrid';
import { MainAppBar } from '../../components/MainAppBar/MainAppBar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../domain/navigation/navigation';
import { FilterModal } from '../../modals/FilterModal/FilterModal';
import { ErrorModal } from '../../modals/ErrorModal/ErrorModal';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import { styles } from './styles';

const IMAGES_PER_PAGE = 30;

export const MainScreen = () => {
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
      if (e.message == 'Network Error') {
        setError('Кажется, у вас нет интернета или сервис недоступен в вашей стране. Если так, воспользуйтесь VPN.')
      }
      else {
        setError(`Произошла неизвестная ошибка: ${e.message}`);
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
      <MainAppBar
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
        <ImageGrid images={images} loadingMore={loading} onImagePress={(image) => navigation.navigate('Image', { image })}/>
        <NavigationBar currentPage={currentPage}
          onPageChange={(newPage) => {setPage(newPage)}}/>
      </View>
      <ErrorModal
        visible={!!error}
        message={error}
        onClose={() => setError(null)}
      />
    </SafeAreaView>
  );
};