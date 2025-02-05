import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThermomixService {

  private http = inject(HttpClient);

  public getBooks$(): Observable<any> {
    return this.http.get('http://192.168.0.77:8080/controlador.php?operacion=obtener_libros').pipe(
      tap(console.log),
      // @ts-ignore
      map(response => response.libros),
      tap(console.log),
      delay(2000),
    );
  }

  public getBookByCode$(bookCode: string): Observable<any> {
    return this.http.get('http://192.168.0.77:8080/controlador.php?operacion=obtener_libros').pipe(
      // @ts-ignore
      map(response => response.libros),
      // @ts-ignore
      map(books => books.find(book => book.clave === bookCode)),
    );
  }
}
