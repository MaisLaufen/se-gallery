import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const MenuDrawer = ({ visible, onClose }: Props) => {
  const slideAnim = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: width * 0.4,
        duration: 250,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: width,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.drawer, { left: slideAnim }]}>
        <Text style={styles.text}>Меню заглушка</Text>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>Закрыть</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    zIndex: 100,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)', // затемнение и блокировка фона
  },
  drawer: {
    width: width * 0.6,
    height: '100%',
    backgroundColor: '#000000',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: -2, height: 0 },
    shadowRadius: 5,
    padding: 16,
    position: 'absolute',
    top: 0,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#eee',
    alignSelf: 'flex-start',
    borderRadius: 6,
  },
  closeText: {
    fontWeight: 'bold',
  },
});