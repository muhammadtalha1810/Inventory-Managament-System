import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
  logout(){
    this.isLoggedIn = false;
    this.authService.logout().subscribe(
      (success) => {
        console.log(success);
        this.isLoggedIn = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
