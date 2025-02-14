import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap, Observable, tap, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThermomixService {

  constructor(private http: HttpClient) { }

  public retrieveBooks$(): Observable<any> {
    return this.http.get('http://localhost:8080/controlador.php?operacion=obtener_libros').pipe(
      // @ts-ignore
      map(({ libros }) => libros),
      tap(console.log),
    );
  }

  public retrieveDishesByBook$(bookId: string): Observable<any> {
    return this.http.get(`http://localhost:8080/controlador.php?operacion=obtener_platos&libro=${bookId}`).pipe(
      // @ts-ignore
      map(response => response.platos),
    );
  }

  public retrieveDishes$(): Observable<any> {
    return this.retrieveBooks$().pipe(
      // @ts-ignore
      switchMap(books => zip(books.map(book => this.retrieveDishesByBook$(book.clave)))),
      map(dishesUnflatten => dishesUnflatten.flat()),
      tap(console.log),
    )
  }
}
