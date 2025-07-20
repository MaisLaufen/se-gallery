import React, { useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  PanResponder,
  Text,
  Animated,
} from 'react-native';
import { ImageModel as ImageModel } from '../../domain/models/image';
import { ImageCard } from './ImageCard';

interface Props {
  images: ImageModel[];
  loadingMore: boolean;
  onEndReached: () => void;
  navigation: any;
}

export const ImageGrid = ({ images, loadingMore, onEndReached, navigation }: Props) => {

  return (
    <>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item, index }) => (
          <ImageCard image={item} 
          onPress={() => navigation.navigate('ImageDetail', {image: item})}/>
        )}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loadingMore ? <ActivityIndicator size="small" style={{alignContent: 'center'}} /> : null
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 2,
    gap: 1,
  },
  row: {
    justifyContent: 'space-between',
  },
});