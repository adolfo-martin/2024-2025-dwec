import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThermomixService } from '../../services/thermomix.service';

@Component({
  selector: 'table-dishes',
  imports: [ CommonModule ],
  templateUrl: './table-dishes.component.html',
  styleUrl: './table-dishes.component.css'
})
export class TableDishesComponent {
  dishes$;
  
  constructor(private service: ThermomixService) {
    this.dishes$ = this.service.retrieveDishes$();
  }
}
