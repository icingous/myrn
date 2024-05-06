import { Pressable } from "react-native";

const CustomPressable = ({ children, ...rest }) => {
  return <Pressable {...rest}>{children}</Pressable>;
};

export default CustomPressable;
