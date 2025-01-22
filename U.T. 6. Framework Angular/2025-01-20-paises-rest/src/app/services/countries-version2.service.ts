import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Country } from '../models/country';

type CountryDTO = {
  cca3: string,
  name: { official: string },
  capital: string,
  flags: { svg: string },
}

@Injectable({
  providedIn: 'root'
})
export class CountriesVersion2Service {

  constructor(private http: HttpClient) { }

  public getCountries$(): Observable<Country[]> {
    return this.http.get<CountryDTO[]>('https://restcountries.com/v3.1/all').pipe(
      map(countries => countries.map(
        country => new Country(country.cca3, country.name.official, country.capital, country.flags.svg)
      ))
    );
  }
}
