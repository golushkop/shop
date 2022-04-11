import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product.interface';

@Injectable({providedIn: 'root'})
export class DataService {
  private products: IProduct[] = [];

  constructor(private http: HttpClient, private store: Store) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<{products: IProduct[]}>('/api/products').pipe(map(({products}) => products));
  }

  deleteProduct(productId: string): Observable<IProduct> {
    return this.http.delete<IProduct>('/api/products', {params: {productId}});
  }

  addProduct(productData: Partial<IProduct>): Observable<IProduct> {
    return this.http.post<IProduct>('/api/products', productData);
  }

  updateProduct(productData: Partial<IProduct> & Pick<IProduct, 'id'>): Observable<IProduct> {
    
    return this.http.patch<IProduct>('api/products', productData)
  }
}
