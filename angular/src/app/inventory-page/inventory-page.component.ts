import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory-page.component.html',
  styleUrl: './inventory-page.component.css'
})
export class InventoryPageComponent {
  is_admin: boolean = true;
  isAddEntitiesOpened: boolean = false;
  isViewEntitiesOpened: boolean = false;
}
