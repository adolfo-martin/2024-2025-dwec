import { Component } from '@angular/core';
import { CountriesService, CountryT } from '../../services/countries.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'select-countries',
  imports: [ CommonModule ],
  templateUrl: './select-countries.component.html',
  styleUrl: './select-countries.component.css'
})
export class SelectCountriesComponent {
  countries$: Observable<CountryT[]>;

  constructor(private service: CountriesService) {
    this.countries$ = this.service.getCountries$();
  }
}
