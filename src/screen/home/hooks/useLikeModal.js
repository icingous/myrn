import { useCallback, useState } from "react";

const useModal = () => {
  const [likeModalVisible, setLikeModalVisible] = useState(false);
  const showLikeModal = useCallback(() => setLikeModalVisible(true), []);
  const closeLikeModal = useCallback(() => setLikeModalVisible(false), []);

  return {
    likeModalVisible,
    setLikeModalVisible,
    showLikeModal,
    closeLikeModal,
  };
};

export default useModal;
