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
import * as Icon from "react-native-feather";
import { Theme } from '../../theme';

const { width, height } = Dimensions.get('window');

interface Props {
  visible: boolean;
  onClose: () => void;
  onNavigateSettings: () => void;
  onNavigateAbout: () => void;
}

export const BurgerMenu = ({
  visible,
  onClose,
  onNavigateSettings,
  onNavigateAbout,
}: Props) => {
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
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Icon.ArrowLeft width={24} color={Theme.secondaryColor} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.menuItem} onPress={onNavigateSettings}>
          <Icon.Settings width={20} color={Theme.secondaryColor} style={styles.menuIcon} />
          <Text style={styles.menuText}>Настройки</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={onNavigateAbout}>
          <Icon.Info width={20} color={Theme.secondaryColor} style={styles.menuIcon} />
          <Text style={styles.menuText}>О приложении</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};