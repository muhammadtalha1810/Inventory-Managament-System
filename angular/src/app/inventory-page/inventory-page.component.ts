import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddstockComponent } from '../addstock/addstock.component';
import { AddbrandComponent } from '../addbrand/addbrand.component';
import { AddmodelComponent } from '../addmodel/addmodel.component';
import { AddvariantComponent } from '../addvariant/addvariant.component';
import { AddmanufacturerComponent } from '../addmanufacturer/addmanufacturer.component';
import { AddmobileimageComponent } from '../addmobileimage/addmobileimage.component';

@Component({
  selector: 'app-inventory-page',
  standalone: true,
  imports: [CommonModule, AddstockComponent, AddbrandComponent, AddmodelComponent, AddvariantComponent, AddmanufacturerComponent, AddmobileimageComponent],
  templateUrl: './inventory-page.component.html',
  styleUrl: './inventory-page.component.css'
})
export class InventoryPageComponent {
  current_page: string = "addstock";
  is_admin: boolean = true;
  isAddEntitiesOpened: boolean = true;
  isViewEntitiesOpened: boolean = false;
}
