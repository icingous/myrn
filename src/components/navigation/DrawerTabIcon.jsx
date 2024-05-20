import { SimpleLineIcons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";

const SettingsTabIcon = ({ focused }) => (
  <SimpleLineIcons
    name="drawer"
    size={24}
    color={focused ? colors.dark : colors.secondary}
  />
);

export default SettingsTabIcon;
