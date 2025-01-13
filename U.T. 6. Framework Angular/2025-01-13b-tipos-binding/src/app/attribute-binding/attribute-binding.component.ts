import { Component } from '@angular/core';

@Component({
  selector: 'attribute-binding',
  imports: [],
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.css'
})
export class AttributeBindingComponent {
  url: string = 'https://angular.io';
  texto: string = 'Sitio web oficial del framework Angular';
  objetivo = '_blank';
}
