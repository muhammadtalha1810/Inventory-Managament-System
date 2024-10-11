import { Component } from '@angular/core';

@Component({
  selector: 'app-addbrand',
  standalone: true,
  imports: [],
  templateUrl: './addbrand.component.html',
  styleUrl: './addbrand.component.css'
})
export class AddbrandComponent {
  addBrand(event: Event) {
    event.preventDefault();
    console.log(event);
  }
}
