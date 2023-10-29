import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UsersService } from 'src/app/serv/users/users.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  showSuccessAlert: boolean = false;
  showDeleteAlert: boolean = false;

  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private signupService: SignupService
    private usersService: UsersService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname:  new FormControl(""),
      lastname:  new FormControl(""),
      email: new FormControl(""),
      username: new FormControl(""),
      phone: new FormControl(''),

      // phone: new FormControl('', [Validators.required,this.phoneNumberValidator, Validators.pattern(/^\d{8}$/),Validators.minLength(8), Validators.maxLength(8)]),
      role:  new FormControl(""),
      // phone:  new FormControl(""),
      dateofbirth:  new FormControl(""),
      gender:  new FormControl(""),
      password:  new FormControl(""),
    });
  }

  // phoneNumberValidator(control: AbstractControl): { [key: string]: any } | null {
  //   const phoneNumber = control.value;
  //   if (phoneNumber && phoneNumber.length !== 8) {
  //     return { invalidPhoneNumber: true };
  //   }
  //   return null;
  // }

  createUser() {
    this.usersService.createUser(this.registerForm.value).subscribe(
      response => {
        console.log(response);    this.showSuccessAlert = true;

      },
      error => {
        console.log(error);
      }
    );
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);

  }
  }

