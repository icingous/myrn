import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentLight: {
    backgroundColor: colors.extra,
  },
  contentDark: {
    backgroundColor: colors.dark,
  },
});
