import { Component, OnInit, TemplateRef } from '@angular/core';
import { IProduct } from '../../interfaces/product-interfaces';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: IProduct[] = [];
  public trackByFn = (_: number, {id}: IProduct) => id; 

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.products = this.dataService.getProducts();
  }

  public onRemoveItemClick(itemId: string) {
    this.dataService.removeProduct(itemId);
    this.products = this.dataService.getProducts();
  }

  public onAddItemClick(addItemModal: TemplateRef<any>) {
    // this.modalService.open(addItemModal, {ariaLabelledBy: 'modal-basic-title'}).result.then(
    //   (res) => console.log('hi', res),
    //   (rej) => console.log(rej)  
    // )
  }

}
