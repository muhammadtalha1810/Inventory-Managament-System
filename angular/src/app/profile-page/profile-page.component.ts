import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';
import { MobiledataService } from '../mobiledata.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { UserdataService } from '../userdata.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgFor, DialogComponent, MessageComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  @ViewChild(DialogComponent) dialog : any;
  @ViewChild(MessageComponent) message : any;
  iseditmode: boolean = false;
  userData: any;

  userdataform: FormGroup;

  constructor(private userdataService: UserdataService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.userdataform = this.fb.group({
      userId: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userType: ['', Validators.required],
      description: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.userdataService.getUserData().subscribe(
      response => {
        this.userData = response;
        this.userdataform.patchValue(this.userData);
      },
      error => {
        console.error('Error fetching user data', error);
      }
    );
  }

  updatedata():void{
    this.dialog.setDetails("Update Data", "Are you sure you want to update the users details", "Update", "Cancel");
    this.dialog.openDialog();
  }

  handleDialogResult(result: Boolean){
    console.log(result); //primary or secondary
    if(result)
    {
      this.userdataService.updateUser(this.userdataform.value).subscribe(
        (response) => {
          this.message.setDetails(response.message, this.message.messageTypes.success);
        },
        (error) =>{
          this.message.setDetails(error.error.message, this.message.messageTypes.error);
        }
      );
    }
  }
}
