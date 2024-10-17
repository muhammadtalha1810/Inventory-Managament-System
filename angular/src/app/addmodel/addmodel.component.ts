import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor,NgClass } from '@angular/common';
import { MessageComponent } from '../message/message.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MobiledataService } from '../mobiledata.service';

@Component({
  selector: 'app-addmodel',
  standalone: true,
  imports: [NgFor, NgClass, MessageComponent, ReactiveFormsModule],
  templateUrl: './addmodel.component.html',
  styleUrl: './addmodel.component.css'
})
export class AddmodelComponent implements OnInit {
  @ViewChild(MessageComponent) private message : any
  brandnameslist:any[] = [];

  addmodelform:FormGroup;
 
  constructor(private mobiledataservice:MobiledataService, private fb: FormBuilder){
    this.addmodelform = this.fb.group({
      brandName: ['', Validators.required],
      modelName: ['', Validators.required],
      releaseDate: ['', Validators.required],
      screenSize: [null],
      battery: [null],
      charging: [null],
      simSlots: [null],
    });
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
    let keyword: string = this.addmodelform.get('brandName')?.value;
    if (keyword == '' || keyword == null) {
      keyword = '';
    }
    this.mobiledataservice.getBrandList(keyword, 5).subscribe(
      (response) => {
        this.brandnameslist = response;
      }
    );
  }

  addModel() {
    this.mobiledataservice.addModel(this.addmodelform.value).subscribe(
      (response) => {
        this.message.setDetails(response.message, this.message.messageTypes.success);
        this.addmodelform.reset();
      },
      (error) =>{
        this.message.setDetails(error.error.message, this.message.messageTypes.error);
      }
    )
  }
}
