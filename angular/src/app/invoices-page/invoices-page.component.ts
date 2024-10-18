import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
import { MobiledataService } from '../mobiledata.service';

@Component({
  selector: 'app-invoices-page',
  standalone: true,
  imports: [NgFor, DialogComponent, NgIf,  FormsModule, MessageComponent, NgClass],
  templateUrl: './invoices-page.component.html',
  styleUrl: './invoices-page.component.css'
})
export class InvoicesPageComponent {
  @ViewChild(DialogComponent) dialog : any;
  @ViewChild(MessageComponent) message : any;
  orderType = 'Initiated';
  dialogaction:string = 'approve';
  dialogorderid:number = 0;
  page_size = 25;
  current_page = 1;
  total_pages = 1;

  constructor(private mobiledataservice:MobiledataService, private router: Router) { }
  
  ngOnInit(): void {
    this.fetchorders();
  }

  prevPage(){
    this.current_page--;
    this.fetchorders();
  }
  nextPage(){
    this.current_page++;
    this.fetchorders();
  }
  fetchorders(){
    this.mobiledataservice.getOrders(this.current_page, this.page_size, this.orderType).subscribe(
      (data: any) => {
      this.orders = data.data;
      this.total_pages = data.totalPages;
    });
  }

  orders: any[] = [];
  openApproveDialog(orderid:number){
    this.dialogaction = 'approve';
    this.dialogorderid = orderid;
    this.dialog.setDetails("Approve order", "Are you sure you want to approve this order?", "Approve", "Cancel");
    this.dialog.openDialog();
  }
  openDeclineDialog(orderid:number){
    this.dialogaction = 'decline';
    this.dialogorderid = orderid;
    this.dialog.setDetails("Decline order", "Are you sure you want to decline this order?", "Decline", "Cancel");
    this.dialog.openDialog();
  }

  handleDialogResult(result: Boolean){
    console.log(result); //primary or secondary
    // if(result)
    // {
    //   if(this.dialogaction == 'approve')
    //   {
    //     this.userdataservice.approveorder(this.dialogorderid).subscribe(
    //       (response) => {
    //         this.message.setDetails(response, this.message.messageTypes.success);
    //       },
    //       (error) =>{
    //         this.message.setDetails(error.error.message, this.message.messageTypes.error);
    //       }
    //     );
    //   }
    //   else{
    //     this.userdataservice.declineorder(this.dialogorderid).subscribe(
    //       (response) => {
    //         this.message.setDetails(response, this.message.messageTypes.success);
    //       },
    //       (error) =>{
    //         this.message.setDetails(error.error.message, this.message.messageTypes.error);
    //       }
    //     );
    //   }
    //   this.fetchorders();
    // }
  }

}
