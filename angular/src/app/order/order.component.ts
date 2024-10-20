import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
import { MobiledataService } from '../mobiledata.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [NgFor, DialogComponent, NgIf, FormsModule, MessageComponent, NgClass, ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  @ViewChild(DialogComponent) dialog: any;
  @ViewChild(MessageComponent) message: any;
  page_size = 25;
  current_page = 1;
  total_pages = 1;
  orderitems: any[] = [];
  orderid: number|null = 0;
  orderStatus:string = 'all';

  constructor(private route: ActivatedRoute, private mobiledataservice: MobiledataService, private router: Router, private fb: FormBuilder, private authService: AuthService) {
    
  }

  ngOnInit(): void {
    // Get the image ID from the route parameters
    this.route.paramMap.subscribe(params => {
      this.orderid = params.get('id') as number | null;
      this.fetchorders();
    });
  }


  prevPage() {
    this.current_page--;
    this.fetchorders();
  }
  nextPage() {
    this.current_page++;
    this.fetchorders();
  }
  fetchorders() {
    this.mobiledataservice.getOrder(this.orderid).subscribe(
      (data: any) => {
        this.orderitems = data.orderitems;
        this.orderStatus = data.orderStatus;
      });
  }





  calculateItemPrice(unitPrice: number, quantity: number): string {
    var finalPrice = unitPrice * quantity;
    return finalPrice.toFixed(2);
  }

  getTotalPrice(): string {
    var finalPrice = 0;
    this.orderitems.forEach(element => {
      finalPrice += element.unitPrice * element.quantity
    });
    return finalPrice.toFixed(2);
  }

  updateStatus():void{
    this.mobiledataservice.updateOrderStatus(this.orderid, this.orderStatus).subscribe(
      (response) =>
      {
        this.message.setDetails(response, this.message.messageTypes.success);
      },
      (error) => {
        this.message.setDetails(error.error.message, this.message.messageTypes.error);
      }
    )
  }
}
