import { Component } from '@angular/core';

@Component({
  selector: 'app-addmanufacturer',
  standalone: true,
  imports: [],
  templateUrl: './addmanufacturer.component.html',
  styleUrl: './addmanufacturer.component.css'
})
export class AddmanufacturerComponent {
  addManufacturer(event: Event) {
    event.preventDefault();
    console.log(event);
  }
}
