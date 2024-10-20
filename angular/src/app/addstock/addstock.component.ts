import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor,NgClass } from '@angular/common';
import { MessageComponent } from '../message/message.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MobiledataService } from '../mobiledata.service';

@Component({
  selector: 'app-addstock',
  standalone: true,
  imports: [NgFor, NgClass, MessageComponent, ReactiveFormsModule],
  templateUrl: './addstock.component.html',
  styleUrl: './addstock.component.css'
})
export class AddstockComponent {
  @ViewChild(MessageComponent) private message : any
  brandnameslist:any[] = [];
  modelsNames:any[] = [];
  variantNames:any[] = [];
  manufacturerNames:any[] = [];
  warehouseNames:any[] = [];

  addstockform:FormGroup;
 
  constructor(private mobiledataservice:MobiledataService, private fb: FormBuilder){
    this.addstockform = this.fb.group({
      //brandName: ['', Validators.required],
      //modelName: ['', Validators.required],
      variantName: ['', Validators.required],
      manufacturerName: ['', Validators.required],
      quantity: [null, Validators.required],
      warehouseName: ['', Validators.required]
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
    this.mobiledataservice.getVariantNames(null, 5).subscribe(
      (response) =>{
        this.variantNames = response;
      },
      (error) =>{
        console.log(error);
      }
    );
    this.mobiledataservice.getManufacturerNames(null, 5).subscribe(
      (response) =>{
        this.manufacturerNames = response;
      },
      (error) =>{
        console.log(error);
      }
    );
    this.mobiledataservice.getWarehousesNames(null, 5).subscribe(
      (response) =>{
        this.warehouseNames = response;
      },
      (error) =>{
        console.log(error);
      }
    );
  }


  addStock() {
    this.mobiledataservice.addStock(this.addstockform.value).subscribe(
      (response) => {
        this.message.setDetails(response.message, this.message.messageTypes.success);
        this.addstockform.reset();
      },
      (error) =>{
        this.message.setDetails(error.error.message, this.message.messageTypes.error);
      }
    )
  }

  brandinput()
  {
    let keyword: string = this.addstockform.get('brandName')?.value;
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
    let keyword: string = this.addstockform.get('modelName')?.value;
    if (keyword == '' || keyword == null) {
      keyword = '';
    }
    this.mobiledataservice.getModelsNames(keyword, 5).subscribe(
      (response) => {
        this.modelsNames = response;
      }
    );
  }

  onVariantNameChange() {
    let keyword: string = this.addstockform.get('variantName')?.value;
    if (keyword == '' || keyword == null) {
      keyword = '';
    }
    this.mobiledataservice.getVariantNames(keyword, 5).subscribe(
      (response) => {
        this.variantNames = response;
      }
    );
  }

  onManufacturerNameChange() {
    let keyword: string = this.addstockform.get('manufacturerName')?.value;
    if (keyword == '' || keyword == null) {
      keyword = '';
    }
    this.mobiledataservice.getManufacturerNames(keyword, 5).subscribe(
      (response) => {
        this.manufacturerNames = response;
      }
    );
  }

  onWarehouseNameChange() {
    let keyword: string = this.addstockform.get('modelName')?.value;
    if (keyword == '' || keyword == null) {
      keyword = '';
    }
    this.mobiledataservice.getWarehousesNames(keyword, 5).subscribe(
      (response) => {
        this.warehouseNames = response;
      }
    );
  }
  
}
