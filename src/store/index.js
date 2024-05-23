import cartStore from "./cart/cart-store";
import tourStore from "./tours/tour-store";

class RootStore {
  cart = cartStore;
  tours = tourStore;
}

export default new RootStore();
