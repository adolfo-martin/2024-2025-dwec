import { Component, inject } from '@angular/core';
import { CountriesVersion2Service } from '../../services/countries-version2.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'datalist-countries',
  imports: [ CommonModule ],
  templateUrl: './datalist-countries.component.html',
  styleUrl: './datalist-countries.component.css'
})
export class DatalistCountriesComponent {
  private service = inject(CountriesVersion2Service);
  countries$ = this.service.getCountries$();
}
