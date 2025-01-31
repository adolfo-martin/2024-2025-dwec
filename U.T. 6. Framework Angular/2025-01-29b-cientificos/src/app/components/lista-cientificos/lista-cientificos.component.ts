import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cientifico, Cientificos } from '../../mock/datos';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lista-cientificos',
  imports: [ CommonModule, RouterLink ],
  templateUrl: './lista-cientificos.component.html',
  styleUrl: './lista-cientificos.component.css'
})
export class ListaCientificosComponent {
  cientificos: Array<Cientifico> = Cientificos.recuperarCientificos();
}
