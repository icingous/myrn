import { FlatList, RefreshControl } from "react-native";
import Card from "./Card";

const ItemList = ({ items, onEndReached, refreshing, onRefresh }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item, index }) => <Card data={item} index={index} />}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.75}
      style={{
        paddingHorizontal: 8,
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default ItemList;
