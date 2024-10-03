import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild(DialogComponent) dialog : any;
  requests: any[] = ["Account Request", "Account Request", "Permission Request", "Custom Order Request", "Account Request", "Account Request", "Permission Request", "Custom Order Request", "Account Request", "Account Request", "Permission Request", "Custom Order Request"];
  openApproveDialog(){
    this.dialog.setDetails("Approve Request", "Are you sure you want to approve this request?", "Approve", "Cancel");
    this.dialog.openDialog();
  }
  openDeclineDialog(){
    this.dialog.setDetails("Decline Request", "Are you sure you want to decline this request?", "Decline", "Cancel");
    this.dialog.openDialog();
  }
  handleDialogResult(result: string){
    console.log(result); //primary or secondary
  }
}
