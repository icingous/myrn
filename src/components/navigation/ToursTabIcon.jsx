import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";

const ToursTabIcon = ({ focused }) => (
  <MaterialIcons
    name="travel-explore"
    size={24}
    color={focused ? colors.dark : colors.secondary}
  />
);

export default ToursTabIcon;
