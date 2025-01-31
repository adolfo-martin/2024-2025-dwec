import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getCategories$(): Observable<any> {
    return this.http.get('https://dummyjson.com/products/categories');
  }
}
