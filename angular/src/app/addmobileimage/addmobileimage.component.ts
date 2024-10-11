import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ImageService } from '../image.service';
import { MobiledataService } from '../mobiledata.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-addmobileimage',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgFor],
  templateUrl: './addmobileimage.component.html',
  styleUrl: './addmobileimage.component.css'
})
export class AddmobileimageComponent {
  modelsNames: string[] = [];
  messageTypes = { error: 'error', success: 'success' };
  messageText: string = '';
  messageType: string = this.messageTypes.success;
  addMobileImageForm: FormGroup;
  constructor(private fb: FormBuilder, private imageService: ImageService, private mobiledataService: MobiledataService) {
    this.addMobileImageForm = this.fb.group({
      imageFile: ['', Validators.required],
      modelName: ['']
    });
  }

  addMobileImage(event: Event) {
    event.preventDefault();
    // Get the actual File object from the FormGroup
    let imageFile = (document.getElementById('image-file') as HTMLInputElement).files?.[0] as File;
    const modelName = this.addMobileImageForm.get('modelName')?.value;

    this.imageService.uploadImage(imageFile, modelName).subscribe(
      (response) => {
        this.messageText = response.message;
        this.messageType = this.messageTypes.success;
      },
      (error) => {
        this.messageText = error.error.message;
        this.messageType = this.messageTypes.error;
      }
    );
  }

  onModelNameChange(event: Event) {
    let keyword: string = this.addMobileImageForm.get('modelName')?.value;
    if (keyword == '' || keyword == null) {
      keyword = '';
    }
    this.mobiledataService.getModelsNames(keyword, 5).subscribe(
      (response) => {
        this.modelsNames = response;
      }
    );
  }
}
