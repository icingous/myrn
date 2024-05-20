import { Text } from "react-native";
import { colors } from "../../constants/colors";

const SettingsTabLabel = ({ focused }) => (
  <Text style={{ color: focused ? colors.dark : colors.secondary }}>
    Settings
  </Text>
);

export default SettingsTabLabel;
