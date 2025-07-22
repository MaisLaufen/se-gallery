import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 1,
    margin: 2,
    overflow: 'hidden',
    backgroundColor: Theme.primaryColor,
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});