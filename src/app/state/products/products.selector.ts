import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./products.state";

export const selectProducts = createFeatureSelector<ProductsState>("products");

export const selectProductsItems = createSelector(
    selectProducts,
  (state: ProductsState) => state.products
);
