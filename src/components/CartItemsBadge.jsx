import { Text, View } from "react-native";
import { colors } from "../constants/colors";

const CartItemsBadge = ({ count }) => {
  return (
    <View
      style={{
        position: "absolute",
        top: -2,
        right: -6,
        minWidth: 14,
        height: 14,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        backgroundColor: colors.warning,
      }}
    >
      <Text
        style={{
          fontSize: 8,
          color: colors.extra,
        }}
      >
        {count}
      </Text>
    </View>
  );
};

export default CartItemsBadge;
