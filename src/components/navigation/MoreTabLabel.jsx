import { Text } from "react-native";
import { colors } from "../../constants/colors";

const MoreTabLabel = ({ focused }) => (
  <Text style={{ color: focused ? colors.dark : colors.secondary }}>More</Text>
);

export default MoreTabLabel;
