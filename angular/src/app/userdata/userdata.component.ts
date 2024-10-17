import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from '../userdata.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { MessageComponent } from '../message/message.component';
import { Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-userdata',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgFor, DialogComponent, MessageComponent],
  templateUrl: './userdata.component.html',
  styleUrl: './userdata.component.css'
})
export class UserdataComponent implements OnInit {
  userid: number | null = 0;

  @ViewChild(DialogComponent) dialog: any;
  @ViewChild(MessageComponent) message: any;
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
    // Get the image ID from the route parameters
    this.route.paramMap.subscribe(params => {
      this.userid = params.get('id') as number | null
    });
    this.userdataService.getUserDataById(this.userid).subscribe(
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
