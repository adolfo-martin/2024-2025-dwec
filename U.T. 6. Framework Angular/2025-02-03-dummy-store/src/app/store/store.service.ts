import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Category } from './category.model';

type CategoryDTO = {
  slug: string,
  name: string,
}

type ProductDTO = {
  title: string,
  thumbnail: string,
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  retrieveCategories$(): Observable<Category[]> {
    return this.http.get('https://dummyjson.com/products/categories').pipe(
      tap(console.log),
    );
  }

  retrieveProductsByCategoryCode$(categoryCode: string): Observable<Product[]> {
    return this.http.get(`https://dummyjson.com/products/category/${categoryCode}`).pipe(
      tap(console.log),
      // @ts-ignore
      map(response => response.products),
      tap(console.log),
    );
  }
}
