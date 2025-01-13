import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola mundo';
  author: string = 'Adolfo Martín';
  message: string = 'Esta es nuestra primera aplicación Angular 19' ;
  information: string = 'Angular está soportado por Google';
}
