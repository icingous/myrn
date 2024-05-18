import { useMemo } from "react";
import { getItems } from "../../../api/store";
import { SIZE } from "../config";

const useItems = () => {
  const items = useMemo(() => {
    return getItems(800)
      .filter((_, i) => i < SIZE)
      .map((item) => ({
        ...item,
        image: {
          uri: item.image,
        },
      }));
  }, [getItems]);

  return items;
};

export default useItems;
