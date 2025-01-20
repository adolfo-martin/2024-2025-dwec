import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosListaComponent } from "./components/productos-lista/productos-lista.component";

@Component({
  selector: 'app-root',
  imports: [ProductosListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2025-01-17-productos-tecnologia';
}
