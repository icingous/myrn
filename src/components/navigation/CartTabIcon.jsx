import { StoreContext } from "../../context";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { observer } from "mobx-react-lite";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import CartItemsBadge from "../CartItemsBadge";

const CartTabIcon = ({ focused }) => {
  const { cart } = useContext(StoreContext);

  return (
    <View style={s.wrapper}>
      <MaterialIcons
        name="shopping-cart"
        size={24}
        color={focused ? colors.dark : colors.secondary}
      />
      {cart.count > 0 && <CartItemsBadge count={cart.count} />}
    </View>
  );
};

const s = StyleSheet.create({
  wrapper: {
    position: "relative",
  },
});

export default observer(CartTabIcon);
