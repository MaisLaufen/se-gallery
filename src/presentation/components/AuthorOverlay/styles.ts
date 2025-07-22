import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    top: 6,
    left: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: Theme.tertiaryColor,
  },
  username: {
    color: Theme.secondaryColor,
    fontWeight: '600',
    fontSize: 14,
  },
});