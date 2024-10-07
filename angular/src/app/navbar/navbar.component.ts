import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../auth.service';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  constructor(private router: Router, private authService: AuthService, private sharedDataService: SharedDataService) { }
  ngOnInit(): void {
    this.sharedDataService.currentLoginStatus.subscribe(status => this.isLoggedIn = status);
    this.authService.getisLoggedIn().subscribe(
      (res: any) => 
        { 
          this.isLoggedIn = (Boolean(res.isLoggedIn));
        }
      );
  }
  logout(){
    this.isLoggedIn = false;
    this.authService.logout();
  }
}
