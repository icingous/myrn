import { useEffect, useState } from "react";
import { getItems, getItemsAsync } from "../../../api/store";

const useItems = () => {
  const [pageCount, setPageCount] = useState(1);
  const [filter, setFilter] = useState({});
  const [search, setSearch] = useState("");
  const [storedItems, setStoredItems] = useState([]);
  const [items, setItems] = useState(storedItems);
  const [refreshing, setRefreshing] = useState(false);
  const { newOnly } = filter;

  useEffect(() => {
    filterItems();
  }, [filter, search, storedItems]);

  useEffect(() => {
    setRefreshing(true);
    getItemsAsync().then((data) => {
      setRefreshing(false);
      setStoredItems(data);
    });
  }, []);

  const filterItems = () =>
    setItems(
      storedItems.filter(
        ({ title, isNew }) =>
          (search ? title.includes(search) : true) &&
          (newOnly === true ? Boolean(isNew) : true)
      )
    );

  const onEndReached = async () => {
    setRefreshing(true);

    const data = await getItems(pageCount);

    setRefreshing(false);

    setPageCount((state) => state + 1);
    setStoredItems((state) => [...state, ...data]);
  };

  const onRefresh = async () => {
    setPageCount((state) => state + 1);
    setRefreshing(true);

    const data = await getItemsAsync(pageCount);

    setRefreshing(false);
    setStoredItems((state) => [...data, ...state]);
  };

  return {
    items,
    filter,
    setFilter,
    search,
    setSearch,
    onEndReached,
    refreshing,
    onRefresh,
  };
};

export default useItems;
