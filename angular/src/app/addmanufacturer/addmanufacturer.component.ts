import { Component, OnInit } from '@angular/core';
import { MobiledataService } from '../mobiledata.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-addmanufacturer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './addmanufacturer.component.html',
  styleUrl: './addmanufacturer.component.css'
})
export class AddmanufacturerComponent implements OnInit {
  brandnameslist:string[] = [];

  constructor(private mobiledataservice:MobiledataService){}

  addManufacturer(event: Event) {
    event.preventDefault();
    console.log(event);
  }

  ngOnInit(): void {
    this.mobiledataservice.getBrandList().subscribe(
      (response) =>{
        this.brandnameslist = response;
      },
      (error) =>{
        console.log(error);
      }
    );
    this.brandnameslist = ["Infinix", "Apple", "Samsung"];
  }
}
