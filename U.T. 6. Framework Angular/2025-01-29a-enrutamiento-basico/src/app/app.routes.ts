import { Routes } from '@angular/router';
import { FichaInicioComponent } from './components/ficha-inicio/ficha-inicio.component';
import { FichaProductosComponent } from './components/ficha-productos/ficha-productos.component';
import { FichaServiciosComponent } from './components/ficha-servicios/ficha-servicios.component';
import { FichaContactoComponent } from './components/ficha-contacto/ficha-contacto.component';
import { FichaError404Component } from './components/ficha-error-404/ficha-error-404.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: FichaInicioComponent },
    { path: 'productos', component: FichaProductosComponent },
    { path: 'servicios', component: FichaServiciosComponent },
    { path: 'contacto', component: FichaContactoComponent },
    { path: '**', component: FichaError404Component },
];
