import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product-interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: IProduct[] = [{
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
  public trackByFnc = (_: number, {id}: IProduct) => id; 

  constructor() { }

  ngOnInit(): void {
  }

  public onRemoveItemClick(itemId: string) {
    console.log(itemId);
  }

}
