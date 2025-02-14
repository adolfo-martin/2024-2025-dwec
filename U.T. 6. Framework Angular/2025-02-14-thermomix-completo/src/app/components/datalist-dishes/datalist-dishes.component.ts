import { Component } from '@angular/core';
import { ThermomixService } from '../../services/thermomix.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'datalist-dishes',
  imports: [ CommonModule ],
  templateUrl: './datalist-dishes.component.html',
  styleUrl: './datalist-dishes.component.css'
})
export class DatalistDishesComponent {
  dishes$;

  constructor(private service: ThermomixService) {
    this.dishes$ = this.service.retrieveDishes$();
  }

  showDish(event: MouseEvent) {
    // @ts-ignore
    console.log(event.target.value)
  }
}
