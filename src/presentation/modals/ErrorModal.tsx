import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from '../theme';
import * as Icon from "react-native-feather";

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
            <Icon.AlertTriangle color={Theme.error} width={20} height={20} style={styles.modalIcon} />
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

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: Theme.transparentBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: Theme.primaryModalColor,
    marginHorizontal: 30,
    borderRadius: 8,
    padding: 20,
    width: '80%',
    maxWidth: 400,
    alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginBottom: 12,
  },
  modalIcon: {
    marginRight: 6,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: Theme.error,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  modalButtonText: {
    color: Theme.primaryColor,
    fontSize: 16,
  },
});