import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
}
from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { fetchPopularImages } from '../../domain/useCases/fetchPopularImages';
import { ImageModel } from '../../domain/models/image';
import { ImageGrid } from '../components/ImageGrid';
import { AppBar } from '../components/AppBar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../domain/navigation/navigation';

const IMAGES_PER_PAGE = 30;

export const GalleryScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [images, setImages] = useState<ImageModel[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const threshold = 80;

  const loadImages = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const newImages = await fetchPopularImages(page, IMAGES_PER_PAGE);
      setImages((prev) => [...prev, ...newImages]);
      setPage((prev) => prev + 1);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <AppBar></AppBar>
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