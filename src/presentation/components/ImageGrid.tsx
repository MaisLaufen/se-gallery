import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Dimensions,
} from 'react-native';
import { ImageModel as ImageModel } from '../../domain/models/image';
import { ImageCard } from './ImageCard';
import { Theme } from '../theme';

interface Props {
  images: ImageModel[];
  loadingMore: boolean;
  onImagePress: (image: ImageModel) => void;
}

export const ImageGrid = ({ images, loadingMore, onImagePress }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <ImageCard
            image={item}
            onPress={() => onImagePress(item)}
          />
        )}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row}
        onEndReachedThreshold={0.5}
      />

      {loadingMore && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={Theme.tertiaryColor} />
          <Text style={styles.loadingText}>Загрузка...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // позиционирование оверлея (не закрывать навигацию)
  },
  list: {
    padding: 2,
    gap: 1,
  },
  row: {
    justifyContent: 'space-between',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.transparentBlack,
    zIndex: 10,
  },
  loadingText: {
    marginTop: 8,
    fontSize: 20,
    color: Theme.secondaryColor,
  },
});