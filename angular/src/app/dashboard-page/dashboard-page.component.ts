import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';
import { MobiledataService } from '../mobiledata.service';

interface EntityData {
  names: string[];
  selected: string[];
}

interface FilterData {
  [key: string]: EntityData;  // Each key is an entity like brands, price, etc.
}

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [NgIf, FormsModule, NgFor, KeyValuePipe],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent implements OnInit {
  
  constructor(private mobiledataService: MobiledataService) { }
  
  ngOnInit(): void {
    this.fetchProducts();
  }
  
  ram_filter_value = 4;
  storage_filter_value = 64;
  rating_filter_min_value = 1;
  rating_filter_max_value = 5;
  price_filter_min_value = 50;
  price_filter_max_value = 1000;
  battery_filter_min_value = 2500;
  battery_filter_max_value = 5000;
  usertype = 'indivisual';
  search_input_value = '';
  page_size = 24;
  current_page = 1;
  total_pages = 1;
  products: any[] = [];

  filter_data: FilterData = {
    brands: {
      names: ['Apple', 'Samsung', 'Google', 'OnePlus', 'Vivo'],
      selected: [],
    }
  }
 
  toggle(entity_type:string, entity_name: string, event: any) {
    if (event.target.checked) {
      this.filter_data[entity_type].selected.push(entity_name);
    } else {
      const index = this.filter_data[entity_type].selected.indexOf(entity_name);
      if (index > -1) {
        this.filter_data[entity_type].selected.splice(index, 1);
      }
    }
    console.log(this.filter_data[entity_type].selected);
  }
  updateRatingFilter(event: any) {
    if(this.rating_filter_min_value>=this.rating_filter_max_value){
      if(this.rating_filter_max_value == 1)
      {
        return;
      }
      this.rating_filter_min_value = this.rating_filter_max_value - 0.5;
    }
  }
  updatePriceFilter(event: any) {
    if(this.price_filter_min_value>=this.price_filter_max_value){
      if(this.price_filter_max_value == 50)
      {
        return;
      }
      this.price_filter_min_value = this.price_filter_max_value - 10;
    }
  }
  updateBatteryFilter(event: any) {
    if(this.battery_filter_min_value>=this.battery_filter_max_value){
      if(this.battery_filter_max_value == 2500)
      {
        return;
      }
      this.battery_filter_min_value = this.battery_filter_max_value - 100;
    }
  }
  prevPage(){
    this.current_page--;
    this.fetchProducts();
  }
  nextPage(){
    this.current_page++;
    this.fetchProducts();
  }
  fetchProducts(){
    const body = {
      pageNumber: this.current_page,
      pageSize: this.page_size,
      brandFilter: this.filter_data['brands'].selected.join(','),
      priceFilterMin: this.price_filter_min_value,
      priceFilterMax: this.price_filter_max_value,
      ratingFilterMin: this.rating_filter_min_value,
      ratingFilterMax: this.rating_filter_max_value,
      ramFilterValue: this.ram_filter_value,
      storageFilterValue: this.storage_filter_value,
      batteryFilterMin: this.battery_filter_min_value,
      batteryFilterMax: this.battery_filter_max_value,
      searchKeyword: this.search_input_value
    }
    this.mobiledataService.getMobileData(body).subscribe((data: any) => {
      this.products = data.data;
      this.total_pages = data.totalPages;
    });
  }
}
