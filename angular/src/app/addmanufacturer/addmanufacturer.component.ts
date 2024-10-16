import { Component, OnInit, ViewChild } from '@angular/core';
import { MobiledataService } from '../mobiledata.service';
import { NgFor,NgClass } from '@angular/common';
import { MessageComponent } from '../message/message.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addmanufacturer',
  standalone: true,
  imports: [NgFor, NgClass, MessageComponent, ReactiveFormsModule],
  templateUrl: './addmanufacturer.component.html',
  styleUrl: './addmanufacturer.component.css'
})
export class AddmanufacturerComponent implements OnInit {
  brandnameslist:string[] = [];
  @ViewChild(MessageComponent) private message : any
  addmanufacturerform:FormGroup;

  constructor(private mobiledataservice:MobiledataService, private fb: FormBuilder){
    this.addmanufacturerform = this.fb.group({
      brandName: ['', Validators.required],
      manufacturerName: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      capacity: ['', Validators.required]
    })
  }

  addManufacturer() {
    this.mobiledataservice.addManufacturer(this.addmanufacturerform.value).subscribe(
      (response) => {
        this.message.setDetails(response.message, this.message.messageTypes.success);
        this.addmanufacturerform.reset();
      },
      (error) =>{
        this.message.setDetails(error.error.message, this.message.messageTypes.error);
      }
    )
  }

  ngOnInit(): void {
    this.mobiledataservice.getBrandList(null, 5).subscribe(
      (response) =>{
        this.brandnameslist = response;
      },
      (error) =>{
        console.log(error);
      }
    );
    
  }

  brandinput()
  {
    let keyword: string = this.addmanufacturerform.get('brandName')?.value;
    if (keyword == '' || keyword == null) {
      keyword = '';
    }
    this.mobiledataservice.getBrandList(keyword, 5).subscribe(
      (response) => {
        this.brandnameslist = response;
      }
    );
  }
}
