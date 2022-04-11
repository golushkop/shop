import { Injectable } from '@angular/core';
import { IProduct } from '../../interfaces/product-interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products: IProduct[] = [{
    id: '1',
    name: 'McDonalds',
    description: 'taratatata, I am loving it.'
  },
  {
    id: '2',
    name: 'McDonalds',
    description: 'taratatata, I am loving it.'
  },
  {
    id: '3',
    name: 'McDonalds',
    description: 'taratatata, I am loving it.'
  },
  {
    id: '4',
    name: 'McDonalds',
    description: 'taratatata, I am loving it.'
  }];

  getProducts(): IProduct[] {
    return this.products;
  }

  removeProduct(productId: string): void {
    this.products = this.products.filter(({id}) => id !== productId)
  }
}
