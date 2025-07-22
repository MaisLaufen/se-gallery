import React from 'react';
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Theme } from '../../theme';

interface Props {
  imageUrl: string;
  onClose: () => void;
}

export const ImageZoomModal = ({ imageUrl, onClose }: Props) => {
  return (
    <Modal visible={true} transparent={true} onRequestClose={onClose}>
      <ImageViewer
        imageUrls={[{ url: imageUrl }]}
        index={0}
        onSwipeDown={onClose}
        enableSwipeDown={true}
        onCancel={onClose}
        saveToLocalByLongPress={false}
        backgroundColor={Theme.primaryColor}
      />
    </Modal>
  );
};