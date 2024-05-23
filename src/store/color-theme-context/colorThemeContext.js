import { createContext, useCallback, useState } from "react";
import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();

const initialValue = {
  isSchemeLight: colorScheme === "light",
  toggleScheme: () => {},
};

const ColorSchemeContext = createContext(initialValue);

export const ColorSchemeContextProvider = ({ children }) => {
  const [isSchemeLight, setIsSchemeLight] = useState(
    initialValue.isSchemeLight
  );

  const toggleScheme = useCallback(
    () => setIsSchemeLight((state) => !state),
    []
  );

  return (
    <ColorSchemeContext.Provider
      value={{
        isSchemeLight,
        toggleScheme,
      }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeContext;
