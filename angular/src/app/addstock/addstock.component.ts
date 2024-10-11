import { Component } from '@angular/core';

@Component({
  selector: 'app-addstock',
  standalone: true,
  imports: [],
  templateUrl: './addstock.component.html',
  styleUrl: './addstock.component.css'
})
export class AddstockComponent {
  addStock(event: Event) {
    event.preventDefault();
    console.log(event);
  }
}
