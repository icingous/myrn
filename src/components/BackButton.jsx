import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import CustomPressable from "./CustomPressable";
import { colors } from "../constants/colors";
import { iconButton, iconButtonRipple } from "../constants/styles";

const BackButton = ({ onPress }) => (
  <View style={styles.back}>
    <CustomPressable
      onPress={onPress}
      style={iconButton}
      android_ripple={iconButtonRipple}
    >
      <MaterialIcons name="arrow-back-ios-new" size={24} color={colors.extra} />
    </CustomPressable>
  </View>
);

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    left: 0,
    top: 0,
    padding: 12,
  },
});

export default BackButton;
