import { Component } from '@angular/core';

@Component({
  selector: 'app-addvariant',
  standalone: true,
  imports: [],
  templateUrl: './addvariant.component.html',
  styleUrl: './addvariant.component.css'
})
export class AddvariantComponent {
  addVariant(event: Event) {
    event.preventDefault();
    console.log(event);
  }
}
