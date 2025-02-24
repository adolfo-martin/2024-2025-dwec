import { Component } from '@angular/core';
import { DummyService } from '../../services/dummy.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'lista-categorias',
  imports: [ CommonModule ],
  templateUrl: './lista-categorias.component.html',
  styleUrl: './lista-categorias.component.css'
})
export class ListaCategoriasComponent {
  categorias$: Observable<Categoria[]> | undefined;

  constructor(protected servicio: DummyService) {
    this.categorias$ = this.servicio.recuperarCategorias$();
  }
}
