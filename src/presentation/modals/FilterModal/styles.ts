import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Theme.transparentBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: Theme.primaryColor,
    width: '90%',
    borderRadius: 10,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.secondaryColor,
  },
  close: {
    color: Theme.error,
  },
  section: {
    marginVertical: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: Theme.placeholderColor
  },
  colorItem: {
    padding: 8,
    marginRight: 8,
    borderWidth: 1,
    borderRadius: 6,
  },
  sortToggle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
  },
  colorCircleWrapper: {
  padding: 6,
  marginRight: 10,
  borderRadius: 20,
  borderWidth: 2,
  borderColor: 'transparent',
  alignItems: 'center',
  justifyContent: 'center',
},
colorCircleWrapperSelected: {
  borderColor: Theme.tertiaryColor,
},
colorCircle: {
  width: 30,
  height: 30,
  borderRadius: 15,
  borderWidth: 1,
  borderColor: Theme.secondaryColor,
},

sortToggleGroup: {
  flexDirection: 'row',
  borderRadius: 6,
  overflow: 'hidden',
  borderWidth: 1,
  borderColor: Theme.secondaryColor,
},
sortToggleButton: {
  flex: 1,
  paddingVertical: 10,
  alignItems: 'center',
  backgroundColor: Theme.primaryColor,
},
sortToggleSelected: {
  backgroundColor: Theme.tertiaryColor,
},
sortToggleSelectedText: {
    color: Theme.primaryColor
},
sortToggleText: {
  color: Theme.secondaryColor,
  fontWeight: '600',
},
});