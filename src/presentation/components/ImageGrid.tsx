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
  navigation: any;
}

export const ImageGrid = ({ images, loadingMore, navigation }: Props) => {
  return (
    <>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <ImageCard
            image={item}
            onPress={() => navigation.navigate('ImageDetail', { image: item })}
          />
        )}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row}
        onEndReachedThreshold={0.5}
      />

      {loadingMore && (
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: windowHeight,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black', // полупрозрачный фон для затемнения
          zIndex: 1000,
        }}>
          <ActivityIndicator size="large" color='yellow' />
          <Text style={{ marginTop: 8, fontSize: 20 }}>Загрузка...</Text>
        </View>
      )}
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