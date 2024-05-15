import { useState } from "react";

const useSettings = () => {
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const showSettingsModal = () => setSettingsModalVisible(true);
  const closeSettingsModal = () => setSettingsModalVisible(false);

  return {
    settingsModalVisible,
    setSettingsModalVisible,
    showSettingsModal,
    closeSettingsModal,
  };
};

export default useSettings;
