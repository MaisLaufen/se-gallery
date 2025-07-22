import { RouteProp, useRoute } from '@react-navigation/native';
import { Dimensions, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { RootStackParamList } from '../../domain/navigation/navigation';
import { HeaderLogo } from '../components/HeaderLogo';

type ImageDetailRouteProp = RouteProp<RootStackParamList, 'ImageDetail'>;

const screenWidth = Dimensions.get('window').width;

export const ImageDetailScreen = () => {
  const route = useRoute<ImageDetailRouteProp>();
  const { image } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderLogo />

      {/* Картинка с кликом */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={{ uri: image.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>

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

      <Text style={styles.tags}>{image.user}</Text>

      {/* Модальное окно */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <Image
            source={{ uri: image.imageUrl }}
            style={styles.modalImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Modal>
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
    color: '#ccc',
  },
  tags: {
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#bbb',
    flexWrap: 'wrap',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.95)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: '100%',
  },
});