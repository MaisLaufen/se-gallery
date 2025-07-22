import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Theme.transparentBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: Theme.primaryModalColor,
    width: '90%',
    borderRadius: 10,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.placeholderColor,
  },
  close: {
    color: Theme.like,
  },
  section: {
    marginVertical: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: Theme.primaryColor
  },
  colorItem: {
    padding: 8,
    marginRight: 8,
    borderWidth: 1,
    borderRadius: 6,
  },
  colorItemSelected: {
    backgroundColor: Theme.href,
  },
  sortToggle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
  },
});