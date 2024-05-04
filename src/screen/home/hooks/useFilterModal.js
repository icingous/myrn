import { useState } from 'react';

const useFilter = () => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const showFilterModal = () => setFilterModalVisible(true);
  const closeFilterModal = () => setFilterModalVisible(false);

  return {
    filterModalVisible,
    setFilterModalVisible,
    showFilterModal,
    closeFilterModal,
  };
};

export default useFilter;
