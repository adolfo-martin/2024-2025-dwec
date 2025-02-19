import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  authService = inject(AuthorizationService);

}
