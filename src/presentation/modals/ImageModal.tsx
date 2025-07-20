import React from 'react';
import { Modal, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { ImageModel as ImageModel } from '../../domain/models/image';

interface Props {
  images: ImageModel[];
  startIndex: number;
  onClose: () => void;
}

export const ImageModal = ({ images, startIndex, onClose }: Props) => {
  const zoomImages = images.map((img) => ({
    url: img.imageUrl,
  }));

  return (
    <Modal visible={true} transparent={true} onRequestClose={onClose}>
      <ImageViewer
        imageUrls={zoomImages}
        index={startIndex}
        onSwipeDown={onClose}
        enableSwipeDown={true}
        onCancel={onClose}
        saveToLocalByLongPress={false}
        backgroundColor="black"
      />
    </Modal>
  );
};