import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // позиционирование оверлея (не закрывать навигацию)
  },
  list: {
    padding: 2,
    gap: 1,
  },
  row: {
    justifyContent: 'space-between',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.transparentBlack,
    zIndex: 10,
  },
  loadingText: {
    marginTop: 8,
    fontSize: 20,
    color: Theme.secondaryColor,
  }
});