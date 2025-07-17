import { View, Text, StyleSheet } from 'react-native';

export const AppBar = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Pixabay Gallery</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 12,
    backgroundColor: '#6200ee',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});