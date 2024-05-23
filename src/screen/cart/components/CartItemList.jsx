import React from "react";
import { FlatList } from "react-native";
import CartItem from "./CartItem";

const CartItemList = ({ items }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CartItem item={item} />}
    />
  );
};

export default CartItemList;
