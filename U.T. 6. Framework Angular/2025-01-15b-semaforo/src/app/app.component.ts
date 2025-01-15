import { Component } from '@angular/core';
import {
  TrafficLightColor,
  TrafficLightComponent,
} from './traffic-light/traffic-light.component';

@Component({
  selector: 'app-root',
  imports: [TrafficLightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  colorChangedHandler(e: TrafficLightColor) {
    console.log(e);
  }
}
