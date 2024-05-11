import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";

const MoreTabIcon = ({ focused }) => (
  <MaterialIcons
    name="more-horiz"
    size={24}
    color={focused ? colors.dark : colors.secondary}
  />
);

export default MoreTabIcon;
