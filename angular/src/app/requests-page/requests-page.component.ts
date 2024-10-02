import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-requests-page',
  standalone: true,
  imports: [NgFor, DialogComponent],
  templateUrl: './requests-page.component.html',
  styleUrl: './requests-page.component.css'
})
export class RequestsPageComponent{
  dialog_class: string = "hidden";
  requests: any[] = ["Account Request", "Account Request", "Permission Request", "Custom Order Request", "Account Request", "Account Request", "Permission Request", "Custom Order Request", "Account Request", "Account Request", "Permission Request", "Custom Order Request"];
  openDialog(){
    this.dialog_class = "visible";
  }

}
