import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 16,
  },
  contentLight: {
    backgroundColor: colors.extra,
  },
  contentDark: {
    backgroundColor: colors.dark,
  },
});
