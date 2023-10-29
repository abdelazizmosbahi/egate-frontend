import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  } from '@angular/forms';
import { Validators  } from '@angular/forms'; // for the msut match password
import { UsersService } from 'src/app/serv/users/users.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/serv/users/users.model';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit{

  id=this.activateroute.snapshot.params['id'];


  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  dateofbirth: string = '';
  gender:string='';
  password: string='';
  confirmPassword: string=''; //new

  currentUser: any;
  DetailProfile: any;
  info_profile: any;

  @Input() user: any;
  showSuccessAlert: boolean = false;
  showDeleteAlert: boolean = false;
    editProfileForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private activateroute:ActivatedRoute,

    ) { this.editProfileForm = this.formBuilder.group({  });
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
       //new 
       this.editProfileForm = this.formBuilder.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      });
      //new
  }
  ngOnInit() :void {
    console.log(this.currentUser,'user');

    this.editProfileForm = this.formBuilder.group({
      firstname:  new FormControl(""),
      lastname:  new FormControl(""),
      email: new FormControl(""),
      phone: new FormControl(""),
      dateofbirth:  new FormControl(""),
      gender:  new FormControl(""),
      password:  new FormControl(""),

    });

    this.get_detail_profile();

  }
  setFormValues() {
    this.editProfileForm.patchValue({
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email,
      phone: this.user.phone,
      dateofbirth: this.user.dateofbirth,
      gender: this.user.gender,
      password: this.user.password,

    });
  }
  get_detail_profile(id?: any) {
    this.usersService.getUserById(this.id).subscribe({
      next: (res: any) => {
        // console.log(res, ' profile details2222');
        this.DetailProfile = res;

        this.info_profile = this.DetailProfile
        this.editProfileForm.patchValue({
          firstname: this.info_profile.firstname,
          lastname: this.info_profile.lastname,
          email: this.info_profile.email,
          phone:this.info_profile.phone,
          dateofbirth: this.info_profile.dateofbirth,
          gender: this.info_profile.gender,
          // password: this.info_profile.password,


         
        })
        // console.log('info', this.editProfileForm.value) //dont show these details
      },
      error: (e) => {
        console.log('error getting info', e)
      },
      complete: () => {
        console.info('profile details returned')
      }
    })
  }


  getUserById(userId: string) {
    this.usersService.getUserById(userId).subscribe((user) => {
      this.user = user;
      console.log(this.user, 'user id');
    });
  }

  deleteUser(userId: string) {
    console.log(userId);
    this.usersService.deleteUser(userId).subscribe(
      () => {
        console.log('Account deleted successfully!');
        this.getUserById(userId); this.showDeleteAlert = true;
      },
      (error) => {
        console.error('Error deleting Account:', error);
      }
    );
  }

  updateUser() {
    //new
      if (this.editProfileForm.valid) {
        // Check if passwords match
        if (this.password !== this.confirmPassword) {
          // Handle the case when passwords don't match
          console.log("Passwords do not match!");
          return;
        }
      
      //new
    this.usersService.updateUser(this.id,this.editProfileForm.value).subscribe(() => {
    const updatedValues = this.editProfileForm.value;
    
    console.log('Password changed successfully:');
    this.showSuccessAlert = true;
      
    });
}



}
}


//   id=this.activateroute.snapshot.params['id'];


 
//   password: string='';

//   currentUser: any;
//   DetailProfile: any;
//   info_profile: any;

//   @Input() user: any;
//   showSuccessAlert: boolean = false;
//   showDeleteAlert: boolean = false;
//     changePasswordForm!: FormGroup;


//   constructor(
//     private formBuilder: FormBuilder,
//     private usersService: UsersService,
//     private activateroute:ActivatedRoute,

//     ) { 
//       this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

//   }
//   ngOnInit() :void {
//     console.log(this.currentUser,'user');

    
//     this.changePasswordForm = this.formBuilder.group({
//       password:  new FormControl(""),
//       newPassword:  new FormControl(""),
//       confirmNewPassword:  new FormControl(""),
     
//     });


//   }
//   setFormValues() {
    
//     this.changePasswordForm.patchValue({
//       newPassword: this.user.password,
    
//     });
//   }



//   getUserById(userId: string) {
//     this.usersService.getUserById(userId).subscribe((user) => {
//       this.user = user;
//       console.log(this.user, 'user id');
//     });
//   }

// changePassword() {
//   this.usersService.changePassword(this.id,this.changePasswordForm.value).subscribe(() => {
//   const updatedValues = this.changePasswordForm.value;
  
//   console.log('password changed', this.changePasswordForm.value);
//   this.showSuccessAlert = true;
    
//   });
// }