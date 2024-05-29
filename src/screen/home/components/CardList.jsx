import { FlatList, RefreshControl } from "react-native";
import Card from "./CardListItem";

const renderItem = ({ item }) => <Card data={item} />;
const keyExtractor = (item) => item.id;

const CardList = ({ items, onEndReached, refreshing, onRefresh }) => {
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
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
