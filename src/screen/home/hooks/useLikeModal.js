import { useState } from "react";

const useModal = () => {
  const [likeModalVisible, setLikeModalVisible] = useState(false);
  const showLikeModal = () => setLikeModalVisible(true);
  const closeLikeModal = () => setLikeModalVisible(false);

  return {
    likeModalVisible,
    setLikeModalVisible,
    showLikeModal,
    closeLikeModal,
  };
};

export default useModal;
