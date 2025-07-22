import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
    padding: 16,
  },
  centerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginVertical: 12,
  },
  label: {
    fontSize: 16,
    color: Theme.secondaryColor,
    marginBottom: 8,
  }
});