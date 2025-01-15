import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface MiEtiquetaEvent {
  getMessage(): string;
  getTarget(): MiEtiquetaComponent;
  getTimestamp(): number;
  getType(): string;
}

@Component({
  selector: 'mi-etiqueta',
  imports: [],
  templateUrl: './mi-etiqueta.component.html',
  styleUrl: './mi-etiqueta.component.css',
})
export class MiEtiquetaComponent implements OnInit {
  @Input('mensaje') mensajeRecibido: string = '';

  @Output('onmensaje') private emisorMensaje =
    new EventEmitter<MiEtiquetaEvent>();

  ngOnInit(): void {
    const elThisDeFuera = this;

    setTimeout(() => {
      class Evento implements MiEtiquetaEvent {
        getType(): string {
          return 'onmensaje';
        }
        getMessage(): string {
          return 'BUENOS DÍAS';
        }
        getTarget(): MiEtiquetaComponent {
          return elThisDeFuera;
        }
        getTimestamp(): number {
          return Date.now();
        }
      }

      const evento: MiEtiquetaEvent = new Evento();
      this.emisorMensaje.emit(evento);
    }, 5000);
  }
}
