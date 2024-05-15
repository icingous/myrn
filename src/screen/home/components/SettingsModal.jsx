import { useEffect, useState } from "react";
import {
  Appearance,
  Modal,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { CustomPressable } from "../../../components";
import {
  iconButton,
  iconButtonRipple,
  toolIconProps,
} from "../../../constants/styles";
import { CloseIcon } from "../../../components/icons";

const SettingsModal = ({ visible, setVisible, close }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((state) => !state);

  const [isThemeLight, setIsThemeLight] = useState(Appearance.getColorScheme());
  const toggleTheme = () => setIsThemeLight((state) => !state);

  useEffect(() => {
    Appearance.setColorScheme(isThemeLight ? "light" : "dark");
  }, [isThemeLight]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}
      >
        <View style={styles.backdrop}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={styles.filtersHeader}>Settings</Text>
              <CustomPressable
                style={[iconButton, styles.buttonClose]}
                onPress={close}
                android_ripple={iconButtonRipple}
              >
                <CloseIcon {...toolIconProps} />
              </CustomPressable>
            </View>
            <View style={styles.form}>
              <View style={styles.formItem}>
                <Text>Use Color Theming</Text>
                <Switch onValueChange={toggleSwitch} value={isEnabled} />
              </View>
              <View
                style={[
                  styles.formItem,
                  isEnabled ? undefined : styles.formItemDisabled,
                ]}
              >
                <Text>Light Theme</Text>
                <Switch
                  onValueChange={toggleTheme}
                  value={isThemeLight}
                  disabled={!isEnabled}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    padding: 10,
  },
  header: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
  },
  filtersHeader: {
    fontSize: 30,
    marginBottom: 24,
  },
  form: {
    flex: 1,
    gap: 16,
    paddingTop: 20,
    paddingLeft: 20,
    alignItems: "flex-start",
  },
  formItem: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 10,
  },
  formItemDisabled: {
    opacity: 0.4,
  },
  formLabel: {
    fontSize: 14,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  buttonSubmit: {
    marginTop: 24,
  },
});

export default SettingsModal;
