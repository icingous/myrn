import { useEffect, useMemo, useState } from 'react';
import { getItems } from '../../../api/store';

const useItems = () => {
  const storedItems = useMemo(() => getItems(), []);
  const [filter, setFilter] = useState({});
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(storedItems);
  const { newOnly } = filter;

  useEffect(() => {
    filterItems();
  }, [filter, search]);

  const filterItems = () =>
    setItems(
      storedItems.filter(
        ({ title, isNew }) =>
          (search ? title.includes(search) : true) &&
          (newOnly === true ? Boolean(isNew) : true)
      )
    );

  return {
    items,
    filter,
    setFilter,
    search,
    setSearch,
  };
};

export default useItems;
