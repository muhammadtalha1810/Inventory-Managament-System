import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-addrequest',
  standalone: true,
  imports: [MessageComponent, ReactiveFormsModule],
  templateUrl: './addrequest.component.html',
  styleUrl: './addrequest.component.css'
})
export class AddrequestComponent {
  @ViewChild(MessageComponent) private message : any
  requestForm:FormGroup;
  constructor(private fb: FormBuilder, private userdataservice: UserdataService, private router: Router){
    this.requestForm = this.fb.group({
      title:['', Validators.required],
      body:['', Validators.required]
    });
  }
  onSubmit():void{
    this.userdataservice.addRequest(this.requestForm.value).subscribe(
      (response) =>
      {
        this.message.setDetails(response.message, this.message.messageTypes.success);
      },
      (error) =>{
        this.message.setDetails(error.error.message, this.message.messageTypes.error);
      }
    )
  }

}
