import { Text } from "react-native";
import { colors } from "../../constants/colors";

const DrawerTabLabel = ({ focused }) => (
  <Text style={{ color: focused ? colors.dark : colors.secondary }}>
    Drawer
  </Text>
);

export default DrawerTabLabel;
