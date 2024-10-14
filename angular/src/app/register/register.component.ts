import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
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
    this.userdataservice.register(this.registerForm.value).subscribe(
      response => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMesaage = error.error.message;
      }
    );
  }
}
