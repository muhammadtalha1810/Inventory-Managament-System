import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './reset-page.component.html',
  styleUrl: './reset-page.component.css'
})
export class ResetPageComponent {
    errorMessage: string = '';
    email: string = '';
    onSubmit(event: Event){
        event.preventDefault();
        this.errorMessage = 'Email sent';
    }
}
