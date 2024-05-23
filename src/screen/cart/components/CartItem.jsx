import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StoreContext } from "../../../context";
import { colors } from "../../../constants/colors";
import { CustomPressable } from "../../../components";
import { iconButtonRipple } from "../../../constants/styles";

const CartItem = ({ item }) => {
  const { title, count, price } = item;

  const {
    cart: { addItem, removeItem },
  } = useContext(StoreContext);

  return (
    <View style={s.cartItem}>
      <Text style={s.itemTitle}>{title}</Text>
      <Text>{`$${price * count}`}</Text>
      <View style={s.counter}>
        <CustomPressable
          android_ripple={iconButtonRipple}
          onPress={() => addItem(item)}
        >
          <AntDesign name="plus" size={24} color="black" />
        </CustomPressable>
        <Text style={s.quantity}>{count}</Text>
        <CustomPressable
          android_ripple={iconButtonRipple}
          onPress={() => removeItem(item)}
        >
          <AntDesign name="minus" size={24} color="black" />
        </CustomPressable>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingVertical: 8,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  itemTitle: {
    fontSize: 20,
  },
  quantity: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CartItem;
