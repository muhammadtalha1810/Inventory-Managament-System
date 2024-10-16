import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-userdata',
  standalone: true,
  imports: [],
  templateUrl: './userdata.component.html',
  styleUrl: './userdata.component.css'
})
export class UserdataComponent implements OnInit{
  userid: number | null = 0;

  constructor(private route: ActivatedRoute, private userdataService: UserdataService){}

  ngOnInit(): void {
    // Get the image ID from the route parameters
    this.route.paramMap.subscribe(params => {
      this.userid = params.get('id') as number | null;
      
      // this.mobiledataservice.getMobileDatabyId(this.modelId).subscribe(
      //   response => {
      //     this.modeldata = response;
      //     console.log(this.modeldata);
      //     this.modeldataform.patchValue(this.modeldata.modelData);
      //     this.specificationsform.patchValue(this.modeldata.specifications);
      //   },
      //   (error) => {
      //     console.log(error);
      //   }
      // )
    });
  }
}
