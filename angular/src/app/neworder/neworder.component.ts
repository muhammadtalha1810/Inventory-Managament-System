import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router , RouterLink} from '@angular/router';
import { MessageComponent } from '../message/message.component';
import { MobiledataService } from '../mobiledata.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-neworder',
  standalone: true,
  imports: [NgFor, DialogComponent, NgIf, FormsModule, MessageComponent, NgClass, ReactiveFormsModule, RouterLink],
  templateUrl: './neworder.component.html',
  styleUrl: './neworder.component.css'
})
export class NeworderComponent {
  @ViewChild(DialogComponent) dialog: any;
  @ViewChild(MessageComponent) message: any;
  usertype: string | null = null;
  orderphase = 'first';
  orderType = 'All';
  dialogaction: string = 'approve';
  dialogorderid: number = 0;
  page_size = 25;
  current_page = 1;
  total_pages = 1;
  varinatnameslist: any[] = [];
  variantName: FormControl = new FormControl('');
  orderitems: any[] = [];
  customerForm: FormGroup;
  paymentMethod: string | null = null;
  orderid: number = 0;

  constructor(private mobiledataservice: MobiledataService, private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.customerForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', Validators.required, Validators.email],
      phoneNumber:['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchorders();
    this.authService.getusertype().subscribe(
      (response) => {
        this.usertype = response.userType;
      },
      (error) => {
        console.log(error.error);
      }
    )
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
    this.mobiledataservice.getOrders(this.current_page, this.page_size, this.orderType).subscribe(
      (data: any) => {
        this.orders = data.data;
        this.total_pages = data.totalPages;
      });
  }

  orders: any[] = [];
  openApproveDialog(orderid: number) {
    this.dialogaction = 'approve';
    this.dialogorderid = orderid;
    this.dialog.setDetails("Approve order", "Are you sure you want to approve this order?", "Approve", "Cancel");
    this.dialog.openDialog();
  }
  openDeclineDialog(orderid: number) {
    this.dialogaction = 'decline';
    this.dialogorderid = orderid;
    this.dialog.setDetails("Decline order", "Are you sure you want to decline this order?", "Decline", "Cancel");
    this.dialog.openDialog();
  }

  variantinput() {
    let keyword: string = this.variantName.value;
    if (keyword == '' || keyword == null) {
      keyword = '';
    }
    this.mobiledataservice.getVariantNames(keyword, 5).subscribe(
      (response) => {
        this.varinatnameslist = response;
      }
    );
  }
  addvariant(): void {
    let variant: string = this.variantName.value;
    if (variant == '' || variant == null) {
      variant = '';
    }
    if (this.orderitems.find(item => item.variantName === variant)) {
      this.message.setDetails('Variant Already Added', this.message.messageTypes.error);
      return;
    }
    this.mobiledataservice.checkVariantNameValidity(variant).subscribe(
      (response) => {
        if (response.result === true) {
          this.orderitems.push({
            variantId: response.data.id,
            variantName: variant,
            quantity: 1,
            unitPrice: response.data.price
          })
          this.message.setDetails('Variant Added', this.message.messageTypes.success);
        }
        else {
          this.message.setDetails('Incorrect Variant Name', this.message.messageTypes.error);
        }
      }
    );
  }

  decreaseQuantity(orderitem: any): void {
    if (orderitem.quantity > 1) {
      orderitem.quantity--;
    }
  }

  increaseQuantity(orderitem: any): void {
    orderitem.quantity++;
  }

  quantityInput(orderitem: any): void {
    if (orderitem.quantity < 1) {
      orderitem.quantity = 1;
    }
  }
  calculateItemPrice(unitPrice: number, quantity: number): string {
    var finalPrice = unitPrice * quantity;
    return finalPrice.toFixed(2);
  }

  deleteItem(orderitem: any): void {
    let index = this.orderitems.indexOf(orderitem);
    this.orderitems.splice(index, 1);
  }

  getTotalPrice(): string {
    var finalPrice = 0;
    this.orderitems.forEach(element => {
      finalPrice += element.unitPrice * element.quantity
    });
    return finalPrice.toFixed(2);
  }
  secondphase(): void {
    if (this.orderitems.length === 0) {
      this.message.setDetails('Please Add Items', this.message.messageTypes.error);
      return;
    }
    if (this.paymentMethod === null) {
      this.message.setDetails('Select Payment Method', this.message.messageTypes.error);
      return;
    }
    if (this.usertype === 'user' && this.paymentMethod === 'Cash') {
      //Place the order
      const body = { paymentMethod: this.paymentMethod, orderItems: this.orderitems};
      this.mobiledataservice.placeOrder(body).subscribe(
        (response) =>{
          this.orderid = response.orderid;
          this.orderphase = 'fourth';
        }
      )
    }
    else if (this.usertype === 'user' && this.paymentMethod === 'Credit/Debit Card') {
      //proceed to third phase/payments
      this.orderphase = 'third';
    }
    else {
      //proceed to second phase 
      this.orderphase = 'second';
    }
  }
  thirdphase():void{
    if(this.paymentMethod === 'Cash')
    {
      const body = { paymentMethod: this.paymentMethod, customer: this.customerForm.value,  orderItems: this.orderitems};
      this.mobiledataservice.placeOrder(body).subscribe(
        (response) =>{
          this.orderid = response.orderid;
          this.orderphase = 'fourth';
        }
      )
    }
    else{
      this.orderphase = 'third';
    }
  }

  handleDialogResult(result: Boolean) {
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
