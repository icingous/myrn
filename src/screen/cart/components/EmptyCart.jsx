import { useContext } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { colors } from "../../../constants/colors";
import ColorSchemeContext from "../../../context/colorThemeContext";

const EmptyCart = ({ toTours }) => {
  const { isSchemeLight } = useContext(ColorSchemeContext);

  return (
    <View
      style={[
        styles.container,
        isSchemeLight ? styles.containerLight : styles.containerDark,
      ]}
    >
      <Text
        style={[
          styles.header,
          isSchemeLight ? styles.headerLight : styles.headerDark,
        ]}
      >
        Cart is empty
      </Text>
      <Pressable style={[styles.button, styles.buttonBack]} onPress={toTours}>
        <Text style={styles.textStyle}>To Tours</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  containerLight: {
    backgroundColor: colors.extra,
  },
  containerDark: {
    backgroundColor: colors.dark,
  },
  header: {
    fontSize: 32,
  },
  headerLight: {
    color: colors.dark,
  },
  headerDark: {
    color: colors.primary,
  },
  button: {
    padding: 10,
    elevation: 2,
  },
  buttonBack: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default EmptyCart;
