import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.secondaryColor,
    borderRadius: 24,
    paddingHorizontal: 12,
    marginHorizontal: 8,
    height: 40,
  },
  icon: {
    marginHorizontal: 4,
    color: Theme.primaryColor
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 40,
    color: Theme.primaryColor,
    paddingVertical: 0, // для центрирования текста
  },
  placeholder: {
    color: Theme.placeholderColor
  }
});