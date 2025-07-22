import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: Theme.primaryColor
  },
  mainIcon: {
    color: Theme.secondaryColor
  },
  secondaryIcon: {
    color: Theme.tertiaryColor
  }
});