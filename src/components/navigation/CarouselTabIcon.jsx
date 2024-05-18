import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";

const CarouselTabIcon = ({ focused }) => (
  <MaterialCommunityIcons
    name="view-carousel-outline"
    size={24}
    color={focused ? colors.dark : colors.secondary}
  />
);

export default CarouselTabIcon;
