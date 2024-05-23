import { useCallback, useContext, useEffect, useState } from "react";
import StoreContext from "../../../context/storeContext";

const useItems = () => {
  const {
    tours: {
      tours: storedItems,
      isLoading,
      pageCount,
      getPageItems,
      getPageItemsReversed,
    },
  } = useContext(StoreContext);

  const [filter, setFilter] = useState({});
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(storedItems);
  const { newOnly } = filter;

  useEffect(() => {
    filterItems();
  }, [filter, search, storedItems]);

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
    if (newOnly || search || pageCount > 5) return;

    getPageItems(800);
  }, [newOnly, search, pageCount]);

  const onRefresh = useCallback(() => {
    if (newOnly || search) return;

    getPageItemsReversed(800);
  }, [newOnly, search, storedItems]);

  return {
    items,
    filter,
    setFilter,
    search,
    setSearch,
    onEndReached,
    refreshing: isLoading,
    onRefresh,
  };
};

export default useItems;
