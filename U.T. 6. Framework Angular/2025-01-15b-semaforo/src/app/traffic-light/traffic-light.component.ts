import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum TrafficLightColor { ROJO, AMBAR, VERDE };

@Component({
  selector: 'traffic-light',
  imports: [ CommonModule ],
  templateUrl: './traffic-light.component.html',
})
export class TrafficLightComponent implements OnInit {
  
  isRedLightTurnedOn = false;
  isAmbarLightTurnedOn = false;
  isGreenLightTurnedOn = false;

  @Input('duracion-rojo') duracionRojo: string = '0';
  @Input('duracion-ambar') duracionAmbar: string = '0';
  @Input('duracion-verde') duracionVerde: string = '0';

  @Output('colorChanged') private colorChangedEmitter = new EventEmitter<TrafficLightColor>();
  
  ngOnInit(): void {
    setInterval(() => {
      setTimeout(() => {
        this.isRedLightTurnedOn = true;
        this.isAmbarLightTurnedOn = false;
        this.isGreenLightTurnedOn = false;
        this.colorChangedEmitter.emit(TrafficLightColor.ROJO);
      }, 0);
    
      setTimeout(() => {
        this.isRedLightTurnedOn = false;
        this.isAmbarLightTurnedOn = false;
        this.isGreenLightTurnedOn = true;
        this.colorChangedEmitter.emit(TrafficLightColor.VERDE);
      }, 0 + parseInt(this.duracionRojo) * 1000);
    
      setTimeout(() => {
        this.isRedLightTurnedOn = false;
        this.isAmbarLightTurnedOn = true;
        this.isGreenLightTurnedOn = false;
        this.colorChangedEmitter.emit(TrafficLightColor.AMBAR);
      }, 0 + parseInt(this.duracionRojo) * 1000 + parseInt(this.duracionVerde) * 1000);

    }, parseInt(this.duracionRojo) * 1000 + parseInt(this.duracionVerde) * 1000 + parseInt(this.duracionAmbar) * 1000);


  }
}
