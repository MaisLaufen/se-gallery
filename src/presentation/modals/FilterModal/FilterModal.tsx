import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { styles } from './styles';

const COLORS = [
  'grayscale', 'transparent', 'red', 'orange', 'yellow',
  'green', 'turquoise', 'blue', 'lilac', 'pink',
  'white', 'gray', 'black', 'brown',
];

const colorMap: Record<string, string> = {
  grayscale: '#A0A0A0',
  transparent: 'transparent',
  red: '#FF3B30',
  orange: '#FF9500',
  yellow: '#FFCC00',
  green: '#34C759',
  turquoise: '#5AC8FA',
  blue: '#007AFF',
  lilac: '#AF52DE',
  pink: '#FF2D55',
  white: '#FFFFFF',
  gray: '#8E8E93',
  black: '#000000',
  brown: '#A2845E',
};

type Props = {
  visible: boolean;
  selectedColors: string[];
  onToggleColor: (color: string) => void;
  sortOrder: 'popular' | 'latest';
  onToggleSortOrder: () => void;
  onClose: () => void;
};

export const FilterModal = ({
  visible,
  selectedColors,
  onToggleColor,
  sortOrder,
  onToggleSortOrder,
  onClose,
}: Props) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>Фильтры</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.close}>Закрыть</Text>
            </TouchableOpacity>
          </View>

            <View style={styles.section}>
            <Text style={styles.subtitle}>Цвета</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {COLORS.map((color) => (
                <TouchableOpacity
                    key={color}
                    onPress={() => onToggleColor(color)}
                    style={[
                    styles.colorCircleWrapper,
                    selectedColors.includes(color) && styles.colorCircleWrapperSelected,
                    ]}
                >
                    <View
                    style={[
                        styles.colorCircle,
                        { backgroundColor: colorMap[color] ?? 'gray' },
                    ]}
                    />
                </TouchableOpacity>
                ))}
            </ScrollView>
            </View>

            <View style={styles.section}>
            <Text style={styles.subtitle}>Сортировка</Text>
            <View style={styles.sortToggleGroup}>
                <TouchableOpacity
                style={[
                    styles.sortToggleButton,
                    sortOrder === 'popular' && styles.sortToggleSelected,
                ]}
                onPress={() => sortOrder !== 'popular' && onToggleSortOrder()}
                >
                <Text
                    style={[
                    styles.sortToggleText,
                    sortOrder === 'popular' && styles.sortToggleSelectedText,
                    ]}
                >
                    Популярные
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={[
                    styles.sortToggleButton,
                    sortOrder === 'latest' && styles.sortToggleSelected,
                ]}
                onPress={() => sortOrder !== 'latest' && onToggleSortOrder()}
                >
                <Text
                    style={[
                    styles.sortToggleText,
                    sortOrder === 'latest' && styles.sortToggleSelectedText,
                    ]}
                >
                    Новые
                </Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
      </View>
    </Modal>
  );
};