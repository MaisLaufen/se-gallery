import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';

const { width } = Dimensions.get('window');

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const BurgerMenu = ({ visible, onClose }: Props) => {
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
          <Text>Закрыть</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};