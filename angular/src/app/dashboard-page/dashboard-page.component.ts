import { Component } from '@angular/core';
import { NgIf, NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';

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
export class DashboardPageComponent {
  usertype = 'indivisual';

  filter_data: FilterData = {
    brands: {
      names: ['Apple', 'Samsung', 'Google', 'OnePlus', 'Vivo'],
      selected: [],
    },
    // price: {
    //   names: ['10000-20000', '20000-30000', '30000-40000', '40000-50000'],
    //   selected: [],
    // },
    // rating: {
    //   names: ['4-5', '3-4', '2-3', '1-2'],
    //   selected: [],
    // },
    // operating: {
    //   names: ['Android', 'iOS', 'Windows', 'MacOS'],
    //   selected: [],
    // },
    ram: {
      names: ['2', '4', '6', '8'],
      selected: [],
    },
    storage: {
      names: ['16', '32', '64', '128'],
      selected: [],
    },
    // processor: {
    //   names: ['Snapdragon', 'Exynos', 'A15 Bionic', 'A14 Bionic'],
    //   selected: [],
    // },
    // camera: {
    //   names: ['12MP', '16MP', '20MP', '24MP'],
    //   selected: [],
    // },
    battery: {
      names: ['3000', '4000', '5000', '6000'],
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
}


/*

brands: ['IPhone', 'Samsung', 'Google', 'OnePlus', 'Vivo'],
    selected_brands: [],
    price: ['10000-20000', '20000-30000', '30000-40000', '40000-50000'],
    selected_price: [],
    rating: ['4-5', '3-4', '2-3', '1-2'],
    selected_rating: [],
    os: ['Android', 'iOS', 'Windows', 'MacOS'],
    selected_os: [],
    ram: ['2GB', '4GB', '6GB', '8GB'],
    selected_ram: [],
    storage: ['16GB', '32GB', '64GB', '128GB'],
    selected_storage: [],
    processor: ['Snapdragon', 'Exynos', 'A15 Bionic', 'A14 Bionic'],
    selected_processor: [],
    camera: ['12MP', '16MP', '20MP', '24MP'],
    selected_camera: [],
    battery: ['3000mAh', '4000mAh', '5000mAh', '6000mAh'],
    selected_battery: [],

*/