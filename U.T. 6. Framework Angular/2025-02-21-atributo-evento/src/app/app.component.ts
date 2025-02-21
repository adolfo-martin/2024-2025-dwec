import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardProductComponent, ProductT } from "./components/card-product/card-product.component";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

export type ProductDtoT = {
  name: string,
  price: string,
  image: string,
}

@Component({
  selector: 'app-root',
  imports: [CardProductComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  shoppingCart: ProductT[] = [];
  quantity = 0;
  totalPrice = 0;
  products$: Observable<ProductDtoT[]> | undefined;

  constructor(private http: HttpClient) {
    this.products$ = this.http.get('https://dummyjson.com/products').pipe(
      // @ts-ignore
      map(data => data.products),
      // @ts-ignore
      map(products => products.map(product => 
        ({name: product.title, price: product.price, image: product.images[0]}))
      ),
    )
  }


  addToCart(product: ProductT) {
    this.shoppingCart.push(product);
    this.quantity++;
    this.totalPrice += parseFloat(product.price);
  }


}
