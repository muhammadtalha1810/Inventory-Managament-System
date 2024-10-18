import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';
import { FormControl, FormsModule } from '@angular/forms';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';


@Component({
  selector: 'app-requests-page',
  standalone: true,
  imports: [NgFor, DialogComponent, NgIf,  FormsModule, MessageComponent, NgClass],
  templateUrl: './requests-page.component.html',
  styleUrl: './requests-page.component.css'
})
export class RequestsPageComponent implements OnInit{
  @ViewChild(DialogComponent) dialog : any;
  @ViewChild(MessageComponent) message : any;
  requestType = 'Pending';
  dialogaction:string = 'approve';
  dialogrequestid:number = 0;
  page_size = 25;
  current_page = 1;
  total_pages = 1;

  constructor(private userdataservice:UserdataService, private router: Router) { }
  
  ngOnInit(): void {
    this.fetchRequests();
  }

  prevPage(){
    this.current_page--;
    this.fetchRequests();
  }
  nextPage(){
    this.current_page++;
    this.fetchRequests();
  }
  fetchRequests(){
    this.userdataservice.getRequests(this.current_page, this.page_size, this.requestType).subscribe(
      (data: any) => {
      this.requests = data.data;
      this.total_pages = data.totalPages;
    });
  }

  requests: any[] = [];
  openApproveDialog(requestid:number){
    this.dialogaction = 'approve';
    this.dialogrequestid = requestid;
    this.dialog.setDetails("Approve Request", "Are you sure you want to approve this request?", "Approve", "Cancel");
    this.dialog.openDialog();
  }
  openDeclineDialog(requestid:number){
    this.dialogaction = 'decline';
    this.dialogrequestid = requestid;
    this.dialog.setDetails("Decline Request", "Are you sure you want to decline this request?", "Decline", "Cancel");
    this.dialog.openDialog();
  }

  handleDialogResult(result: Boolean){
    console.log(result); //primary or secondary
    if(result)
    {
      if(this.dialogaction == 'approve')
      {
        this.userdataservice.approveRequest(this.dialogrequestid).subscribe(
          (response) => {
            this.message.setDetails(response, this.message.messageTypes.success);
          },
          (error) =>{
            this.message.setDetails(error.error.message, this.message.messageTypes.error);
          }
        );
      }
      else{
        this.userdataservice.declineRequest(this.dialogrequestid).subscribe(
          (response) => {
            this.message.setDetails(response, this.message.messageTypes.success);
          },
          (error) =>{
            this.message.setDetails(error.error.message, this.message.messageTypes.error);
          }
        );
      }
      this.fetchRequests();
    }
  }
}
