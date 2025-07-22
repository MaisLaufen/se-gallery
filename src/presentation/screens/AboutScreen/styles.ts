import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
    padding: 16,
  },
  section: {
    marginVertical: 12
  },
  label: {
    fontSize: 16,
    color: Theme.primaryColor,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: Theme.secondaryColor,
    textAlign: 'center'
  },
  textDep: {
    fontSize: 16
  },
  link: {
    color: Theme.href,
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
});