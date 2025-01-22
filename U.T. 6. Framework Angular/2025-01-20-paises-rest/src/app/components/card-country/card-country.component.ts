import { Component, Input, OnInit } from '@angular/core';
import { CountriesService, CountryT } from '../../services/countries.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-country',
  imports: [ CommonModule ],
  templateUrl: './card-country.component.html',
  styleUrl: './card-country.component.css'
})
export class CardCountryComponent implements OnInit {
  @Input('country') public countryCode: string = '';

  // country: CountryT | undefined;
  country$: Observable<CountryT> | undefined;

  constructor(private service: CountriesService) {
  }
  
  ngOnInit(): void {
    // this.service.getCountryByCode$(this.countryCode).subscribe(country => this.country = country);
    this.country$ = this.service.getCountryByCode$(this.countryCode);
  }
}
