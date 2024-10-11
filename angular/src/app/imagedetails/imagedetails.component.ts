import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imagedetails',
  standalone: true,
  imports: [],
  templateUrl: './imagedetails.component.html',
  styleUrl: './imagedetails.component.css'
})
export class ImagedetailsComponent implements OnInit {
  modelId: string | null = null;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    // Get the image ID from the route parameters
    this.route.paramMap.subscribe(params => {
      this.modelId = params.get('id');
      // You can now use this.imageId to fetch your image data
    });
  }
}
