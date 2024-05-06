import { FlatList } from 'react-native';
import Card from './Card';

const ItemList = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item, index }) => <Card data={item} index={index} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ItemList;
