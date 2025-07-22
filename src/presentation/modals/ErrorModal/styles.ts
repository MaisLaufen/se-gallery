import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: Theme.transparentBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: Theme.primaryModalColor,
    marginHorizontal: 30,
    borderRadius: 8,
    padding: 20,
    width: '80%',
    maxWidth: 400,
    alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginBottom: 12,
  },
  modalIcon: {
    marginRight: 6,
    color:  Theme.error
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 20,
    color: Theme.primaryColor
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    color: Theme.primaryColor
  },
  modalButton: {
    backgroundColor: Theme.error,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  modalButtonText: {
    color: Theme.primaryColor,
    fontSize: 16,
  }
});