import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    alignItems: 'center',
    verticalAlign: 'bottom'
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  text: {
    fontSize: 16,
    color: Theme.secondaryColor
  },
  tags: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignSelf: 'center',
    fontSize: 16,
    color: Theme.info,
    flexWrap: 'wrap',
  },
  viewsIcon: {
    color: Theme.tertiaryColor
  },
  likesIcon: {
    color: Theme.like
  }
});