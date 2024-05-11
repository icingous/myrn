import { Text } from "react-native";
import { colors } from "../../constants/colors";

const ToursTabLabel = ({ focused }) => (
  <Text style={{ color: focused ? colors.dark : colors.secondary }}>Tours</Text>
);

export default ToursTabLabel;
