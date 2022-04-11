import { IProduct } from "src/app/models/product.interface";

export interface ProductsState {
    products: IProduct[];
}

export const initialState: ProductsState = {
    products: []
}