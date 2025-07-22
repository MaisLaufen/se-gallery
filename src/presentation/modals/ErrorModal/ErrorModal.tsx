import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import * as Icon from "react-native-feather";
import { styles } from './styles';

interface Props {
  visible: boolean;
  message: string | null;
  onClose: () => void;
}

export const ErrorModal: React.FC<Props> = ({ visible, message, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Icon.AlertTriangle width={20} height={20} style={styles.modalIcon} />
            <Text style={styles.modalTitle}>Упс!</Text>
          </View>
          <Text style={styles.modalMessage}>{message}</Text>
          <TouchableOpacity onPress={onClose} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Понятно</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};