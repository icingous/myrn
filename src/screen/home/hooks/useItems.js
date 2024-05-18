import { useEffect, useState } from "react";
import { getPageItems, getPageItemsReversed } from "../../../api/store";

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
    getPageItemsReversed(0, 800).then((data) => {
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
    if (newOnly || search) return;

    setRefreshing(true);

    const data = await getPageItems(pageCount, 800);

    setRefreshing(false);

    setPageCount((state) => state + 1);
    setStoredItems((state) => [...state, ...data]);
  };

  const onRefresh = async () => {
    if (newOnly || search) return;

    setPageCount((state) => state + 1);
    setRefreshing(true);

    const data = await getPageItemsReversed(pageCount, 800);

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
