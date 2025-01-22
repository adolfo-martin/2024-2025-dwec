import { Component } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { ListCountriesComponent } from "./components/list-countries/list-countries.component";
import { CardCountryComponent } from "./components/card-country/card-country.component";
import { SelectCountriesComponent } from "./components/select-countries/select-countries.component";
import { DatalistCountriesComponent } from "./components/datalist-countries/datalist-countries.component";


@Component({
  selector: 'app-root',
  imports: [ListCountriesComponent, CardCountryComponent, SelectCountriesComponent, DatalistCountriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private service: CountriesService) {
    // this.service.getCountries().subscribe(console.log);
  }

  
}
