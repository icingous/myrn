import { Text } from "react-native";
import { colors } from "../../constants/colors";

const CarouselTabLabel = ({ focused }) => (
  <Text style={{ color: focused ? colors.dark : colors.secondary }}>Cart</Text>
);

export default CarouselTabLabel;
