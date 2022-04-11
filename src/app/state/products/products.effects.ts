import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { addProduct, deleteProduct, loadProducts, setProducts, updateProduct } from './products.actions';

@Injectable()
export class ProductEffects {

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadProducts),
            mergeMap(() => this.dataService.getProducts()
                .pipe(
                    map((products) => setProducts({products}))
                )
            )
        )
    );

    deleteProduct$ = createEffect(() => 
        this.actions$.pipe(
            ofType(deleteProduct),
            mergeMap(({productId}) => this.dataService.deleteProduct(productId).pipe(
                map(() => loadProducts())
            ))
        )
    )
    
    addProduct$ = createEffect(() => 
        this.actions$.pipe(
            ofType(addProduct),
            mergeMap(({product}) => this.dataService.addProduct(product).pipe(
                map(() => loadProducts())
            ))
        )
    )
    
    updateProduct$ = createEffect(() => 
        this.actions$.pipe(
            ofType(updateProduct),
            mergeMap(({product}) => this.dataService.updateProduct(product).pipe(
                map(() => loadProducts())
            ))
        )
    )

    constructor(
        private actions$: Actions,
        private dataService: DataService
    ) { }
}