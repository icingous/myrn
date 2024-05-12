import { useMemo } from "react";
import { getItems } from "../../../api/store";
import { SIZE } from "../config";

const useItems = () => {
  const items = useMemo(
    () =>
      getItems()
        .filter((_, i) => i < SIZE)
        .map((item, i) => ({
          ...item,
          image: {
            uri: `https://picsum.photos/800.webp?random=${i}`,
          },
        })),
    [getItems]
  );

  return items;
};

export default useItems;
