import { View, Text, StyleSheet } from 'react-native';
import { FilterModal, ItemList, LikeModal, ToolBar } from './components';
import { useItems, useLikeModal, useFilterModal } from './hooks';

const Home = () => {
  const { items, filter, setFilter, search, setSearch } = useItems();
  const {
    likeModalVisible,
    setLikeModalVisible,
    showLikeModal,
    closeLikeModal,
  } = useLikeModal();
  const {
    filterModalVisible,
    setFilterModalVisible,
    showFilterModal,
    closeFilterModal,
  } = useFilterModal();

  return (
    <View style={s.container}>
      <Text style={s.header}>Popular</Text>
      <ToolBar
        onLike={showLikeModal}
        onFilter={showFilterModal}
        search={search}
        setSearch={setSearch}
      />
      <ItemList items={items} filter={filter} />
      <LikeModal
        visible={likeModalVisible}
        setVisible={setLikeModalVisible}
        close={closeLikeModal}
      />
      <FilterModal
        filter={filter}
        setFilter={setFilter}
        visible={filterModalVisible}
        setVisible={setFilterModalVisible}
        close={closeFilterModal}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    gap: 16,
    paddingBottom: 50,
  },
  header: {
    fontSize: 26,
    textAlign: 'center',
    color: 'orange',
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Home;
