import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../theme";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width,
    height,
    top: 0,
    left: 0,
    flexDirection: 'row',
    zIndex: 100,
  },
  backdrop: {
    flex: 1,
    backgroundColor: Theme.transparentBlack,
  },
  drawer: {
    width: width,
    backgroundColor: Theme.primaryColor,
    padding: 16,
    justifyContent: 'flex-start',
  },
  header: {
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuIcon: {
    marginRight: 12,
  },
  menuText: {
    fontSize: 16,
    color: Theme.secondaryColor,
  }
});