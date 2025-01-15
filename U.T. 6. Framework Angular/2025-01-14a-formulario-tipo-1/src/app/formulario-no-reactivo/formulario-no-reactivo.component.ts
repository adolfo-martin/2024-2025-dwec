import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type SituacionLaboralT = 'Estudiante' | 'Asalariado' | 'Autónomo' | 'Funcionario' | 'Desempleado' | 'Jubilado';


type DatosT = {
  nombre: string | undefined,
  apellidos: string | undefined,
  genero: 'masculino' | 'femenino' | undefined,
  aficionMusica: boolean,
  aficionDeportes: boolean,
  aficionCine: boolean,
  situacionLaboral: string | undefined,
} 


@Component({
  selector: 'formulario-no-reactivo',
  imports: [ FormsModule, JsonPipe, CommonModule ],
  templateUrl: './formulario-no-reactivo.component.html',
  styleUrl: './formulario-no-reactivo.component.css'
})
export class FormularioNoReactivoComponent {
  datos: DatosT = {
    nombre: undefined,
    apellidos: undefined, 
    genero: undefined,
    aficionMusica: false,
    aficionDeportes: false,
    aficionCine: false,
    situacionLaboral: undefined,
  }

  situacionesLaborales: Array<{ id: number, descripcion: SituacionLaboralT}> = [
    { id: 1, descripcion: 'Estudiante'},
    { id: 2, descripcion: 'Asalariado'},
    { id: 3, descripcion: 'Autónomo'},
    { id: 4, descripcion: 'Funcionario'},
    { id: 5, descripcion: 'Desempleado'},
    { id: 6, descripcion: 'Jubilado'},
  ];
}
