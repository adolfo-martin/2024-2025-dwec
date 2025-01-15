import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationBindingComponent } from "./interpolation-binding/interpolation-binding.component";
import { AttributeBindingComponent } from "./attribute-binding/attribute-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { TwoWaysBindingComponent } from "../two-ways-binding/two-ways-binding.component";

@Component({
  selector: 'app-root',
  imports: [InterpolationBindingComponent, AttributeBindingComponent, EventBindingComponent, TwoWaysBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2025-01-13b-tipos-binding';
}
