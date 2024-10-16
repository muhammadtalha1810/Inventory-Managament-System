import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgClass],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  errorMesaage:string = '';
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private userdataservice: UserdataService, private router: Router){
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      userType: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: [''],
      phoneNumber: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  onSubmit() {
    //console.log(this.registerForm.value);
    var formdata = this.registerForm.value;
    this.userdataservice.register(formdata).subscribe(
      response => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMesaage = error.error.message;
      }
    );
  }
}
