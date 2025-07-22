import React, { useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  PanResponder,
  Text,
  Animated,
  Dimensions,
} from 'react-native';
import { ImageModel as ImageModel } from '../../domain/models/image';
import { ImageCard } from './ImageCard';

const windowHeight = Dimensions.get('window').height;

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
          <ActivityIndicator size="large" color="yellow" />
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
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    zIndex: 10,
  },
  loadingText: {
    marginTop: 8,
    fontSize: 20,
    color: 'white',
  },
});