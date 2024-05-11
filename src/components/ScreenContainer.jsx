import { StyleSheet, View } from "react-native";
import { colors } from "../constants/colors";

const ScreenContainer = ({ children }) => {
  return (
    <View style={styles.container}>
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
    backgroundColor: colors.dark,
  },
  main: {
    flex: 1,
  },
});

export default ScreenContainer;
