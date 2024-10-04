import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    
  }
  onSubmit(e:any) {
    e.preventDefault();
    this.authService.login(this.username, this.password).subscribe(
      (success) => {
        console.log(success);
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage = 'Invalid username or password';
      }
    );

  }
}
