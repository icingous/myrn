import { FlatList } from "react-native";
import Card from "./CardListItem";

const CardList = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item, index }) => <Card data={item} index={index} />}
      keyExtractor={(item) => item.id}
      style={{ paddingHorizontal: 10 }}
    />
  );
};

export default CardList;
