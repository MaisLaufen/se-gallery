import { RouteProp, useRoute } from '@react-navigation/native';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { RootStackParamList } from '../../domain/navigation/navigation';
import { HeaderLogo } from '../components/HeaderLogo';
import { ImageModal } from '../modals/ImageModal';
import { ImageDetailAppBar } from '../components/ImageDetailAppBar';
import { AuthorInfoOverlay } from '../components/AuthorInfoOverlay';
import * as Icon from "react-native-feather";
import { Theme } from '../theme';

type ImageDetailRouteProp = RouteProp<RootStackParamList, 'ImageDetail'>;

const screenWidth = Dimensions.get('window').width;

export const ImageDetailScreen = () => {
  const route = useRoute<ImageDetailRouteProp>();
  const { image } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
      <HeaderLogo />
      <ImageDetailAppBar imageId={image.id}></ImageDetailAppBar>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={{ uri: image.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <AuthorInfoOverlay user={image.user} userUrl={image.userImageURL}></AuthorInfoOverlay>

      <Text style={styles.tags}>
        {image.tags.split(',').map(tag => `#${tag.trim()}`).join(' ')}
      </Text>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.iconWithText}>
          <Icon.Eye width={20} color={Theme.tertiaryColor} />
          <Text style={styles.text}>{image.views}</Text>
        </View>
        <View style={styles.iconWithText}>
          <Icon.Heart width={20} color={Theme.like} />
          <Text style={styles.text}>{image.likes}</Text>
        </View>
      </View>

      {modalVisible && (
  <ImageModal
    imageUrl={image.imageUrl}
    onClose={() => setModalVisible(false)}
  />
)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
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
    verticalAlign: 'bottom'
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  text: {
    fontSize: 16,
    color: Theme.secondaryColor
  },
  tags: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignSelf: 'center',
    fontSize: 16,
    color: Theme.info,
    flexWrap: 'wrap',
  }
});