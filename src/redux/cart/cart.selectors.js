import { createSelector } from "reselect";

const cart = state => state.cart;

export const cartItemsSelector = createSelector([cart], cart => cart.cartItems);

export const cartHiddenSelector = createSelector([cart], cart => cart.hidden);

export const cartItemsCountSelector = createSelector(
  [cartItemsSelector],
  cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const cartTotalSelector = createSelector(
  [cartItemsSelector],
  cartItems =>
    cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    )
);
