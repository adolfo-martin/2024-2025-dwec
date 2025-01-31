import { Routes } from '@angular/router';
import { ListaCientificosComponent } from './components/lista-cientificos/lista-cientificos.component';
import { DetalleCientificoComponent } from './components/detalle-cientifico/detalle-cientifico.component';
import { TablaCientificosComponent } from './components/tabla-cientificos/tabla-cientificos.component';

export const routes: Routes = [
    { path: '', redirectTo: '/cientificos-tabla', pathMatch: 'full' },
    { path: 'cientificos-lista', component: ListaCientificosComponent },
    { path: 'cientificos-tabla', component: TablaCientificosComponent },
    { path: 'cientifico/:id', component: DetalleCientificoComponent },
];
