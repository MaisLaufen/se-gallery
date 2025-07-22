import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    backgroundColor: Theme.primaryColor,
  },
  page: {
    marginHorizontal: 8,
    fontSize: 18,
    color: Theme.secondaryColor,
  },
  current: {
    fontWeight: 'bold',
    color: Theme.tertiaryColor,
    textDecorationLine: 'underline',
  },
});
