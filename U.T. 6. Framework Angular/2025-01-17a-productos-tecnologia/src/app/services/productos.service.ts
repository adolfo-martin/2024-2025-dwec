import { Injectable } from '@angular/core';
import { productos, ProductoT } from './datos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  public recuperarProductos(): ProductoT[] {
    return productos;
  }
}
