import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ItemComponent } from './components/item/item.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    ItemComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: [
    ItemComponent
  ]
})
export class ProductsModule { }
