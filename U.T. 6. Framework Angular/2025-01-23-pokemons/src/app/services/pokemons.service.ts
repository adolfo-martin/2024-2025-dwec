import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

type PokemonDTO = {
  id: number,
  name: string,
  height: number,
  weight: number,
  sprites: { front_default: string, back_default: string },
}

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  public getPokemonById$(id: number): Observable<Pokemon> {
    return this.http.get<PokemonDTO>(`https://pokeapi.co/api/v2/pokemon/${id}/`).pipe(
      map( ({ id, name, height, weight, sprites }) => new Pokemon(
        id, name, height, weight, sprites.front_default, sprites.back_default,
      )),
      delay(generarNumeroEntero(2000, 8000)),
    );

    function generarNumeroEntero(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
}
