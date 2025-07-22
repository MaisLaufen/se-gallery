import React from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import { ImageModel } from '../../../domain/models/image';
import { ImageCard } from '../ImageCard/ImageCard';
import { styles } from './styles';

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
          <ActivityIndicator size="large" color={'yellow'} />
          <Text style={styles.loadingText}>Загрузка...</Text>
        </View>
      )}
    </View>
  );
};