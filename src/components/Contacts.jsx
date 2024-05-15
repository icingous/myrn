import { Appearance, Linking, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CustomPressable from "./CustomPressable";
import { colors } from "../constants/colors";
import { iconButton, iconButtonRipple } from "../constants/styles";

const scheme = Appearance.getColorScheme();
const isSchemeLight = scheme === "light";
const contactIconColor = isSchemeLight ? colors.dark : colors.extra;

const Contacts = () => {
  const canOpenURL = Linking.canOpenURL("https://ithillel.ua");
  const openURL = () => Linking.openURL("https://ithillel.ua");
  const canCall = Linking.canOpenURL("tel:+0800208020");
  const call = () => Linking.openURL("tel:+0800208020");
  const canSendEmail = Linking.canOpenURL("mailto:online@ithillel.ua");
  const sendEmail = () => Linking.openURL("mailto:online@ithillel.ua");
  const canSendSMS = Linking.canOpenURL("sms:+0800208020");
  const sendSMS = () => Linking.openURL("sms:+0800208020");

  return (
    <View style={s.buttonsContainer}>
      <CustomPressable
        style={iconButton}
        onPress={openURL}
        android_ripple={iconButtonRipple}
        disabled={!canOpenURL}
      >
        <MaterialIcons
          name="open-in-browser"
          size={16}
          color={canOpenURL ? contactIconColor : colors.light}
        />
      </CustomPressable>
      <View style={s.contacts}>
        <CustomPressable
          style={iconButton}
          onPress={sendEmail}
          android_ripple={iconButtonRipple}
          disabled={!canSendEmail}
        >
          <MaterialIcons
            name="alternate-email"
            size={16}
            color={canSendEmail ? contactIconColor : colors.light}
          />
        </CustomPressable>
        <CustomPressable
          style={[iconButton]}
          onPress={call}
          android_ripple={iconButtonRipple}
          disabled={!canCall}
        >
          <MaterialIcons
            name="phone"
            size={16}
            color={canCall ? contactIconColor : colors.light}
          />
        </CustomPressable>
        <CustomPressable
          style={iconButton}
          onPress={sendSMS}
          android_ripple={iconButtonRipple}
          disabled={!canSendSMS}
        >
          <MaterialIcons
            name="sms"
            size={16}
            color={canSendSMS ? contactIconColor : colors.light}
          />
        </CustomPressable>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  buttonsContainer: {
    paddingLeft: 10,
    paddingVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  contacts: {
    flexDirection: "row",
  },
});

export default Contacts;
