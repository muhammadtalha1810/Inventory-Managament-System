import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-mobiledata',
  standalone: true,
  imports: [NgClass],
  templateUrl: './mobiledata.component.html',
  styleUrl: './mobiledata.component.css'
})
export class MobiledataComponent {
  mode:string = 'view'
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
