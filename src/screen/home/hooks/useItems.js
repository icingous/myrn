import { useCallback, useEffect, useState } from "react";
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

  const filterItems = useCallback(
    () =>
      setItems(
        storedItems.filter(
          ({ title, isNew }) =>
            (search ? title.includes(search) : true) &&
            (newOnly === true ? Boolean(isNew) : true)
        )
      ),
    [search, newOnly, storedItems]
  );

  const onEndReached = useCallback(() => {
    if (newOnly || search) return;

    setRefreshing(true);

    getPageItems(pageCount, 800)
      .then((data) => {
        setPageCount((state) => state + 1);
        setStoredItems((state) => [...state, ...data]);
      })
      .finally(() => setRefreshing(false));
  }, [newOnly, search]);

  const onRefresh = useCallback(() => {
    if (newOnly || search) return;

    setPageCount((state) => state + 1);
    setRefreshing(true);

    getPageItemsReversed(pageCount, 800)
      .then((data) => setStoredItems((state) => [...data, ...state]))
      .finally(() => setRefreshing(false));
  }, [newOnly, search]);

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
