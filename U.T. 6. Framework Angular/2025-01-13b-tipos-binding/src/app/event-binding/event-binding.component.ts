import { Component } from '@angular/core';

@Component({
  selector: 'event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  letraPulsada: string = 'Ninguna';

  registrarLetra(letra: string) {
    this.letraPulsada = letra;
  }
}
