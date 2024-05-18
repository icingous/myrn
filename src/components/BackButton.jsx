import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import CustomPressable from "./CustomPressable";
import { colors } from "../constants/colors";
import { iconButton, iconButtonRipple } from "../constants/styles";
import ColorSchemeContext from "../store/color-theme-context/colorThemeContext";

const BackButton = ({ onPress }) => {
  const { isSchemeLight } = useContext(ColorSchemeContext) || {};

  return (
    <View style={styles.back}>
      <CustomPressable
        onPress={onPress}
        style={iconButton}
        android_ripple={iconButtonRipple}
      >
        <MaterialIcons
          name="arrow-back-ios-new"
          size={24}
          color={isSchemeLight ? colors.dark : colors.extra}
        />
      </CustomPressable>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    left: 0,
    top: 0,
    padding: 12,
  },
});

export default BackButton;
