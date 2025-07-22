import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    zIndex: 100,
  },
  backdrop: {
    flex: 1,
    backgroundColor: Theme.transparentBlack, // затемнение и блокировка фона
  },
  drawer: {
    width: '60%', //width * 0.6, TODO: fix
    height: '100%',
    backgroundColor: Theme.primaryColor,
    padding: 16,
    position: 'absolute',
    top: 0,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: Theme.secondaryColor,
    alignSelf: 'flex-start',
    borderRadius: 6,
  }
});