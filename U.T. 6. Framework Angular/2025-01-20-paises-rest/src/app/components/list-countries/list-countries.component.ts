import { Component } from '@angular/core';
import { CountriesService, CountryT } from '../../services/countries.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'list-countries',
  imports: [ CommonModule ],
  templateUrl: './list-countries.component.html',
  styleUrl: './list-countries.component.css'
})
export class ListCountriesComponent {
  // countries: CountryT[] = [];
  countries$: Observable<CountryT[]>;

  constructor(private service: CountriesService) {
    // this.service.getCountries$().subscribe(countries => this.countries = countries);
    this.countries$ = this.service.getCountries$();
  }
}
