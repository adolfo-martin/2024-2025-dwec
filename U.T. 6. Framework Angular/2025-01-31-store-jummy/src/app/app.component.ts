import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAppComponent } from "./components/header-app/header-app.component";
import { NavAppComponent } from "./components/nav-app/nav-app.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderAppComponent, NavAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
