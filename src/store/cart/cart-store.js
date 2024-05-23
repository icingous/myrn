import { makeAutoObservable } from "mobx";

class CartStore {
  cart = new Map();

  constructor() {
    makeAutoObservable(this);
  }

  get items() {
    return [...this.cart.values()];
  }

  get count() {
    return this.items.reduce((a, { count }) => a + count, 0);
  }

  get amount() {
    return this.items.reduce((a, { count, price }) => a + count * price, 0);
  }

  // addItem = (item) => {
  //   const { cart } = this;

  //   if (cart.has(item)) {
  //     cart.set(item, cart.get(item) + 1);
  //   } else {
  //     cart.set(item, 1);
  //   }
  // };

  // removeItem = (item) => {
  //   const { cart } = this;
  //   const itemCount = cart.get(item);

  //   if (!itemCount) return;

  //   if (--itemCount === 0) {
  //     cart.delete(item);
  //   } else {
  //     cart.set(item, itemCount);
  //   }
  // };

  addItem = (item) => {
    const { id } = item;
    const { cart } = this;

    if (cart.has(id)) {
      cart.set(id, { ...item, count: cart.get(id).count + 1 });
    } else {
      cart.set(id, { ...item, count: 1 });
    }
  };

  removeItem = (item) => {
    const { id } = item;
    const { cart } = this;
    const storedItem = cart.get(id);

    if (!storedItem) return;

    let { count } = item;

    if (--count === 0) {
      cart.delete(id);
    } else {
      cart.set(id, { ...item, count });
    }
  };
}

export default new CartStore();
