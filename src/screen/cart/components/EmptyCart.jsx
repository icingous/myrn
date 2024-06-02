import { useContext, useMemo, useState } from "react";
import { Animated, StyleSheet, Text, Pressable, View } from "react-native";
import { colors } from "../../../constants/colors";
import ColorSchemeContext from "../../../context/colorThemeContext";

const animationDuration = 500;

const EmptyCart = ({ toTours }) => {
  const { isSchemeLight } = useContext(ColorSchemeContext);
  const textOffset = useState(new Animated.Value(0))[0];
  const textOpacity = useState(new Animated.Value(1))[0];
  const buttonOffset = useState(new Animated.Value(0))[0];
  const buttonOpacity = useState(new Animated.Value(1))[0];

  const a1 = useMemo(
    () =>
      Animated.timing(textOffset, {
        toValue: -1000,
        duration: animationDuration,
        useNativeDriver: true,
      }),
    []
  );

  const a2 = useMemo(
    () =>
      Animated.timing(textOpacity, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }),
    []
  );

  const a3 = useMemo(
    () =>
      Animated.timing(buttonOffset, {
        toValue: 1000,
        duration: animationDuration,
        useNativeDriver: true,
      }),
    []
  );

  const a4 = useMemo(
    () =>
      Animated.timing(buttonOpacity, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }),
    []
  );

  const toTours2 = () => {
    a1.start();
    a2.start();
    a3.start();
    a4.start();
    setTimeout(() => {
      toTours();
      a1.reset();
      a2.reset();
      a3.reset();
      a4.reset();
    }, 400);
  };

  return (
    <View
      style={[
        styles.container,
        isSchemeLight ? styles.containerLight : styles.containerDark,
      ]}
    >
      <Animated.Text
        style={[
          styles.header,
          isSchemeLight ? styles.headerLight : styles.headerDark,
          { transform: [{ translateX: textOffset }], opacity: textOpacity },
        ]}
      >
        Cart is empty
      </Animated.Text>
      <Animated.View
        style={{
          transform: [{ translateX: buttonOffset }],
          opacity: buttonOpacity,
        }}
      >
        <Pressable
          style={[styles.button, styles.buttonBack]}
          onPress={toTours2}
        >
          <Text style={styles.textStyle}>To Tours</Text>
        </Pressable>
      </Animated.View>
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
