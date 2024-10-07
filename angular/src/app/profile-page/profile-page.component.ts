import { Component } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  userData: any;

  constructor(private userdataService: UserdataService) { }

  ngOnInit(): void {
    this.userdataService.getUserData().subscribe(
      response => {
        this.userData = response;
      },
      error => {
        console.error('Error fetching user data', error);
      }
    );
  }

}
