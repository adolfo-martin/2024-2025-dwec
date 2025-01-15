import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiEtiquetaComponent, MiEtiquetaEvent } from "./mi-etiqueta/mi-etiqueta.component";

@Component({
  selector: 'app-root',
  imports: [MiEtiquetaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2025-01-15a-atributos-eventos';

  procesarMensaje(evento: MiEtiquetaEvent) {
    alert(evento.getMessage());
  }
}

