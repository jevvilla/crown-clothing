import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const shopColectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const collectionSelector = (collectionUrlParam) =>
  createSelector(
    [shopColectionsSelector],
    (collections) => collections[collectionUrlParam]
  );
