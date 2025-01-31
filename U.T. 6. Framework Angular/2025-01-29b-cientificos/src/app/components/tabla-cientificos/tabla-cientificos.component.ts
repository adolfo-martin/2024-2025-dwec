import { Component } from '@angular/core';
import { Cientifico, Cientificos } from '../../mock/datos';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'tabla-cientificos',
  imports: [ CommonModule ],
  templateUrl: './tabla-cientificos.component.html',
  styleUrl: './tabla-cientificos.component.css'
})
export class TablaCientificosComponent {
  
  cientificos: Array<Cientifico> = Cientificos.recuperarCientificos();

  constructor(private enrutador: Router) { }

  mostrarCientifico(cientificoId: string) {
    this.enrutador.navigate(['/cientifico/', cientificoId]);
  }
}
