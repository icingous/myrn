import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../constants/colors";
import ColorSchemeContext from "../context/colorThemeContext";

const ScreenContainer = ({ children }) => {
  const { isSchemeLight } = useContext(ColorSchemeContext);

  return (
    <View
      style={[
        styles.container,
        isSchemeLight ? styles.containerLight : styles.containerDark,
      ]}
    >
      <View style={styles.main}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 0,
    paddingTop: 20,
    marginTop: 0,
  },
  containerLight: {
    backgroundColor: colors.extra,
  },
  containerDark: {
    backgroundColor: colors.dark,
  },
  main: {
    flex: 1,
  },
});

export default ScreenContainer;
