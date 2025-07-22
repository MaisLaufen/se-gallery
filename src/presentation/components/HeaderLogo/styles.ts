import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: Theme.primaryColor
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 18
  },
  yellow: {
    color: Theme.tertiaryColor
  },
  white: {
    color: Theme.secondaryColor
  }
});