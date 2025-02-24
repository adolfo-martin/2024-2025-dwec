import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaCategoriasComponent } from "./components/lista-categorias/lista-categorias.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaCategoriasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2025-02-24-model-dto';
}
