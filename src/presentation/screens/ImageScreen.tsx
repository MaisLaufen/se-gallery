import { RouteProp, useRoute } from '@react-navigation/native';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { RootStackParamList } from '../../domain/navigation/navigation';

type ImageDetailRouteProp = RouteProp<RootStackParamList, 'ImageDetail'>;

const screenWidth = Dimensions.get('window').width;

export const ImageDetailScreen = () => {
  const route = useRoute<ImageDetailRouteProp>();
  const { image } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: image.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.infoRow}>
        <View style={styles.iconWithText}>
          <Feather name="eye" size={20} color="#555" />
          <Text style={styles.text}>{image.views}</Text>
        </View>
        <TouchableOpacity style={styles.iconWithText}>
          <Feather name="heart" size={20} color="#e63946" />
          <Text style={styles.text}>{image.likes}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.tags}>
        {image.tags.split(',').map(tag => `#${tag.trim()}`).join(' ')}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: screenWidth,
    aspectRatio: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    alignItems: 'center',
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  tags: {
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#444',
    flexWrap: 'wrap',
  },
});