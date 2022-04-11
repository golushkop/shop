import { createReducer, on } from "@ngrx/store";
import { setProducts } from "./products.actions";
import { initialState } from "./products.state";

export const productsReducer = createReducer(
    initialState,
    on(setProducts, (_, {products}) => ({products})),
)