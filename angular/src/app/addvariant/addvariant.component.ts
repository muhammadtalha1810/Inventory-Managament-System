import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor,NgClass } from '@angular/common';
import { MessageComponent } from '../message/message.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MobiledataService } from '../mobiledata.service';

@Component({
  selector: 'app-addvariant',
  standalone: true,
  imports: [NgFor, NgClass, MessageComponent, ReactiveFormsModule],
  templateUrl: './addvariant.component.html',
  styleUrl: './addvariant.component.css'
})
export class AddvariantComponent implements OnInit  {
  @ViewChild(MessageComponent) private message : any
  brandnameslist:any[] = [];
  modelsNames:any[] = [];
  addvariantform:FormGroup;
 
  constructor(private mobiledataservice:MobiledataService, private fb: FormBuilder){
    this.addvariantform = this.fb.group({
      brandName: ['', Validators.required],
      modelName: ['', Validators.required],
      variantName: ['', Validators.required],
      ram: ['', Validators.required],
      storage: ['', Validators.required],
      color: ['', Validators.required],
      retailPrice: ['', Validators.required],
      wholesalePrice: ['', Validators.required]
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
    this.mobiledataservice.getModelsNames(null, 5).subscribe(
      (response) =>{
        this.modelsNames = response;
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  addVariant() {
    this.mobiledataservice.addVariant(this.addvariantform.value).subscribe(
      (response) => {
        this.message.setDetails(response.message, this.message.messageTypes.success);
        this.addvariantform.reset();
      },
      (error) =>{
        this.message.setDetails(error.error.message, this.message.messageTypes.error);
      }
    )
  }

  brandinput()
  {
    let keyword: string = this.addvariantform.get('brandName')?.value;
    if (keyword == '' || keyword == null) {
      keyword = '';
    }
    this.mobiledataservice.getBrandList(keyword, 5).subscribe(
      (response) => {
        this.brandnameslist = response;
      }
    );
  }

  onModelNameChange() {
    let keyword: string = this.addvariantform.get('modelName')?.value;
    if (keyword == '' || keyword == null) {
      keyword = '';
    }
    this.mobiledataservice.getModelsNames(keyword, 5).subscribe(
      (response) => {
        this.modelsNames = response;
      }
    );
  }
}
