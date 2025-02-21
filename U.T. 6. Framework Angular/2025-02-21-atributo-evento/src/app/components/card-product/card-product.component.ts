import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ProductT = {
  name: string,
  price: string,
}

@Component({
  selector: 'card-product',
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {

  @Input('name') name: string | undefined;
  @Input('price') price: string | undefined;
  @Input('image') image: string | undefined;

  @Output('productAdded') private productAddedEmitter = new EventEmitter<ProductT>();

  reportProductAdded($event: MouseEvent) {
    // @ts-ignore
    this.productAddedEmitter.emit({name: this.name, price: this.price});
  }
}
