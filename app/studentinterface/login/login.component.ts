import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/serv/auth/auth.service';
// import { LoginService } from 'src/app/serv/login/login.service';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { response } from 'express';

// interface LoginResponse {
//   role: string;
//   // Other properties of the response object, if any
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  // username: string = '';
  // password: string = '';
  // redirectRoute: string = '/';
  // private role = '';


  showSuccessAlert: boolean = false;
  showDeleteAlert: boolean = false;

  loginForm: FormGroup;
list:any;
  constructor(
    // private http: HttpClient,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    
    ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      
    });
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:  new FormControl(""),
      password:  new FormControl(""),
    });
    
  }

login() {
    if (this.loginForm.invalid){
      console.log('Form invalid!');this.showDeleteAlert = true;
    return; 
    }
    this.authService.login(this.loginForm.value).subscribe(
       (data)=> {
        this.list = data 
        if (this.list.role ==='STUDENT'){
          this.router.navigate(['/dashboard']);
        }
        else if (this.list.role === 'TEACHER') {
              this.router.navigate(['/tdashboard']);
            }
        else if (this.list.role === 'ADMIN') {
              this.router.navigate(['/dashb']);
          }
          
          });
}



}
