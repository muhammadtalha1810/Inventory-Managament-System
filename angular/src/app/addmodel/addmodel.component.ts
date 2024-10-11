import { Component } from '@angular/core';

@Component({
  selector: 'app-addmodel',
  standalone: true,
  imports: [],
  templateUrl: './addmodel.component.html',
  styleUrl: './addmodel.component.css'
})
export class AddmodelComponent {
  addModel(event: Event) {
    event.preventDefault();
    console.log(event);
  }
}
