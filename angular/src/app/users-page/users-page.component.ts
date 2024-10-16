import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [NgIf, FormsModule, NgFor],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent implements OnInit {
  page_size = 25;
  current_page = 1;
  total_pages = 1;
  users: any[] = [];

  constructor(private userdataservice:UserdataService, private router: Router) { }
  
  ngOnInit(): void {
    this.fetchUsers();
  }

  prevPage(){
    this.current_page--;
    this.fetchUsers();
  }
  nextPage(){
    this.current_page++;
    this.fetchUsers();
  }
  fetchUsers(){
    this.userdataservice.getUsersList(this.current_page, this.page_size).subscribe(
      (data: any) => {
      this.users = data.data;
      this.total_pages = data.totalPages;
    });
  }
  openuser(userid:number):void
  {
    this.router.navigate([`/userdata/${userid}`]);
  }
  adduser():void{
    this.router.navigate(['/adduser'])
  }
}
