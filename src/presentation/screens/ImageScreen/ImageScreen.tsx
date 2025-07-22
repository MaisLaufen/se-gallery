import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { RootStackParamList } from '../../../domain/navigation/navigation';
import { HeaderLogo } from '../../components/HeaderLogo/HeaderLogo';
import { ImageZoomModal } from '../../modals/ImageZoomModal/ImageZoomModal';
import { SecondaryAppBar } from '../../components/SecondaryAppBar/SecondaryAppBar';
import { AuthorOverlay } from '../../components/AuthorOverlay/AuthorOverlay';
import * as Icon from "react-native-feather";
import { styles } from './styles';
import { Theme } from '../../theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ImageDetailRouteProp = RouteProp<RootStackParamList, 'Image'>;
type Navigation = NativeStackNavigationProp<RootStackParamList>;

export const ImageScreen = () => {
  const route = useRoute<ImageDetailRouteProp>();
  const navigation = useNavigation<Navigation>();
  const { image } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
      <HeaderLogo />
      <SecondaryAppBar
        appBarText={`Photo №${image.id}`}
        onNavigateSettings={() => navigation.navigate('Settings')}
        onNavigateAbout={() => navigation.navigate('About')}/>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={{ uri: image.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <AuthorOverlay user={image.userName} userUrl={image.userImageURL}></AuthorOverlay>

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
  <ImageZoomModal
    imageUrl={image.imageUrl}
    onClose={() => setModalVisible(false)}
  />
)}
    </SafeAreaView>
  );
};