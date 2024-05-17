import { createContext } from "react";
import { Appearance } from "react-native";

const initialValue = {
  colorScheme: Appearance.getColorScheme(),
  setColorScheme: Appearance.setColorScheme,
};
const ColorSchemeContext = createContext(initialValue);

export const ColorSchemeContextProvider = ({ children }) => (
  <ColorSchemeContext.Provider value={initialValue}>
    {children}
  </ColorSchemeContext.Provider>
);

export default ColorSchemeContext;
