import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const shopColectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);
