import { FlatList, RefreshControl } from "react-native";
import Card from "./CardListItem";

const CardList = ({ items, onEndReached, refreshing, onRefresh }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <Card data={item} />}
      keyExtractor={(item) => item.id}
      style={{ paddingHorizontal: 8 }}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.75}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default CardList;
