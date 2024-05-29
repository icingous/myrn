import { useCallback, useContext, useState } from "react";
import { Switch, StyleSheet, Text, View } from "react-native";
import withScreenContainer from "../../components/hoc/withScreenContainer";
import { colors } from "../../constants/colors";
import ColorSchemeContext from "../../context/colorThemeContext";

const More = () => {
  const { isSchemeLight, toggleScheme } = useContext(ColorSchemeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = useCallback(() => setIsEnabled((state) => !state), []);

  return (
    <View style={styles.modalView}>
      <View style={styles.form}>
        <View style={styles.formSection}>
          <Text
            style={[
              styles.formSectionHeader,
              isSchemeLight ? styles.formLabelLight : styles.formLabelDark,
            ]}
          >
            Color Theme
          </Text>
          <View style={styles.formItem}>
            <Text
              style={[
                styles.formLabel,
                isSchemeLight ? styles.formLabelLight : styles.formLabelDark,
              ]}
            >
              Use Color Theme
            </Text>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              trackColor={{ false: "#ddd", true: "#a0fffc" }}
              thumbColor={isEnabled ? "cyan" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
            />
          </View>
          <View
            style={[
              styles.formItem,
              isEnabled ? undefined : styles.formItemDisabled,
            ]}
          >
            <Text
              style={[
                styles.formLabel,
                isSchemeLight ? styles.formLabelLight : styles.formLabelDark,
              ]}
            >
              Light Theme
            </Text>
            <Switch
              onValueChange={toggleScheme}
              value={isSchemeLight}
              disabled={!isEnabled}
              trackColor={
                isSchemeLight && isEnabled
                  ? { false: "#ddd", true: "#a0fffc" }
                  : { false: "#f4f3f4", true: "#f4f3f4" }
              }
              thumbColor={
                isEnabled ? (isSchemeLight ? "cyan" : "#f4f3f4") : undefined
              }
              ios_backgroundColor="#3e3e3e"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    padding: 10,
  },
  form: {
    flex: 1,
    gap: 16,
  },
  formSection: {
    flex: 1,
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
  formSectionHeader: {
    width: "100%",
    marginBottom: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  formLabelDark: {
    color: colors.light,
  },
  formLabelLight: {
    color: colors.dark,
  },
});

export default withScreenContainer(More);
