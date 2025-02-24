import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, tap } from 'rxjs';
import { Categoria } from '../models/categoria.model';


interface CategoriaDtoI {
  slug: string,
  name: string,
}

export interface ProductoDtoI {
  id: number,
  title: string,
  category: string,
  price: number,
  brand: string,
}


@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http: HttpClient) { }

  recuperarProductos$(): Observable<ProductoDtoI[]> {
    return this.http.get<{products: ProductoDtoI[]}>('https://dummyjson.com/products').pipe(
      map(respuesta => respuesta.products),
      delay(2000),
    );
  }

  recuperarCategorias$(): Observable<Categoria[]> {
    return this.http.get<CategoriaDtoI[]>('https://dummyjson.com/products/categories').pipe(
      map(categorias => categorias.map(categoria => new Categoria(categoria.slug, categoria.name))),
      delay(2000),
    );
  }

  recuperarProductosPorCategoria$(categoriaId: string): Observable<ProductoDtoI[]> {
    return this.http.get<{products: ProductoDtoI[]}>(`https://dummyjson.com/products/category/${categoriaId}`).pipe(
      map(respuesta => respuesta.products),
      delay(2000),
    );
  }
}
