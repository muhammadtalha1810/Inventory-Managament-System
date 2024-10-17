import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor,NgClass } from '@angular/common';
import { MessageComponent } from '../message/message.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MobiledataService } from '../mobiledata.service';
@Component({
  selector: 'app-addbrand',
  standalone: true,
  imports: [NgClass, MessageComponent, ReactiveFormsModule],
  templateUrl: './addbrand.component.html',
  styleUrl: './addbrand.component.css'
})
export class AddbrandComponent {
  @ViewChild(MessageComponent) private message : any


  addbrandform:FormGroup;
 
  constructor(private mobiledataservice:MobiledataService, private fb: FormBuilder){
    this.addbrandform = this.fb.group({
      displayName: ['', Validators.required],
      legalName: ['', Validators.required],
      description: [''],
      websiteUrl: [''],
    });
  }


  addBrand() {
    this.mobiledataservice.addBrand(this.addbrandform.value).subscribe(
      (response) => {
        this.message.setDetails(response.message, this.message.messageTypes.success);
        this.addbrandform.reset();
      },
      (error) =>{
        this.message.setDetails(error.error.message, this.message.messageTypes.error);
      }
    )
  }
}
