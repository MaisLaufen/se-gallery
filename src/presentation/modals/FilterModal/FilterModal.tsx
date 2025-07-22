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
                    styles.colorItem,
                    selectedColors.includes(color) && styles.colorItemSelected,
                  ]}
                >
                  <Text style={{color: 'black'}}>{color}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Сортировка</Text>
            <TouchableOpacity onPress={onToggleSortOrder} style={styles.sortToggle}>
              <Text style={{color: 'black'}}>Сейчас: {sortOrder === 'popular' ? 'Популярные' : 'Новые'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};