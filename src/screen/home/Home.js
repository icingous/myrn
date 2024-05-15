import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import {
  FilterModal,
  ItemList,
  LikeModal,
  SettingsModal,
  ToolBar,
} from "./components";
import {
  useItems,
  useLikeModal,
  useFilterModal,
  useSettingsModal,
} from "./hooks";
import { colors } from "../../constants/colors";

const Home = () => {
  const {
    items,
    filter,
    setFilter,
    search,
    setSearch,
    onEndReached,
    refreshing,
    onRefresh,
  } = useItems();

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

  const {
    settingsModalVisible,
    setSettingsModalVisible,
    showSettingsModal,
    closeSettingsModal,
  } = useSettingsModal();

  return (
    <View style={s.container}>
      <Text style={s.header}>Popular</Text>
      <ToolBar
        onLike={showLikeModal}
        onFilter={showFilterModal}
        onSettings={showSettingsModal}
        search={search}
        setSearch={setSearch}
      />
      {items?.length ? (
        <View
          style={{
            flexGrow: 1,
            flexShrink: 1,
          }}
        >
          <ItemList
            items={items}
            filter={filter}
            refreshing={refreshing}
            onRefresh={onRefresh}
            onEndReached={onEndReached}
          />
        </View>
      ) : (
        <View
          style={{
            flexBasis: "80%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator color={colors.warning} size={40} />
        </View>
      )}
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
      <SettingsModal
        visible={settingsModalVisible}
        setVisible={setSettingsModalVisible}
        close={closeSettingsModal}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 26,
    textAlign: "center",
    color: "orange",
  },
});

export default Home;
