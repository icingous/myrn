import { StyleSheet, Text, Pressable, View } from "react-native";
import { observer } from "mobx-react-lite";
import EmptyCart from "./components/EmptyCart";
import store from "../../store";
import { colors } from "../../constants/colors";
import CartItemList from "./components/CartItemList";

const Cart = ({ navigation }) => {
  const { items, count, amount } = store.cart;

  if (count === 0) {
    return (
      <EmptyCart
        toTours={() => navigation.navigate("Tours", { replace: true })}
      />
    );
  }

  return (
    <View style={styles.cart}>
      <CartItemList items={items} />
      <View style={styles.total}>
        <Text style={styles.totalText}>Total:</Text>
        <View style={styles.totalDetails}>
          <Text style={styles.totalText}>{count}</Text>
          <Text style={styles.totalText}>for</Text>
          <Text style={styles.totalText}>{`$${amount}`}</Text>
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.buttonBuy]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Order</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    flex: 1,
    padding: 12,
    paddingBottom: 24,
    gap: 12,
    backgroundColor: colors.extra,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  totalText: {
    fontSize: 24,
  },
  totalDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  button: {
    padding: 10,
    elevation: 2,
  },
  buttonBuy: {
    backgroundColor: "steelblue",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default observer(Cart);
