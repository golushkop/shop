import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/models/product.interface";

export const addProduct = createAction(
    '[Add Product] add product to the list',
    props<{product: IProduct}>()
)

export const loadProducts = createAction(
    '[Load Products] loads products'
)

export const deleteProduct = createAction(
    '[Delete Product] add product from the list',
    props<{productId: string}>()
)

export const setProducts = createAction(
    '[Set Products] set new product list',
    props<{products: IProduct[]}>()
)

export const updateProduct = createAction(
    '[Update Products] update product',
    props<{product: IProduct}>()
)