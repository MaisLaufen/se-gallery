import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: Theme.primaryColor,
  },
  title: {
    fontSize: 18,
    color: Theme.secondaryColor,
    fontWeight: '600',
  },
  mainIcon: {
    color: Theme.secondaryColor
  },
  secondaryIcon: {
    color: Theme.tertiaryColor
  }
});