import { Component, Input, OnInit } from '@angular/core';
import { CountriesService, CountryT } from '../../services/countries.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'card-country',
  imports: [],
  templateUrl: './card-country.component.html',
  styleUrl: './card-country.component.css'
})
export class CardCountryComponent implements OnInit {
  @Input('country') public countryCode: string = '';

  country: CountryT | undefined;

  constructor(private service: CountriesService) { }
  
  ngOnInit(): void {
    this.service.getCountryByCode$(this.countryCode).subscribe(country => this.country = country);
  }
}
