import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';


export type CountryT = {
  cca3: string,
  name: { official: string },
  capital: string,
  flags: { svg: string },
}


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private static URL_BASE = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  public getCountries$(): Observable<CountryT[]> {
    // @ts-ignore
    return this.http.get(CountriesService.URL_BASE + '/all').pipe(
      // @ts-ignore
      delay(3000),
    );
  }


  public getCountryByCode$(code: string): Observable<CountryT> {
    // @ts-ignore
    return this.http.get(CountriesService.URL_BASE + '/alpha/' + code).pipe(
      // @ts-ignore
      map(countries => countries[0]),
      // @ts-ignore
      delay(3000),
    );
  }

  public removeCountryByCode$(code: string) {}
}
