import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [NgIf, FormsModule, NgFor, DialogComponent, MessageComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent implements OnInit {
  @ViewChild(DialogComponent) dialog : any;
  @ViewChild(MessageComponent) message : any;
  page_size = 25;
  current_page = 1;
  total_pages = 1;
  users: any[] = [];
  usedid_delete:number = 0;

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
  deleteuser(userid:number):void
  {
    this.usedid_delete = userid;
    this.dialog.setDetails("Delete User", `Are you sure you want to delete the user with id: ${userid}`, "Delete", "Cancel");
    this.dialog.openDialog();
  }
  handleDialogResult(result: Boolean){
    console.log(result); //primary or secondary
    if(result)
    {
      this.userdataservice.deleteUser(this.usedid_delete).subscribe(
        (response) => {
          this.message.setDetails(response, this.message.messageTypes.success);
        },
        (error) =>{
          this.message.setDetails(error.error.message, this.message.messageTypes.error);
        }
      );
      this.fetchUsers();
    }
  }
}
