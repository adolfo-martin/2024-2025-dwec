import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interpolation-binding',
  imports: [],
  templateUrl: './interpolation-binding.component.html',
  styleUrl: './interpolation-binding.component.css'
})
export class InterpolationBindingComponent implements OnInit {
  nombre: string = "Adolfo Martín";
  edad: number = 35;
  saludo: string = 'Buenos días';

  ngOnInit(): void {
    setTimeout(() => this.edad += 1, 5000);
  }
}
