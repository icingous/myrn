import { Pressable } from "react-native";
import { Octicons } from "@expo/vector-icons";

const GoToPrevNextButton = ({
  name,
  style,
  disabled,
  color,
  iconSize,
  onPress,
}) => {
  return (
    <Pressable style={style} disabled={disabled} onPress={onPress}>
      <Octicons name={name} size={iconSize} color={color} />
    </Pressable>
  );
};

export default GoToPrevNextButton;
