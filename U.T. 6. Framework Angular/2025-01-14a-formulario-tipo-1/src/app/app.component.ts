import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioNoReactivoComponent } from "./formulario-no-reactivo/formulario-no-reactivo.component";

@Component({
  selector: 'app-root',
  imports: [FormularioNoReactivoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2025-01-14a-formulario-tipo-1';
}
