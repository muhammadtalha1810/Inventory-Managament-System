import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';
import { MobiledataService } from '../mobiledata.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-mobiledata',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgFor, DialogComponent],
  templateUrl: './mobiledata.component.html',
  styleUrl: './mobiledata.component.css'
})
export class MobiledataComponent implements OnInit {
  iseditmode: boolean = false;
  modelId: number | null = 0;
  modeldata: any;
  @ViewChild(DialogComponent) dialog : any;

  modeldataform: FormGroup;
  specificationsform: FormGroup;

  constructor(private route: ActivatedRoute, private mobiledataservice: MobiledataService, private fb: FormBuilder) {
    this.modeldataform = this.fb.group({
      modelId: ['', Validators.required],
      modelName: ['', Validators.required],
      releasaeDate: ['', Validators.required],
      rating: ['', Validators.required],
      brandName: ['', Validators.required],
    });
    this.specificationsform = this.fb.group({
      screensize: ['', Validators.required],
      batterySize: ['', Validators.required],
      simSlots: ['', Validators.required],
      chargingSpeed: ['', Validators.required],
      weight: ['', Validators.required],
      processor: ['', Validators.required],
      camera: ['', Validators.required],
      operatingSystem: ['', Validators.required],
      horizontalPixels: ['', Validators.required],
      verticalPixels: ['', Validators.required],
    });
  }




  ngOnInit(): void {
    // Get the image ID from the route parameters
    this.route.paramMap.subscribe(params => {
      this.modelId = params.get('id') as number | null;
      this.mobiledataservice.getMobileDatabyId(this.modelId).subscribe(
        response => {
          this.modeldata = response;
          console.log(this.modeldata);
          this.modeldataform.patchValue(this.modeldata.modelData);
          this.specificationsform.patchValue(this.modeldata.specifications);
        },
        (error) => {
          console.log(error);
        }
      )
    });
  }

  updatedata():void{
    this.dialog.setDetails("Update Data", "Are you sure you want to update the model details", "Update", "Cancel");
    this.dialog.openDialog();
  }

  handleDialogResult(result: string){
    console.log(result); //primary or secondary
  }

  // removeram(ram: string) {
  //   const index = this.modeldata.variants.ramData.indexOf(ram, 0);
  //   if (index > -1) {
  //     this.modeldata.variants.ramData.splice(index, 1);
  //   }
  // }
  // removestorage(storage: string) {
  //   const index = this.modeldata.variants.storageData.indexOf(storage, 0);
  //   if (index > -1) {
  //     this.modeldata.variants.storageData.splice(index, 1);
  //   }
  // }
  // removecolor(color: string) {
  //   const index = this.modeldata.variants.colorsData.indexOf(color, 0);
  //   if (index > -1) {
  //     this.modeldata.variants.colorsData.splice(index, 1);
  //   }
  // }
}
