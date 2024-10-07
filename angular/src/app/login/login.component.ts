import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { Output } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, HttpClientModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router, private sharedDataService: SharedDataService) { }
  ngOnInit(): void {
    this.sharedDataService.currentLoginStatus.subscribe(status => this.isLoggedIn = status);
    this.authService.getisLoggedIn().subscribe(
      (res: any) => 
        { 
          this.isLoggedIn = (Boolean(res.isLoggedIn));
          if (this.isLoggedIn == true) {
            this.router.navigate(['/']);
          }
        }
      );
  }
  onSubmit(e:any) {
    e.preventDefault();
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log(response);
        this.isLoggedIn = true;
        this.sharedDataService.changeLoginStatus(true);
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage = 'Invalid username or password';
      }
    );

  }
}
