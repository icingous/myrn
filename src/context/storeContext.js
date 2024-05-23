import { createContext } from "react";
import store from "../store/index";

const { cart, tours } = store;
const StoreContext = createContext({ cart, tours });

export default StoreContext;

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={{ cart, tours }}>
      {children}
    </StoreContext.Provider>
  );
};
