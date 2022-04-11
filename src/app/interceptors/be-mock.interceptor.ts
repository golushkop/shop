import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
let products = [{
  id: '1',
  name: 'McDonalds',
  description: 'taratatata, I am loving it.',
  displayOrder: 0
},
{
  id: '2',
  name: 'McDonalds',
  description: 'taratatata, I am loving it.',
  displayOrder: 1
},
{
  id: '3',
  name: 'McDonalds',
  description: 'taratatata, I am loving it.',
  displayOrder: 2
},
{
  id: '4',
  name: 'McDonalds',
  description: 'taratatata, I am loving it.',
  displayOrder: 3
}];
const sortFn = (a: any, b: any) => a.displayOrder - b.displayOrder

@Injectable()
export class BeMockInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    switch (request.method) {
      case 'GET':
        return of(new HttpResponse({ status: 200, body: { products } }))
      case 'DELETE': {
        const productId = request.params.get('productId');
        const product = products.find(({ id }) => id !== productId);
        if (!product) return of(new HttpResponse({ status: 404 }));
        products = products.filter(({ id }) => id !== productId).sort(sortFn);
        return of(new HttpResponse({ status: 200, body: { ...product } }))
      }
      case 'POST': {
        const body: any = request.body;
        const product = { ...body, id: this.genId() };
        products = [...products, product];
        return of(new HttpResponse({ status: 200, body: { ...product } }))
      }
      case 'PATCH': {
        const body: any = request.body;
        const product = products.find(({ id }) => id === body.id);
        if (!product) return of(new HttpResponse({ status: 404 }));
        const newProduct = { ...product, ...body };
        products = [...products.filter(({ id }) => id !== product.id), newProduct].sort(sortFn);
        return of(new HttpResponse({ status: 200, body: { ...newProduct } }))
      }

    }
    return next.handle(request);
  }

  private genId(): string {
    return `${new Date().getMilliseconds()}`
  }
}
