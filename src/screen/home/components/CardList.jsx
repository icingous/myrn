import { useCallback } from "react";
import { FlatList, LayoutAnimation, RefreshControl } from "react-native";
import { observer } from "mobx-react-lite";
import Card from "./CardListItem";
import store from "../../../store";

const renderItem = ({ item }) => <Card data={item} />;
const keyExtractor = (item) => item.id;
const animationConfig = {
  duration: 500,
  create: { type: "easeIn", property: "opacity" },
  update: { type: "easeIn" },
  delete: { type: "easeIn", property: "opacity" },
};

const CardList = ({ items, onEndReached, refreshing, onRefresh }) => {
  const { tours } = store;

  const onScroll = useCallback(
    (e) => {
      const { configureNext } = LayoutAnimation;

      if (e.nativeEvent.contentOffset.y > 100) {
        if (tours.isHeaderVisible) {
          tours.setHeaderVisible(false);
          configureNext(animationConfig);
        }
      } else {
        if (!tours.isHeaderVisible) {
          tours.setHeaderVisible(true);
          configureNext(animationConfig);
        }
      }
    },
    [tours]
  );

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
      onScroll={onScroll}
    />
  );
};

export default observer(CardList);
