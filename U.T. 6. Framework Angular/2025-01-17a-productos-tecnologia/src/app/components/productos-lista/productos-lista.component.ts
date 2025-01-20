import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ProductoT } from '../../services/datos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'productos-lista',
  imports: [ CommonModule ],
  templateUrl: './productos-lista.component.html',
  styleUrl: './productos-lista.component.css'
})
export class ProductosListaComponent {
  // public service: ProductosService;

  // constructor() {
  //   this.service = new ProductosService();
  // }

  // public service: ProductosService;

  // // injección de dependencias
  // constructor(service: ProductosService) {
  //   this.service = service;
  // }

  productos: Array<ProductoT>;
  total: number = 0;

  constructor(public service: ProductosService) {
    this.productos = service.recuperarProductos();
    // this.productos.forEach(producto => this.total += producto.precio);
    this.total = this.productos.reduce((acc, cur) => acc += cur.precio, 0);
  }
}
