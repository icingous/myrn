import { useCallback, useState } from "react";

const useFilter = () => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const showFilterModal = useCallback(() => setFilterModalVisible(true), []);
  const closeFilterModal = useCallback(() => setFilterModalVisible(false), []);

  return {
    filterModalVisible,
    setFilterModalVisible,
    showFilterModal,
    closeFilterModal,
  };
};

export default useFilter;
