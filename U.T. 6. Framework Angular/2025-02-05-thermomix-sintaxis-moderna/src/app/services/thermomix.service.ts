import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable, tap } from 'rxjs';
import { Book } from '../models/book.model';
import { Dish } from '../models/dish.model';


type BookDTO = { 
  clave: string,
  titulo: string,
}

type DishDTO = {
  clave: string,
  nombre: string,
  foto: string,
}

@Injectable({
  providedIn: 'root'
})
export class ThermomixService {

  private http = inject(HttpClient);

  public getBooks$(): Observable<Book[]> {
    return this.http.get('http://192.168.0.77:8080/controlador.php?operacion=obtener_libros').pipe(
      // @ts-ignore
      tap(console.log),
      // @ts-ignore
      map(response => response.libros),
      // @ts-ignore
      tap(console.log),
      // @ts-ignore
      map(books => books.map(book => new Book(parseInt(book.clave), book.titulo))),
      // @ts-ignore
      tap(console.log),
      // @ts-ignore
      delay(2000),
    );
  }

  public getBookByCode$(bookCode: number): Observable<Book> {
    return this.http.get<{libros: BookDTO[]}>('http://192.168.0.77:8080/controlador.php?operacion=obtener_libros').pipe(
      map(response => response.libros),
      map(books => books.find(book => book.clave === bookCode.toString())),
      // @ts-ignore
      map(book => new Book(parseInt(book?.clave), book?.titulo)),
    );
  }

  public getDishesByBookId$(bookId: number): Observable<Dish[]> {
    return this.http.get(`http://192.168.0.77:8080/controlador.php?operacion=obtener_platos&libro=${bookId}`).pipe(
      // @ts-ignore
      map(response => response.platos),
      // @ts-ignore
      map(dishes => dishes.map(dish => new Dish(dish.clave, dish.nombre, dish.foto))),
    );
  }
}
