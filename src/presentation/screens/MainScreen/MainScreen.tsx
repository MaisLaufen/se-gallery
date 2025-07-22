import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { observer } from 'mobx-react-lite';
import { mainStore } from '../../../domain/stores/mainStore';
import { useNavigation } from '@react-navigation/native';
import { ImageGrid } from '../../components/ImageGrid/ImageGrid';
import { MainAppBar } from '../../components/MainAppBar/MainAppBar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../domain/navigation/navigation';
import { FilterModal } from '../../modals/FilterModal/FilterModal';
import { ErrorModal } from '../../modals/ErrorModal/ErrorModal';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import { styles } from './styles';

export const MainScreen = observer(() => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    mainStore.loadImages(true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MainAppBar
        onRefresh={() => mainStore.loadImages(true)}
        searchValue={mainStore.query}
        onSearchChange={mainStore.setQuery}
        onSearchSubmit={mainStore.onSearchSubmit}
        onFilterPress={() => mainStore.setFilterVisible(true)}
        onNavigateSettings={() => navigation.navigate('Settings')}
        onNavigateAbout={() => navigation.navigate('About')}
      />

      <FilterModal
        visible={mainStore.filterVisible}
        onClose={() => mainStore.setFilterVisible(false)}
        selectedColors={mainStore.selectedColors}
        onToggleColor={mainStore.toggleColor}
        sortOrder={mainStore.sortOrder}
        onToggleSortOrder={mainStore.toggleSortOrder}
      />

      <View style={styles.flex}>
        <ImageGrid
          images={mainStore.images}
          loadingMore={mainStore.loading}
          onImagePress={(image) => navigation.navigate('Image', { image })}
        />
        <NavigationBar
          currentPage={mainStore.currentPage}
          onPageChange={mainStore.setPage}
        />
      </View>

      <ErrorModal
        visible={!!mainStore.error}
        message={mainStore.error}
        onClose={mainStore.closeError}
      />
    </SafeAreaView>
  );
});