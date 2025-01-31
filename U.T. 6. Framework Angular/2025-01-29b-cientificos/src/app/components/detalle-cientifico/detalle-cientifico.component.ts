import { Component, OnInit } from '@angular/core';
import { Cientifico, Cientificos } from '../../mock/datos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detalle-cientifico',
  imports: [],
  templateUrl: './detalle-cientifico.component.html',
  styleUrl: './detalle-cientifico.component.css'
})
export class DetalleCientificoComponent implements OnInit {
  cientifico?: Cientifico;

  constructor(private ruta: ActivatedRoute) {}

  ngOnInit(): void {
    const cientificoId = this.ruta.snapshot.paramMap.get('id');
    // @ts-ignore
    this.cientifico = Cientificos.recuperarCientifico(cientificoId);
  }
}
