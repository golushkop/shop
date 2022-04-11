import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product.interface';
import { addProduct, deleteProduct, loadProducts, selectProductsItems, updateProduct } from 'src/app/state/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  public products: Observable<IProduct[]> = this.store.select(selectProductsItems);
  public trackByFn = (_: number, { id }: IProduct) => id;
  public modalForm: FormGroup = this.newItemForm();

  constructor(private modalService: NgbModal, private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadProducts())
  }

  public onEditClick(content: TemplateRef<any>, product: IProduct) {
    this.modalForm = this.newItemForm(product);
    const successCb = () => {
      const data = this.modalForm.getRawValue();
      this.store.dispatch(updateProduct({product: {...product, ...data}}));
      this.modalForm = this.newItemForm();
    }
    this.openModal(content, successCb);
  }

  public onRemoveItemClick(productId: string) {
    this.store.dispatch(deleteProduct({productId}))
  }

  public onAddItemClick(content: TemplateRef<any>) {
    const successCb = () => {
      const data = this.modalForm.getRawValue();
      this.store.dispatch(addProduct({product: data}));
      this.modalForm = this.newItemForm();
    }
    this.openModal(content, successCb);
  }

  private openModal(content: TemplateRef<any>, successCb?: () => void, cancelCb?: () => void) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(successCb, cancelCb);
  }

  private newItemForm(data?: Partial<IProduct>): FormGroup {
    return this.fb.group({
      name: [data?.name || '', Validators.required],
      description: [data?.description || '']
    });
  }

}
