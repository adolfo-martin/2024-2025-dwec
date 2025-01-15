import { Component } from '@angular/core';

@Component({
  selector: 'event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  registrarLetraConEvento(e: MouseEvent) {
    // @ts-ignore
    this.letraPulsada = e.target.dataset.letra;
  }

  letraPulsada: string = 'Ninguna';

  registrarLetra(letra: string) {
    this.letraPulsada = letra;
  }
}
