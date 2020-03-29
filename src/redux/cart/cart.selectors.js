import { createSelector } from "reselect";

const cart = state => state.cart;

export const cartItemsSelector = createSelector([cart], cart => cart.cartItems);

export const cartItemsCountSelector = createSelector(
  [cartItemsSelector],
  cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
